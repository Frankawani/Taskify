import React, { useState } from "react";
import "./App.css";
import InputFeild from "./components/InputFeild";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string | number>("frank");
  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputFeild />
    </div>
  );
};

export default App;
