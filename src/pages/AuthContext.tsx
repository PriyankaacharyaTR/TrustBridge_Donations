import { createContext, useContext, useState, ReactNode } from "react";

/* ---------- Types ---------- */
export type UserRole = 'admin' | 'ngo' | 'donor' | 'user' | null;

interface AuthContextType {
  isAuthenticated: boolean;
  userRole: UserRole;
  token: string | null;
  userId: number | null;
  login: (role: UserRole, token?: string | null, userId?: number | null) => void;
  logout: () => void;
}

/* ---------- Create Context ---------- */
const AuthContext = createContext<AuthContextType | undefined>(undefined);

/* ---------- Provider ---------- */
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState<UserRole>(null);
  const [token, setToken] = useState<string | null>(null);
  const [userId, setUserId] = useState<number | null>(null);

  const login = (role: UserRole, tokenVal: string | null = null, userIdVal: number | null = null) => {
    setIsAuthenticated(true);
    setUserRole(role);
    setToken(tokenVal);
    setUserId(userIdVal);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUserRole(null);
    setToken(null);
    setUserId(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, userRole, token, userId, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

/* ---------- Custom Hook ---------- */
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }
  return context;
};
