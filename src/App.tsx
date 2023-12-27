import React from "react";
import { ToastContainer } from "react-toastify";
import RootRouter from "./RootRouter";


function App() {
  return (
    <div className="nk-app-root">
      <div className="nk-main">
        <RootRouter />
        <ToastContainer position="top-right" />
      </div>
    </div>
  );
}

export default App;
