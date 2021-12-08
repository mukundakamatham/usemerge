import React from "react";
import "./styles.css";
//import Button from "./Component/Button";
//import CustomHooks from "./Component/Hooks";
//import GithubSearchHooks from "./Component/GithubSearchHooks";
import { Merge } from "./Component/Usemerge";
export default function App() {
  return (
    <div className="App">
      <h1>useContext Hooks</h1>
      <br />
      <Merge />
      {/*<Button label="button" />*/}
      {/*<CustomHooks />*/}
    </div>
  );
}
