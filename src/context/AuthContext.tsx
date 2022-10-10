import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from "react";

import { api } from "../services/api";

export interface IUser {
  name: string;
  token: string;
  id: string;
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
    const id = localStorage.getItem("@VaBeauty1.0:id");

    if (token && name && id) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setUser({ token, name, id });
    }
    setLoading(false);
  }, []);

  async function signIn({ email, password }: SignInCredentials) {
    try {
      const response = await api.post("/authenticate", {
        email,
        password,
      });

      const { name, token, id } = response.data;

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      localStorage.setItem("@VaBeauty1.0:token", token);
      localStorage.setItem("@VaBeauty1.0:name", name);
      localStorage.setItem("@VaBeauty1.0:id", id);

      setUser({
        name,
        token,
        id,
      });
    } catch (err) {
      setError(true);
    }
  }

  function signOut() {
    setUser(null);
    localStorage.removeItem("@VaBeauty1.0:token");
    localStorage.removeItem("@VaBeauty1.0:name");
    localStorage.removeItem("@VaBeauty1.0:id");
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
