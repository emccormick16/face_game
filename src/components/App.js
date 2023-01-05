import React from "react";
import FaceGame from "./FaceGame";
import FaceMesh from "./FaceMesh";
import { RecoilRoot } from "recoil";
import "./App.css";

function App() {
  return (
    <div>
      <RecoilRoot>
        <FaceMesh />
        <FaceGame />
      </RecoilRoot>
    </div>
  );
}

export default App;
