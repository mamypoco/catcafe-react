import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Main from "./components/Main";
// import Home from "./components/Home";
// import Header from "./components/Header";
// import Footer from "./components/Footer";

const App = () => {
   return (
      <BrowserRouter>
         <div className="App">
            {/* <Header />
            <Home />
            <Footer /> */}
            <Main />
         </div>
      </BrowserRouter>
   );
};

export default App;
