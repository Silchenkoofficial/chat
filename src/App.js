import React from 'react';
import socket from "./socket";

import JoinBlock from "./components/JoinBlock";
import "./App.css";

function App() {
  return (
    <div className="wrapper">
      <JoinBlock />
    </div>
  );
}

export default App;
