import React, { useState } from "react";
import Xmodal from "./xmodal";
import "./App.css";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="app">
      <h1>User Details Modal</h1>
      <button onClick={() => setIsModalOpen(true)}>Open Form</button>
      {isModalOpen && <Xmodal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default App;