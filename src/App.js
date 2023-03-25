import { Route, Routes } from "react-router-dom";
import HomePage from "./components/homePage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="container">
      <Routes>
        <Route path="/" element ={<HomePage />}/>
        <Route path="/about" element ={<h1>About Page</h1>}/>
        <Route path="/contact" element ={<h1>Contact Page</h1>}/>
      </Routes>
      </div>
    </div> 
  );
}

export default App;
