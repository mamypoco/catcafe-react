import React, { Component } from "react";
import cafeLogo from "../assets/cocoa_logo8.jpg";
import {
   Nav,
   NavItem,
   NavLink,
   Navbar,
   Collapse,
   NavbarToggler,
} from "reactstrap";
// import { Link } from "react-router-dom";

class Header extends Component {
   constructor(props) {
      super(props);
      this.state = {
         isNavOpen: false,
      };

      this.toggleNav = this.toggleNav.bind(this);
   }
   toggleNav() {
      this.setState({
         isNavOpen: !this.state.isNavOpen,
      });
   }

   render() {
      return (
         <React.Fragment>
            <div className="site-header">
               <div className="container-fluid py-3">
                  <div className="row">
                     <div className="col">
                        <img
                           src={cafeLogo}
                           height="140"
                           width="300"
                           alt="A house with door, paw print and a coffee cup"
                        />
                     </div>
                  </div>
               </div>

               <Navbar dark sticky="top" expand={"md"}>
                  <NavbarToggler onClick={this.toggleNav} />
                  <Collapse isOpen={this.state.isNavOpen} navbar>
                     <div className="m-auto">
                        <Nav navbar>
                           <NavItem>
                              <NavLink className="nav-link" href="/home">
                                 Home
                              </NavLink>
                           </NavItem>
                           <NavItem>
                              <NavLink className="nav-link" href="/aboutus">
                                 About Us
                              </NavLink>
                           </NavItem>
                           <NavItem>
                              <NavLink className="nav-link" href="/cafemenu">
                                 Cafe Menu
                              </NavLink>
                           </NavItem>
                           <NavItem>
                              <NavLink className="nav-link" href="/adoptcat">
                                 Adopt A Cat
                              </NavLink>
                           </NavItem>
                           <NavItem>
                              <NavLink className="nav-link" href="/contactus">
                                 Contact
                              </NavLink>
                           </NavItem>
                        </Nav>
                        {/* <ul className="list-unstyled">
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
                        </ul> */}
                     </div>
                  </Collapse>
               </Navbar>
            </div>
         </React.Fragment>
      );
   }
}

export default Header;
