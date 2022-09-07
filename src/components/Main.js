import React, { Component } from "react";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import Contact from "./Contact";
import Cafemenu from "./Cafemenu";
import Adoptcat from "./Adoptcat";
import About from "./About";
import { Routes, Route } from "react-router-dom";

class Main extends Component {
   render() {
      return (
         <div>
            <Header />
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/home" element={<Home />} />
               <Route path="/aboutus" element={<About />} />
               <Route path="/cafemenu" element={<Cafemenu />} />
               <Route path="/contactus" element={<Contact />} />
               <Route path="/adoptcat" element={<Adoptcat />} />
            </Routes>
            <Footer />
         </div>
      );
   }
}

export default Main;
