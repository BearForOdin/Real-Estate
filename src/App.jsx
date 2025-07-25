import Header from "./components/Header/header";
import Hero from "./components/Hero/hero";
import './App.css'
import Companies from "./Companies/Companies";
import Residencies from "./components/Residencies/Residencies";

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"/>
        <Header/>
      <Hero/>
      </div>
      <Companies/>
      <Residencies/>
    </div>
  );
}

export default App;
