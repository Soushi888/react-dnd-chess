import './App.css';
import {Knight} from "./components/Knight";
import {Square} from "./components/Square";
import {Board} from "./components/Board";

function App() {
  return (
    <>
      <Board knightPosition={[7, 5]}/>
    </>
  );
}

export default App;
