import React, { Component } from "react";
import cafeLogo from "../assets/cocoa_logo8.jpg";
import {
   Nav,
   Navbar,
   NavItem,
   NavLink,
   Collapse,
   NavbarToggler,
} from "reactstrap";

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
               <div className="container-fluid py-5">
                  <div className="row">
                     <div className="col">
                        <img
                           src={cafeLogo}
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
                     </div>
                  </Collapse>
               </Navbar>
            </div>
         </React.Fragment>
      );
   }
}

export default Header;
