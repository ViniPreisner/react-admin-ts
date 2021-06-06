import React, { createContext, useEffect, useState } from 'react'
import * as auth from '../services/auth'

type Props = {
  children: React.ReactNode
}

interface AuthContextData {
  signed: boolean;
  //token: string;
  user: object | null;
  signIn(): Promise<void>
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<object | null>(null)

  useEffect(() => {
    const storagedUser = sessionStorage.getItem('@App:user');
    //const storagedToken = sessionStorage.getItem('@App:token');

    //if (storagedToken && storagedUser) {
    if (storagedUser) {
      //setUser(JSON.parse(storagedUser));
      setUser(JSON.parse(storagedUser));
      //api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
    }
  }, []);

  async function signIn() {
    const response = await auth.signIn()
    console.log('response', response)

    //const { token, user } = response

    setUser(response.user)
    //api.defaults.headers.Authorization = `Bearer ${response.data.token}`;

    sessionStorage.setItem('@App:user', JSON.stringify(response.user));
    //sessionStorage.setItem('@App:token', response.data.token);
  }

  return (
    <AuthContext.Provider value={{
      signed: !!user, // o mesmo que fazer Boolean(user)
      user: user,
      signIn // enviando a função
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext
