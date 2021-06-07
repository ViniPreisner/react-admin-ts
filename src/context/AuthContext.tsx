import React, { createContext, useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import api from '../services/api';
import * as auth from '../services/auth'

type Props = {
  children: React.ReactNode
}

interface AuthContextData {
  signed: boolean;
  token: string | null;
  user: object | null;
  loading: boolean;
  signIn(): Promise<void>;
  Logout(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC = ({ children }) => {
  const history = useHistory()
  const [user, setUser] = useState<object | null>(null)
  const [token, setToken] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const storagedUser = sessionStorage.getItem('@App:user');
    const storagedToken = sessionStorage.getItem('@App:token');

    if (storagedToken && storagedUser) {
      setUser(JSON.parse(storagedUser));
      api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
      setLoading(false)
    }
  }, []);

  async function signIn() {
    setLoading(true)
    const response = await auth.signIn()
    console.log('response', response)

    //const { token, user } = response

    setUser(response.user)
    setToken(response.token)
    api.defaults.headers.Authorization = `Bearer ${response.token}`;

    sessionStorage.setItem('@App:user', JSON.stringify(response.user));
    sessionStorage.setItem('@App:token', response.token);
  }

  async function Logout() {
    await setUser(null);
    await sessionStorage.setItem('@App:user', JSON.stringify(null));
    setLoading(false)
    history.push('/')
  }

  return (
    <AuthContext.Provider value={{
      signed: !!user, // o mesmo que fazer Boolean(user)
      token: token,
      user: user,
      loading: loading,
      signIn, // enviando a função
      Logout
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}