import React from "react";
import ReactDOM from "react-dom/client";
import "./css/base.css";
import classes from "./main.module.css";

import { HashRouter, Routes, Route } from "react-router-dom";
import { Project } from "./project";
import { Link } from "./link";

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
    <>
      <div className={classes.main}>
        <div className={classes.textWrapper}>
          <div>Hello I'm</div>
          <h1 className={classes.title}>Damien Clarke</h1>
          {/* <div>Software Engineer living in Hobart, Tasmania, Australia.</div> */}
          <p className={classes.subtitle}>
            and I like coding newfangled user interfaces, and building software
            to make art with.
            {/* <div>⣿⣿⣿⣿⣿⣦⡀⡀⡀</div> */}
          </p>
          <p>
            I'm currently living in Hobart, Tasmania, Australia.
            <div>
              <Link>more info</Link>
            </div>
          </p>
          <div className={classes.projects}>
            <Project index={0} name="xenpaper" href="https://xenpaper.com/">
              microtonal sequencer web app
            </Project>
            <Project
              index={1}
              name="mosfez"
              href="https://www.instagram.com/mosfez"
            >
              music project, soon
            </Project>
            <Project
              index={2}
              name="mosfez-synth"
              href="https://github.com/dxinteractive/mosfez-synth"
            >
              polyphonic synth for web, wip
            </Project>
            <Project
              index={3}
              name="mosfez-faust"
              href="https://github.com/dxinteractive/mosfez-faust"
            >
              typescript API for using faust with web audio
            </Project>

            <Project index={4} name="12gon" href="https://12gon.tumblr.com/">
              code-generated animated geometry
            </Project>
            <Project
              index={5}
              name="bloxorz"
              href="https://www.coolmathgames.com/0-bloxorz"
            >
              very old puzzle game
            </Project>
            <Project
              index={6}
              name="electricman 2"
              href="https://www.addictinggames.com/action/electric-man-2"
            >
              very old flash game
            </Project>
            <Project name="more" />
          </div>
          {/* <div>
          <p>
            I'm a full stack software engineer with 17 years commercial
            programming experience with a focus on front-ends made of TypeScript
            and React.
          </p>
          
        </div> */}
        </div>
      </div>
    </>
  );
}
