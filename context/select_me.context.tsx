import { createContext, useContext, useState } from "react";

interface SelectMeContextProps {
  meInfo: MeInfo | undefined;
  setMeInfo: (meInfo: MeInfo | undefined) => void;
}

const selectMeContext = createContext<SelectMeContextProps>({
  meInfo: undefined,
  setMeInfo: () => {},
});

export const SelectMeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [meInfo, setMeInfo] = useState<MeInfo>();

  return (
    <selectMeContext.Provider value={{ meInfo, setMeInfo }}>
      {children}
    </selectMeContext.Provider>
  );
};

export const useMeState = () => useContext(selectMeContext);
