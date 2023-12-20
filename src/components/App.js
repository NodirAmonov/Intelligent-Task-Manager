import { useState, useEffect } from "react";
import "./App.scss";
import Todolist from "./TermForm";
import TermInfo from "./TermInfo";

function App() {
  const [terminfo, setTermInfo] = useState([]);
  const [counter, setCounter] = useState(0);
  const handleClick = () => {
    if (addTerms) {
      setCounter(counter + 1);
    }
  };
  const addTerms = (terms) => {
    setTermInfo([...terminfo, terms]);
    handleClick();
  };

  useEffect(() => {
    console.log("check");
  }, []);

  return (
    <div className="App">
      <div className="Container">
        <div className="term-manager">
          <h1 className="nav-title">Vazifalar Menedjeri</h1>
          <Todolist AddTerms={addTerms} />
          <TermInfo terminfo={terminfo} />
          <div className="counter">{counter}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
