// CheckboxContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface CheckboxContextProps {
  isChecked: boolean;
  toggleCheckbox: () => void;
}

const CheckboxContext = createContext<CheckboxContextProps | undefined>(undefined);

interface CheckboxProviderProps {
  children?: ReactNode;
}

export const CheckboxProvider: React.FC<CheckboxProviderProps> = ({ children }) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <CheckboxContext.Provider value={{ isChecked, toggleCheckbox }}>
      {children}
    </CheckboxContext.Provider>
  );
};

export const useCheckbox = (): CheckboxContextProps => {
  const context = useContext(CheckboxContext);

  if (!context) {
    throw new Error('useCheckbox must be used within a CheckboxProvider');
  }

  return context;
};