import React from "react";
// import CatInMug from "../assets/cat_in_cocoa.jpg";
import { Link } from "react-router-dom";

const Footer = () => {
   return (
      <footer className="site-footer">
         <div className="container">
            <div className="row">
               <div className="col-lg-4 col-md-6 mt-3">
                  <p>Join our mailing list for future adoption event:</p>
                  <div className="row">
                     <div className="col-lg-4 col-md-6 col-sm-12">
                        <ul className="list-unstyled">
                           <li>
                              <Link to="/home">Home</Link>
                           </li>
                           <li>
                              <Link to="/aboutus">About Us</Link>
                           </li>
                           <li>
                              <Link to="/cafemenu">Cafe Menu</Link>
                           </li>
                           <li>
                              <Link to="/adoptcat">Adopt a cat</Link>
                           </li>
                           <li>
                              <Link to="/contactus">Contact Us</Link>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
