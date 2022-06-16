import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./comp/Home";
import Blogs from "./comp/Blogs";
import Contact from "./comp/Contact";
import Navigation from './comp/Navigation';

function App() {
  return (
    <div className="App">
      {" "}
    <Navigation/>
      <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<Blogs/>}/>
          <Route path="/contact" element={<Contact/>}/>
      </Routes>
    
    </div>
  );
}

export default App;
