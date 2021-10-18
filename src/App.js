import "./styles.css";
import { useState } from "react";
import MyuseState from "./components/01_useState";
import MyuseEffect from "./components/02_useEffect";

export default function App() {
  const [flag, setFlag] = useState(true);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button
        onClick={() => {
          setFlag(!flag);
        }}
      >
        change
      </button>
      {flag ? <MyuseEffect /> : <MyuseState />}
    </div>
  );
}
