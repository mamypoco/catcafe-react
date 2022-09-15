import React, { Component } from "react";
import {
   Button,
   Modal,
   ModalHeader,
   ModalBody,
   Form,
   FormGroup,
   Input,
   Label,
   Row,
   Col,
} from "reactstrap";

class BookModal extends Component {
   constructor(props) {
      super(props);

      this.state = {
         isModalOpen: false,
         firstName: "",
         lastName: "",
         email: "",
         numPeople: "",
         date: "",
         timeFrom: "",
         timeTo: "",
      };
      this.baseState = this.state;
      this.toggleModal = this.toggleModal.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
   }
   toggleModal() {
      this.setState({
         isModalOpen: !this.state.isModalOpen,
      });
   }

   handleChange(event) {
      console.log(event.target.value);
      this.setState({ [event.target.name]: event.target.value });
   }

   handleSubmit(event) {
      event.preventDefault();
      console.log("Reservation is submitted");
      this.setState(this.state);
   }

   render() {
      const { firstName, lastName, email, numPeople, date, timeFrom, timeTo } =
         this.state;
      return (
         <React.Fragment>
            <div className="row row-content text-center">
               <div className="col mx-auto">
                  <Button
                     className="btn-lg btn-dark"
                     onClick={this.toggleModal}
                  >
                     Book a Visit
                  </Button>
               </div>
            </div>

            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
               <ModalHeader toggle={this.toggleModal}>
                  Let's Book Your Visit
               </ModalHeader>
               <ModalBody>
                  <Form onSubmit={this.handleChange}>
                     <FormGroup>
                        <Row>
                           <Label htmlFor="firstName" md={2}>
                              Name
                           </Label>
                           <Col md={5}>
                              <Input
                                 type="text"
                                 name="firstName"
                                 id="firstName"
                                 value={firstName}
                                 onChange={this.handleChange}
                                 placeholder="First name"
                              />
                           </Col>
                           <Col md={5}>
                              <Input
                                 type="text"
                                 name="lastName"
                                 id="lastName"
                                 value={lastName}
                                 onChange={this.handleChange}
                                 placeholder="Last Name"
                              />
                           </Col>
                        </Row>
                     </FormGroup>
                     <FormGroup>
                        <Row>
                           <Label htmlFor="email" md={6}>
                              Email Address
                           </Label>
                           <Col md={6}>
                              <Input
                                 type="email"
                                 name="email"
                                 id="email"
                                 value={email}
                                 onChange={this.handleChange}
                              />
                           </Col>
                        </Row>
                     </FormGroup>
                     <FormGroup>
                        <Row>
                           <Label htmlFor="numPeople" md={8}>
                              Number of people
                           </Label>
                           <select
                              type="number"
                              name="numPeople"
                              id="numPeople"
                              value={numPeople}
                              onChange={this.handleChange}
                              md={4}
                           >
                              <option value="Select from">
                                 Select from ...
                              </option>
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                              <option value="5">5</option>
                              <option value="6">6</option>
                              <option value="7">7</option>
                           </select>
                        </Row>
                     </FormGroup>
                     <FormGroup>
                        <Row>
                           <Label htmlFor="date" md={6}>
                              Date
                           </Label>
                           <Col md={6}>
                              <Input
                                 type="date"
                                 name="date"
                                 id="date"
                                 value={date}
                                 onChange={this.handleChange}
                              />
                           </Col>
                        </Row>
                     </FormGroup>
                     <FormGroup>
                        <Row>
                           <Label htmlFor="timeFrom" md={2}>
                              From
                           </Label>
                           <Col md={4}>
                              <Input
                                 type="time"
                                 interval="15 min"
                                 name="timeFrom"
                                 id="timeFrom"
                                 value={timeFrom}
                                 min="9:00"
                                 max="18:00"
                                 onChange={this.handleChange}
                              />
                           </Col>
                           <Label htmlFor="timeTo" md={2}>
                              To
                           </Label>
                           <Col md={4}>
                              <Input
                                 type="time"
                                 name="timeTo"
                                 id="timeTo"
                                 value={timeTo}
                                 int="900"
                                 min="9:00"
                                 max="18:00"
                                 onChange={this.handleChange}
                              />
                           </Col>
                        </Row>
                     </FormGroup>
                     <Col>
                        <Button type="submit" value="submit" color="info">
                           Reserve Your Spot
                        </Button>
                     </Col>
                  </Form>
               </ModalBody>
            </Modal>
         </React.Fragment>
      );
   }
}

export default BookModal;
