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
         time: "",
      };
      this.baseState = this.state;
      this.toggleModal = this.toggleModal.bind(this);
      this.handleChange = this.handleChange.bind(this);
   }
   toggleModal() {
      this.setState({
         isModalOpen: !this.state.isModalOpen,
      });
   }

   handleChange(event) {
      console.log(event.target.value);
      this.setState({ value: event.target.value });
   }

   handleSubmit(event) {
      console.log("Reservation is submitted");
      this.setState(this.baseState);
   }

   render() {
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
                                 onChange={this.handleChange}
                                 placeholder="First name"
                              />
                           </Col>
                           <Col md={5}>
                              <Input
                                 type="text"
                                 name="lastName"
                                 id="lastName"
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
                                 onChange={this.handleChange}
                              />
                           </Col>
                        </Row>
                     </FormGroup>
                     <FormGroup>
                        <Row>
                           <Label htmlFor="time" md={6}>
                              Time
                           </Label>
                           <Col md={6}>
                              <Input
                                 controls={["time"]}
                                 type="time"
                                 name="time"
                                 id="time"
                                 min="9:00"
                                 max="18:00"
                              />
                           </Col>
                        </Row>
                     </FormGroup>
                     <Col>
                        <Button type="submit" value="submit" color="secondary">
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
