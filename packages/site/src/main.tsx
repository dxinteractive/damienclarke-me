import React from "react";
import ReactDOM from "react-dom/client";
import "./css/base.css";
import classes from "./main.module.css";

import { HashRouter, Routes, Route } from "react-router-dom";

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
      <div className={classes.textWrapper}>
        <div>Hello I'm</div>
        <h1 className={classes.title}>Damien Clarke</h1>
        {/* <div>Software Engineer living in Hobart, Tasmania, Australia.</div> */}
        <p className={classes.subtitle}>
          and I like coding newfangled user interfaces, and building software to
          make art with.
        </p>
        <div>
          <br />
          xenpaper
          <br />
          mosfez-synth
          <br />
          mosfez
          <br />
          effects pedals
          <br />
          ResponsiveAnalogRead
          <br />
          loopdeloop
          <br />
          12gon
          <br /> flash games: bloxorz, electricman 2, silversphere
          <br />
        </div>
        {/* <div>
          <p>
            I'm a full stack software engineer with 17 years commercial
            programming experience with a focus on front-ends made of TypeScript
            and React.
          </p>
          <p>I'm currently living in Hobart, Tasmania, Australia.</p>
        </div> */}
      </div>
    </div>
  );
}
