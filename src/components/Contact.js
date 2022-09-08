import React from "react";
import { Label, Col, Row, Form, Button } from "reactstrap";

function Contact() {
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
         <div class="row row-content">
            <div class="col-8 mx-auto">
               <h4>
                  For any questions or feedback, please contact through the form
                  and we’ll reply as soon as we can.
               </h4>
            </div>

            <div class="col-8 mx-auto">
               <Form>
                  <Row className="form-group">
                     <Label htmlFor="firstName" md={2}>
                        Name:
                     </Label>
                     <Col md={5}>
                        <input
                           type="text"
                           class="form-control"
                           name="firstName"
                           id="firstName"
                           placeholder="First"
                        />
                     </Col>
                     <Col md={5}>
                        <input
                           type="text"
                           class="form-control"
                           name="lastName"
                           id="lastName"
                           placeholder="Last"
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
                           class="form-control"
                           name="email"
                           id="email"
                           placeholder="Email"
                        />
                     </Col>
                  </Row>
                  <Row className="form-group">
                     <div class="form-check offset-md-3">
                        <input
                           className="form-check-input"
                           type="checkbox"
                           value=""
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
                           class="form-control"
                           name="tel"
                           id="tel"
                           placeholder="Phone"
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
                           class="form-control"
                           id="feedback"
                           name="feedback"
                           rows="5"
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

export default Contact;
