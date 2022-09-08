import React from "react";
import HomeImg from "../assets/cat_and_coffee.jpg";

function Home() {
   return (
      <div className="container">
         <div className="row row-content">
            <div className="col text-center">
               <h1 className="header">Seattle Eastsides' first cat cafe</h1>
               <img
                  src={HomeImg}
                  alt="A cat with coffee laying on the yellow blanket"
               />
            </div>
         </div>
         <div className="row row-content">
            <div className="col">
               <h2>
                  We provide you with a chance to relax and joy of purr
                  theratpy.
               </h2>

               <p>
                  We are located at Finn Hill neignborhood where you can easily
                  visit on foot if you are aready resident here. Our space is
                  fully customized for catas to play, fetch and enternain
                  humans. Our fresh coffee and pastries are locally made. If you
                  feel like some furry love, or need a break from
                  work-from-home, please come stop by!{" "}
               </p>

               <p>
                  The cat lounge fee is $7.00 up to hour and the capacity is 7.
                  Walk-in is always welcome without reservation. For ordering
                  drink and foo menu only, you do not need to book a visit. When
                  under 7 people in the laonge, feel free to come in to the
                  laounge. If you want to reserve the spot in advance, please
                  book a visit via the button to make sure you are in.{" "}
               </p>
            </div>
         </div>

         <div className="row text-center">
            <div className="col">
               <h3> Cafe Hours:</h3>
               <p>
                  Monday-Friday: 9am -6pm (The last entry at 5pm) <br />
                  Saturday and Sunday: 10am - 4pm (The last entry at 3pm)
               </p>
            </div>
         </div>
         <div className="row row-content text-center">
            <div className="col mx-auto">
               <button>Book a Visit</button>
            </div>
         </div>
      </div>
   );
}

export default Home;
