import { createContext, ReactNode, useState } from "react";
import CriptoResults from "../types/CriptoResults";

type UserContextProps = {
  children: ReactNode;
};

type UserContextType = {
  criptoCoins: CriptoResults[];
  setCriptoCoins: (newState: CriptoResults[]) => void;
  specificCoin: CriptoResults;
  setSpecificCoin: (newState: CriptoResults) => void;
  openModalCoin: boolean;
  setOpenModalCoin: (newState: boolean) => void;
  chosenDate: string;
  setChosenDate: (newState: string) => void;
  coinAtDay: string;
  setCoinAtDay: (newState: string) => void;
};

export const UserContext = createContext({} as UserContextType);

export const UserContextProvider = ({ children }: UserContextProps) => {
  const [criptoCoins, setCriptoCoins] = useState<CriptoResults[]>([]);
  const [specificCoin, setSpecificCoin] = useState<CriptoResults>({} as CriptoResults);
  const [openModalCoin, setOpenModalCoin] = useState<boolean>(false);
  const [chosenDate, setChosenDate] = useState<string>("");
  const [coinAtDay, setCoinAtDay] = useState<string>("");

  return (
    <UserContext.Provider
      value={{
        criptoCoins,
        setCriptoCoins,
        specificCoin,
        setSpecificCoin,
        openModalCoin,
        setOpenModalCoin,
        chosenDate,
        setChosenDate,
        coinAtDay,
        setCoinAtDay,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
