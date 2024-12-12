import { useState } from "react";
import "./App.css";
import Background from "./Components/Background";
import Foreground from './Components/Foreground';
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="relative w-full h-screen bg-gray-800">
      <Background />

      <Foreground />
    </div>
  );
}

export default App;
