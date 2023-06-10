import logo from './logo.svg';
import './App.css';
import Digitaltime from "./Digitaltime";
import Stopwatch from "./Stopwatch";
import Counter from "./Counter";
import NavBar from "./NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path ="/" element = {<Digitaltime/>}/>
          <Route path ="/stopwatch" element = {<Stopwatch/>}/>
          <Route path ="/counter" element = {<Counter/>}/>
          <Route path ="*" element = {<Digitaltime/>}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
