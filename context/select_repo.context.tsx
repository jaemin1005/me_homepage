import { createContext, useContext, useState } from "react";

interface SelectRepoContextProps {
  name: string | undefined;
  setName: (name: string | undefined) => void;
}

const selectRepoContext = createContext<SelectRepoContextProps>({
  name: undefined,
  setName: () => {},
});

export const SelectRepoProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [name, setName] = useState<string>();

  return (
    <selectRepoContext.Provider value={{ name, setName }}>
      {children}
    </selectRepoContext.Provider>
  );
};

export const useRepoState = () => useContext(selectRepoContext);
