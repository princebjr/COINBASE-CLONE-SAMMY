import { createContext, useContext, useState } from 'react';
<<<<<<< HEAD
import API_URL from '../api';
=======
>>>>>>> 59a2e2c724373c336ffa9769f894d9df3981af65

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const stored = localStorage.getItem('cb_user');
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  });

<<<<<<< HEAD
  const login = async (email, password) => {
    const res = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (!data.success) throw new Error(data.message);
    setUser(data.user);
    localStorage.setItem('cb_user', JSON.stringify(data.user));
    return data.user;
  };

  const register = async (name, email, password) => {
    const res = await fetch(`${API_URL}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ name, email, password }),
    });
    const data = await res.json();
    if (!data.success) throw new Error(data.message);
    setUser(data.user);
    localStorage.setItem('cb_user', JSON.stringify(data.user));
    return data.user;
  };

  const logout = async () => {
    try {
      await fetch(`${API_URL}/auth/logout`, {
        method: 'POST',
        credentials: 'include',
      });
    } catch (_) {}
=======
  const login = (email) => {
    const u = { email };
    setUser(u);
    localStorage.setItem('cb_user', JSON.stringify(u));
  };

  const logout = () => {
>>>>>>> 59a2e2c724373c336ffa9769f894d9df3981af65
    setUser(null);
    localStorage.removeItem('cb_user');
  };

  return (
<<<<<<< HEAD
    <AuthContext.Provider value={{ user, login, register, logout }}>
=======
    <AuthContext.Provider value={{ user, login, logout }}>
>>>>>>> 59a2e2c724373c336ffa9769f894d9df3981af65
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
