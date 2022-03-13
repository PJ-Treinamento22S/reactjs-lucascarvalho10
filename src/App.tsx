import React from "react";
import WebFont from "webfontloader";
import "./App.css";
import { Header } from "./components/Header";
import { Main } from "./components/Main";

function App() {
  WebFont.load({
    google: {
      families: ["Poppins", "Montserrat"],
    },
  });

  return (
    <>
      <Header></Header>
      <Main></Main>
    </>
  );
}

export default App;
