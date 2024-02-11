import { createContext, ReactNode, useContext, useState } from 'react';

export interface AppContextType {
  title: string;
  setTitle: (title: string) => void;
}

const AppContext = createContext<AppContextType>({} as AppContextType);

type AppContextProviderProps = {
  children: ReactNode;
};

export function AppContextProvider({ children }: AppContextProviderProps) {
  const [title, setTitle] = useState('Home');

  return (
    <AppContext.Provider value={{ title, setTitle }}>
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => {
  return useContext<AppContextType>(AppContext);
};
