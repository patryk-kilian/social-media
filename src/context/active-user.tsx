import { ReactNode, createContext, useContext } from 'react';
import useUser from '../hooks/useUser';
import { useAuth } from '../context/auth-context';

const ActiveUserContext = createContext<any>(null);

export function useActiveUser() {
  return useContext(ActiveUserContext);
}

export function ActiveUserProvider({ children }: { children: ReactNode }) {
  const { authUser } = useAuth();

  const { data: activeUser, isLoading } = useUser(authUser?.uid);

  const value = {
    activeUser,
    isLoading,
  };

  return (
    <ActiveUserContext.Provider value={value}>
      {children}
    </ActiveUserContext.Provider>
  );
}
