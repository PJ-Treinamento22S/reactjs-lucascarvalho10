import React, { createContext, useState } from "react";
import WebFont from "webfontloader";
import "./App.css";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Piu } from "./interfaces/piu";

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

function App() {
  WebFont.load({
    google: {
      families: ["Poppins", "Montserrat"],
    },
  });

  const [searchState, setSearchState] = useState(false);
  const [pius, getPius] = useState<Piu[]>([]);

  return (
    <SearchModalContext.Provider value={{ searchState, setSearchState }}>
      <Header></Header>
      <PiuContext.Provider value={{ pius, getPius }}>
        <Main></Main>
      </PiuContext.Provider>
    </SearchModalContext.Provider>
  );
}

export default App;
