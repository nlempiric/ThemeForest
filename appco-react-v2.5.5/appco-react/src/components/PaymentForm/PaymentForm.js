import React from 'react'
import {Card,Form,InputGroup,Button} from 'react-bootstrap';
import './PaymentForm.css'

const PaymentForm = (props) => {
  const handleOnclick=()=>
  {
    props.setShowArticle(true);
  }
  
  return (
    <div className='mt-5'>
       <Card className='PayCardClass'>
            <Card.Body className='PayCardBodyClass container-fluid col-xl-10 col-lg-11 mt-4 mb-4 d-flex flex-column justify-content-start'>
                <Card.Title className='PayCardTitleClass'>Select Payment</Card.Title>
                <Card.Subtitle className="mb-2 text-muted mt-0">Select Payment Method To Continue</Card.Subtitle>
                <div class="form-check RadioGroupClass mt-3">
                <input class="form-check-input RadioInputClass" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked/>
                <label class="form-check-label RadioClass " for="flexRadioDefault1">
                  Pay Per Article With Crypto
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input RadioInputClass" type="radio" name="flexRadioDefault" id="flexRadioDefault2" disabled/>
                <label class="form-check-label RadioClass" for="flexRadioDefault2">
                  Pay With Credit Card
                </label>
              </div>

              

              <Form.Group className='FormGroupClass'>
              <Form.Label>Amount</Form.Label>
              <InputGroup className="InputGroupClass mt-2">
              <InputGroup.Text className="InputGroupTextClass">$</InputGroup.Text>
              <Form.Control className='InputClass' aria-label="Amount (to the nearest dollar)" />
              </InputGroup>
              </Form.Group>
              <Button className="CardButtonClass" onClick={handleOnclick}>Check Out</Button>
            </Card.Body>
        </Card>
    </div>
  )
}

export default PaymentForm
