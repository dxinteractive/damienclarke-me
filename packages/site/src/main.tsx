import React from "react";
import ReactDOM from "react-dom/client";
import "./css/base.css";
import classes from "./main.module.css";

import { HashRouter, Routes, Route } from "react-router-dom";

import { play } from "xenpaper-synth";

function playTestSound(e: React.MouseEvent<HTMLAnchorElement>) {
  e.preventDefault();
  play();
}

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

function Main() {
  return (
    <div className={classes.main}>
      xenpaper-v2 development site -{" "}
      <a href="#" onClick={playTestSound}>
        click to play a test sound but not on firefox
      </a>
    </div>
  );
}
