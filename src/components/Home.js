import React, { Component } from "react";
import HomeImg from "../assets/cat_and_coffee.jpg";
import BookModal from "./BookModal";

class Home extends Component {
   constructor(props) {
      super(props);
      this.state = {
         isModalOpen: false,
      };
      this.toggleModal = this.toggleModal.bind(this);
      this.handleChange = this.handleChange.bind(this);
   }
   toggleModal() {
      this.setState({
         isModalOpen: !this.state.isModalOpen,
      });
   }

   handleChange(event) {
      this.setState({ value: event.target.value });
   }

   render() {
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
                     We are located at Finn Hill neignborhood where you can
                     easily visit on foot if you are aready resident here. Our
                     space is fully customized for catas to play, fetch and
                     enternain humans. Our fresh coffee and pastries are locally
                     made. If you feel like some furry love, or need a break
                     from work-from-home, please come stop by!{" "}
                  </p>

                  <p>
                     The cat lounge fee is $7.00 up to hour and the capacity is
                     7. Walk-in is always welcome without reservation. For
                     ordering drink and foo menu only, you do not need to book a
                     visit. When under 7 people in the laonge, feel free to come
                     in to the laounge. If you want to reserve the spot in
                     advance, please book a visit via the button to make sure
                     you are in.{" "}
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

            {/* <div className="row row-content text-center">
               <div className="col mx-auto">
                  <Button
                     className="btn-lg btn-dark"
                     onClick={this.toggleModal}
                  >
                     Book a Visit
                  </Button>
               </div>
            </div> */}
            <BookModal />
            {/* <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
               <ModalHeader toggle={this.toggleModal}>
                  Let's book your visit
               </ModalHeader>
               <ModalBody>
                  <Form onSubmit={this.handleChange}>
                     <FormGroup>
                        <Label htmlFor="yourName">Your Name</Label>
                        <Input
                           type="text"
                           name="firstName"
                           onChange={this.handleChange}
                           placeholder="First name"
                        />
                        <Input
                           type="text"
                           name="lastName"
                           onChange={this.handleChange}
                           placeholder="Last Name"
                        />
                     </FormGroup>
                     <FormGroup>
                        <Label htmlFor="numPeople">Number of people</Label>
                        <select
                           type="number"
                           name="numPeople"
                           onChange={this.handleChange}
                        >
                           <option value="Select from">Select from ...</option>
                           <option value="1">1</option>
                           <option value="2">2</option>
                           <option value="3">3</option>
                           <option value="4">4</option>
                           <option value="5">5</option>
                           <option value="6">6</option>
                           <option value="7">7</option>
                        </select>
                     </FormGroup>
                     <FormGroup>
                        <Label htmlFor="date">Date</Label>
                        <Input
                           type="date"
                           name="date"
                           innerRef={(input) => (this.date = input)}
                        />
                     </FormGroup>
                     <FormGroup>
                        <Label htmlFor="time">Time</Label>
                        <Input
                           type="time"
                           name="time"
                           innerRef={(input) => (this.time = input)}
                        />
                     </FormGroup>
                  </Form>
               </ModalBody>
            </Modal> */}
         </div>
      );
   }
}

export default Home;
