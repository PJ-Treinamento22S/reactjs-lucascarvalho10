import React, { createContext, useState } from "react";
import WebFont from "webfontloader";
import "./App.css";
import { Header } from "./components/Header";
import { Main } from "./components/Main";

interface SearchInterface {
  searchState: boolean;
  setSearchState: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SearchModalContext = createContext({} as SearchInterface);

function App() {
  WebFont.load({
    google: {
      families: ["Poppins", "Montserrat"],
    },
  });

  const [searchState, setSearchState] = useState(false);

  return (
    <SearchModalContext.Provider value={{ searchState, setSearchState }}>
      <Header></Header>
      <Main></Main>
    </SearchModalContext.Provider>
  );
}

export default App;
