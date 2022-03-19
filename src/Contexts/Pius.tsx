import { createContext } from "react";
import { Piu } from "../interfaces/piu";

interface SearchInterface {
  searchState: boolean;
  setSearchState: React.Dispatch<React.SetStateAction<boolean>>;
}

interface PiuInterface {
  pius: Piu[];
  getPius: React.Dispatch<React.SetStateAction<Piu[]>>;
}

export const PiuContext = createContext({} as PiuInterface);

export const SearchModalContext = createContext({} as SearchInterface);
