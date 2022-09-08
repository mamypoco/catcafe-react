import React from "react";
import OperationImg from "../assets/launge.jpg";
import MissionImg from "../assets/girl_holding.jpg";

function About() {
   return (
      <div className="container">
         <div className="row row-content">
            <div className="col">
               <h1 className="header">About Cat Cocoa</h1>
               <div className="media row-row-conent">
                  <div className="media-body col-md-6 col-sm-12">
                     <h2>Our operation</h2>
                     <p>
                        Operating since January 2022, the Cat Cocoa is the first
                        operating cat café in the Seattle eastside. Our menu
                        features award-winning espresso and coffee from Café
                        Vita, pastries and sandwitches from Rila Bakery & Cafe
                        in Lynnwood. The cats are domestic to the cafe, but we
                        have a few cats available for adoption. These furry
                        friends are from Seattle Humain Society, a non-profit
                        organization dedicated to helping homeless cats find
                        loving homes.{" "}
                     </p>
                  </div>
                  <div className="col-md-6 col-sm-12">
                     <img
                        className="img-fluid img-thumbnail w-100 mx-auto"
                        src={OperationImg}
                        alt="Cat launge"
                     />
                  </div>
               </div>

               <div class="media row row-content">
                  <div className="col-md-6 col-sm-12">
                     <img
                        className="img-fluid img-thumbnail w-80"
                        src={MissionImg}
                        alt="A girl holding a cute calico kitty"
                     />
                  </div>
                  <div className="media-body col-md-6 col-sm-12">
                     <h3>Our mission</h3>
                     <p>
                        We bring a neigborhood cafe and cat experience in the
                        local neigbourhood. We also place cats in need into
                        nurturing homes by working with cat rescues and
                        shelters, and providing resources to organizations
                        dedicated to improving the lives of cats. We hope to
                        open more cat cafes around the country to provide more
                        comfortable places where cats can meet humans in a
                        casual environment. For every sale, we donate a portion
                        to a shelter, rescue, or other charitable organization
                        focused on helping cats and other animals. We want to
                        build our brand on giving and want our customers to feel
                        good about purchases. In the cat lounge, we strive to
                        educate visitors about cats' needs for loving homes. We
                        have created an entry point for people to create
                        precious interactions and memories with feline friends
                        with the hope to inspire them to adopt or donate to
                        benefit cats in need. At the end of the day, we want to
                        see visitors to the cat lounge with smiles on their
                        faces and love for cats in their hearts.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default About;
