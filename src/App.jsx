import { useState } from "react";
import Provider from "react-redux";
import "./App.css";
import Todo from "./components/Todo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Provider>
      <Todo />
    </Provider>
  );
}

export default App;
