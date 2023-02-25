import { createContext, ReactNode } from 'react';

export const QuioscoContext = createContext({});

interface Props {
  children: ReactNode;
}

export const QuioscoProvider = ({ children }: Props) => {
  return (
    <QuioscoContext.Provider value={{}}>{children}</QuioscoContext.Provider>
  );
};
