import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface User {
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => boolean;
  signup: (name: string, email: string, password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("ai-career-user");
    if (stored) setUser(JSON.parse(stored));
  }, []);

  const signup = (name: string, email: string, password: string): boolean => {
    const users = JSON.parse(localStorage.getItem("ai-career-users") || "{}");
    if (users[email]) return false;
    users[email] = { name, email, password };
    localStorage.setItem("ai-career-users", JSON.stringify(users));
    const u = { name, email };
    setUser(u);
    localStorage.setItem("ai-career-user", JSON.stringify(u));
    return true;
  };

  const login = (email: string, password: string): boolean => {
    const users = JSON.parse(localStorage.getItem("ai-career-users") || "{}");
    const found = users[email];
    if (!found || found.password !== password) return false;
    const u = { name: found.name, email };
    setUser(u);
    localStorage.setItem("ai-career-user", JSON.stringify(u));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("ai-career-user");
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
