import {
  ReactNode,
  createContext,
  useState,
  useEffect,
  useContext,
} from 'react';
import { firebaseAuth } from '../lib/firebase';

const AuthContext = createContext<any>(null);

export function useAuth() {
  return useContext(AuthContext);
}

type User = {
  name: string;
  email: string;
  password: string;
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [authUser, setAuthUser] = useState(
    JSON.parse(localStorage.getItem('authUser')!)
  );

  const signup = async (user: User) => {
    return firebaseAuth.createUserWithEmailAndPassword(
      user.email,
      user.password
    );
  };

  const login = (user: User) => {
    return firebaseAuth.signInWithEmailAndPassword(user.email, user.password);
  };

  const logout = () => {
    return firebaseAuth.signOut();
  };

  useEffect(() => {
    const listener = firebaseAuth.onAuthStateChanged((authUser) => {
      if (authUser) {
        localStorage.setItem('authUser', JSON.stringify(authUser));
        setAuthUser(authUser);
      } else {
        localStorage.removeItem('authUser');
        setAuthUser(null);
      }
    });

    return () => listener();
  }, []);

  const value = {
    signup,
    login,
    logout,
    authUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
