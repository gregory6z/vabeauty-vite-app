import { createContext, ReactNode, useContext } from "react";

// export interface CartItem extends ICoffee {
//   quantity: number;
// }

interface AuthContextData {
  name: string;
}
export const AuthContext = createContext({} as AuthContextData);

interface CartContextProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: CartContextProviderProps) {
  return (
    <AuthContext.Provider value={{ name: "gregory" }}>
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
