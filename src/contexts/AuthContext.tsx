
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface User {
  id: string;
  email: string;
  name: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in from localStorage
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Error parsing stored user:", error);
        localStorage.removeItem("user");
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    // Simulate API call delay
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    // In a real app, you'd validate credentials with a backend
    // For this demo, we'll accept any email with a password longer than 5 chars
    if (password.length > 5) {
      const newUser = {
        id: `user-${Date.now()}`,
        email,
        name: email.split('@')[0],
      };
      
      setUser(newUser);
      localStorage.setItem("user", JSON.stringify(newUser));
    } else {
      throw new Error("Invalid credentials");
    }
    setIsLoading(false);
  };

  const signup = async (name: string, email: string, password: string) => {
    // Simulate API call delay
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    // In a real app, you'd create a user in your backend
    // For this demo, we'll just create a user object locally
    if (password.length > 5) {
      const newUser = {
        id: `user-${Date.now()}`,
        email,
        name,
      };
      
      setUser(newUser);
      localStorage.setItem("user", JSON.stringify(newUser));
    } else {
      throw new Error("Password must be at least 6 characters");
    }
    setIsLoading(false);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        signup,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
