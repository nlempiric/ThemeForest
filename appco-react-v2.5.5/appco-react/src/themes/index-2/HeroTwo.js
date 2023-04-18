import React from "react";
import { Link } from "react-router-dom";
import Counter from "../../components/counter/Counter";
// import  from 'react-bootstrap/Button';
import { Row, Form, Button, Col } from "react-bootstrap";
import PaymentForm from "../../components/PaymentForm/PaymentForm";
import "./HeroTwo.css";
import Modal from "react-bootstrap/Modal";

export default function HeroTwo(props) {
  const [showForm, setshowForm] = React.useState(false);
  const [ShowArticle, setShowArticle] = React.useState(false);

  const handleonClick = (event) =>
  {
    event.preventDefault();
    setshowForm(true);
    console.log('clickedddddddd')
  } 
  const handleonClick1 = (event) =>
  {
    event.preventDefault();
    props.setIdeas(true);
    console.log('ideassss')
  } 
  return (
    <>
      <section
        className="hero-section pt-100 background-img"
        style={{
          background:
            "url('assets/img/hero-bg-1.jpg')no-repeat center center / cover",
            height:'750px'
        }}
      >
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md-6 col-lg-6">
              <div className="hero-content-left text-white mt-5">
                <span className="text-uppercase h6">
                  Customer First Priority
                </span>
                <h1 className="text-white">
                  <span>We Deliver</span> Your Product More Faster
                </h1>
                {/* <p className="lead">
                  Quickly morph client-centric results through performance based
                  applications. Proactively facilitate professional human
                  capital for cutting-edge.
                </p>

                <a href="#download" className="btn app-store-btn">
                  Download Now
                </a> */}

                <Form>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label className="FormLabelClass">
                        Article Quantity:
                      </Form.Label>
                      <Form.Control className="Row1Class" type="number" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label className="FormLabelClass">
                        Keyword Quantity:
                      </Form.Label>
                      <Form.Control className="Row1Class" type="number" />
                    </Form.Group>
                  </Row>

                  <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label className="FormLabelClass">
                      Enter Topic:
                    </Form.Label>
                    <Form.Control className="Row2Class" />
                  </Form.Group>

                  {ShowArticle? <Button
                    className="FormBtnClass mt-2"
                    variant="light"
                    type="button"
                    onClick={handleonClick1}>
                    {props.Idea ? "Ideas Generated" : "Payment Success, Genrate Ideas"}
                  </Button>  : <Button
                    className="FormBtnClass mt-2"
                    variant="light"
                    type="button"
                    onClick={handleonClick}>
                    {showForm ? "You Don't Have Credits Pay To Proceed" : "Generate Idea"}
                  </Button>} 
                 
                </Form>
              </div>
            </div>
           
            <div className="col-md-6 col-lg-5">
              <div className="hero-animation-img">
                {showForm ? <PaymentForm setShowArticle={setShowArticle}/>  : 

                  <img
                    src="assets/img/image-14.png"
                    alt="img"
                    className="img-fluid"
                  />
                }
              </div>
            </div>
          </div>
          {/* <Counter /> */}
        </div>
      </section>
    </>
  );
}
