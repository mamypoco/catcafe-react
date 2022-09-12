import React, { Component } from "react";
import { Label, Col, Row, Form, Button } from "reactstrap";

class Contact extends Component {
   constructor(props) {
      super(props);

      this.state = {
         firstName: "",
         lastName: "",
         email: "",
         newsLetter: false,
         phone: "",
         feedback: "",
      };
      this.baseState = this.state;
   }
   handleChange = (event) => {
      //you can do handleChange(event) {, but will need to bind this.
      console.log(event.target.value);
      this.setState({ [event.target.name]: event.target.value });
   };

   handleSubmit = (event) => {
      event.preventDefault();
      //stopping a browser reload/refresh
      console.log("onsubmit event being fired");
      this.setState(this.baseState);
      //reset form
   };

   render() {
      const { firstName, lastName, email, phone, newsLetter, feedback } =
         this.state;
      return (
         <div className="container">
            <div className="row row-content">
               <div className="col">
                  <h1 className="header">Contact us</h1>
                  <div className="row-row-conent">
                     <div className="col text-center">
                        <p>
                           1234 NE 123rd St, Kirkland WA 98034 <br />
                           206-465-1234 <br />
                           purr@catcocoa.com
                        </p>
                        <h3>Hours</h3>
                        <p>
                           Monday - Friday: 9am - 6pm (last visit at 5pm) <br />
                           Saturday & Sunday: 10am - 4pm (last visit at 3pm)
                        </p>
                     </div>
                  </div>
               </div>
            </div>
            <div className="row row-content">
               <div className="col-8 mx-auto">
                  <h4>
                     For any questions or feedback, please contact through the
                     form and we’ll reply as soon as we can.
                  </h4>
               </div>

               <div className="col-8 mx-auto">
                  <Form onSubmit={this.handleSubmit}>
                     <Row className="form-group">
                        <Label htmlFor="firstName" md={2}>
                           Name:
                        </Label>
                        <Col md={5}>
                           <input
                              type="text"
                              className="form-control"
                              name="firstName"
                              id="firstName"
                              placeholder="First"
                              value={firstName}
                              onChange={this.handleChange}
                           />
                        </Col>
                        <Col md={5}>
                           <input
                              type="text"
                              className="form-control"
                              name="lastName"
                              id="lastName"
                              placeholder="Last"
                              value={lastName}
                              onChange={this.handleChange}
                           />
                        </Col>
                     </Row>
                     <Row className="form-group">
                        <Label HtmlFor="email" md={2}>
                           Email Address:
                        </Label>
                        <Col md={10}>
                           <input
                              type="email"
                              className="form-control"
                              name="email"
                              id="email"
                              placeholder="Email"
                              value={email}
                              onChange={this.handleChange}
                           />
                        </Col>
                     </Row>
                     <Row className="form-group">
                        <div class="form-check offset-md-3">
                           <input
                              className="form-check-input"
                              name="newsLetter"
                              type="checkbox"
                              value={newsLetter}
                              id="newsletterCheck"
                           />
                           <Label
                              className="form-check-label"
                              for="newsletterCheck"
                           >
                              Check to receive a newsletter.
                           </Label>
                        </div>
                     </Row>

                     <Row className="form-group">
                        <Label for="tel" md={2}>
                           Phone Number:
                        </Label>
                        <div className="col-md-10">
                           <input
                              type="tel"
                              className="form-control"
                              name="phone"
                              id="tel"
                              placeholder="Phone"
                              value={phone}
                              onChange={this.handleChange}
                           />
                        </div>
                     </Row>

                     <Row className="form-group">
                        <Label
                           htmlFor="feedback"
                           className="col-md-2 col-form-label"
                        >
                           Your Feedback
                        </Label>
                        <Col md={10}>
                           <textarea
                              className="form-control"
                              id="feedback"
                              name="feedback"
                              rows="5"
                              value={feedback}
                              onChange={this.handleChange}
                           ></textarea>
                        </Col>
                     </Row>
                     <Row className="form-group">
                        <Col md={{ size: 10, offset: 2 }}>
                           <Button type="submit" className="primary">
                              Send Feedback
                           </Button>
                        </Col>
                     </Row>
                  </Form>
               </div>
            </div>
         </div>
      );
   }
}

export default Contact;
