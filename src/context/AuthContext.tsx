import {
  createContext,
  ReactNode,
  useContext,
  useCallback,
  useState,
  useEffect,
} from "react";
import { useNavigate } from "react-router-dom";

import { api } from "../services/api";

export interface IUser {
  name: string;
  token: string;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextProviderProps {
  children: ReactNode;
}

interface AuthContextData {
  isAuthenticated: boolean;
  user: IUser | null;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
  isLoading: boolean;
  error: boolean | null;
}
export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<IUser | null>(null);
  const isAuthenticated = !!user;
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState<boolean | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("@VaBeauty1.0:token");
    const name = localStorage.getItem("@VaBeauty1.0:name");

    if (token && name) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setUser({ token, name });
    }
    setLoading(false);
  }, []);

  async function signIn({ email, password }: SignInCredentials) {
    try {
      const response = await api.post("/authenticate", {
        email,
        password,
      });
      console.log(response.data);
      const { name, token } = response.data;

      console.log(response.data);

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      localStorage.setItem("@VaBeauty1.0:token", token);
      localStorage.setItem("@VaBeauty1.0:name", name);

      setUser({
        name,
        token,
      });
    } catch (err) {
      setError(true);
    }
  }

  function signOut() {
    setUser(null);
    localStorage.removeItem("@VaBeauty1.0:token");
    localStorage.removeItem("@VaBeauty1.0:name");
    api.defaults.headers.common["Authorization"] = false;
  }

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, signIn, user, signOut, isLoading, error }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within a AuthProvider");
  }

  return context;
}
