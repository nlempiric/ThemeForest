import React,{useState} from 'react'
import {Form,Button} from 'react-bootstrap';
import './IdeasForm.css'

const IdeasForm = (props) => {
    

    const handleClickGenerate=()=>
    {
        // console.log(props.Article);
        props.setArticle(true)
    }
  return (
    <div className="container mt-5 ">
            <h3 className='TitleClass'>Ideas!</h3>
        <div className='row IdeasRowClass'>
            <div className='col-lg-12 col-md-12 IdeasColClass'>
                
                <Form className='FormClass'>
                    <Form.Group className="mb-3 CheckboxClass">
                        <Form.Label className='FormCheckLabelClass'>Small Dollar Loans For Bad Credit</Form.Label>
                        <Form.Check type="checkbox" className='FormCheckClass' label="Select This" />
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label >Topic</Form.Label>
                        <Form.Control type="email" /> 
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Words</Form.Label>
                        <Form.Control type="password"  />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Avoid</Form.Label>
                        <Form.Control type="password"  />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Sentiment</Form.Label>
                        <Form.Control type="password"  />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Inspired By</Form.Label>
                        <Form.Control type="password"  />
                    </Form.Group>
                   
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>KeyWord</Form.Label><br/>
                        <Form.Text className='FormTextClass mt-3'>Bad Credit Loans</Form.Text>
                        <Form.Text className='FormTextClass'>Small Personal Loans</Form.Text>
                        <Form.Text className='FormTextClass'>Credit Score Requirements</Form.Text>
                    </Form.Group>
                   
                </Form>
            </div>
        </div>
        <div className='row IdeasRowClass mt-5'>
            <div className='col-lg-12 col-md-12 IdeasColClass'>
                
                <Form className='FormClass'>
                    <Form.Group className="mb-3 CheckboxClass">
                        <Form.Label className='FormCheckLabelClass'>Advantages And Disadvantages of Small Dollar Loans</Form.Label>
                        <Form.Check type="checkbox" className='FormCheckClass' label="Select This" />
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Topic</Form.Label>
                        <Form.Control type="email" /> 
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Words</Form.Label>
                        <Form.Control type="password"  />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Avoid</Form.Label>
                        <Form.Control type="password"  />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Sentiment</Form.Label>
                        <Form.Control type="password"  />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Inspired By</Form.Label>
                        <Form.Control type="password"  />
                    </Form.Group>
                   

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>KeyWord</Form.Label><br/>
                        <Form.Text className='FormTextClass mt-3'>Pros And Cons</Form.Text>
                        <Form.Text className='FormTextClass'>Short Term Loans</Form.Text>
                        <Form.Text className='FormTextClass'>High Interest Rates</Form.Text>
                    </Form.Group>
                
                </Form>
            </div>
        </div>
        <div className='row mt-4'>
            <Button className="GenClass" onClick={handleClickGenerate}>Generate Article</Button>
        </div>
        
    </div>
  )
}

export default IdeasForm