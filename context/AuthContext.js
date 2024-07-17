"use client"
import { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching user data from an API
    const fetchUser = async () => {
      // Simulate an API call
      const user = await new Promise((resolve) =>
        setTimeout(() => resolve({ name: 'John Doe' }), 1000)
      );
      setUser(null);
      setLoading(false);
    };

    fetchUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
