import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";

function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Portfolio/>
      <Contact/>
      <Resume/>
      <Footer/>
    </div>
  );
}

export default App;
