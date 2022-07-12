import styles from '../styles/legalnotice.module.css'
import { Col,Row,Form,Button,Accordion } from 'react-bootstrap'
import { useState } from 'react'
import {htmltopdf} from './utils/htmltopdf'

const LegalNoticeForm=(props)=>{

    const [dummyref,setDummyref]=useState('')
    const [dummystatement,setDummystatement]=useState('')

    return(
        <Form>
            <Accordion flush>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Date and Time</Accordion.Header>
                    <Accordion.Body>
                        <Form.Group className="mb-3" controlId="LawyerMobile">
                            <Form.Label>DD</Form.Label>
                            <Form.Control type="text" placeholder="Enter Mobile of Lawyer" onChange={(e)=>props.setDate(prevState=>({
                                ...prevState,
                                'DD':e.target.value
                            }))}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="LawyerMobile">
                            <Form.Label>MM</Form.Label>
                            <Form.Control type="text" placeholder="Enter Mobile of Lawyer" onChange={(e)=>props.setDate(prevState=>({
                                ...prevState,
                                'MM':e.target.value
                            }))}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="LawyerMobile">
                            <Form.Label>YY</Form.Label>
                            <Form.Control type="text" placeholder="Enter Mobile of Lawyer" onChange={(e)=>props.setDate(prevState=>({
                                ...prevState,
                                'YY':e.target.value
                            }))}/>
                        </Form.Group>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                    <Accordion.Header>Lawyer Name and Address</Accordion.Header>
                    <Accordion.Body>
                        <Form.Group className="mb-3" controlId="LawyerName">
                            <Form.Label>Lawyer Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Name of Lawyer" onChange={(e)=>props.setLawyer(prevState=>({
                                ...prevState,
                                'name':e.target.value.toUpperCase()
                            }))}/>
                            {/* <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text> */}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="LawyerAddress">
                            <Form.Label>Lawyer ID</Form.Label>
                            <Form.Control type="text" placeholder="Enter ID of Lawyer" onChange={(e)=>props.setLawyer(prevState=>({
                                ...prevState,
                                'id':e.target.value
                            }))}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="LawyerAddress">
                            <Form.Label>Lawyer Address</Form.Label>
                            <Form.Control type="textarea" placeholder="Enter Address of Lawyer" onChange={(e)=>props.setLawyer(prevState=>({
                                ...prevState,
                                'address':e.target.value
                            }))}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="LawyerPin">
                            <Form.Label>Lawyer Pin</Form.Label>
                            <Form.Control type="text" placeholder="Enter Pin of Lawyer" onChange={(e)=>props.setLawyer(prevState=>({
                                ...prevState,
                                'pin':e.target.value
                            }))}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="LawyerPhone">
                            <Form.Label>Lawyer Phone</Form.Label>
                            <Form.Control type="text" placeholder="Enter Phone of Lawyer" onChange={(e)=>props.setLawyer(prevState=>({
                                ...prevState,
                                'phone':e.target.value
                            }))}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="LawyerMobile">
                            <Form.Label>LawyerMobile</Form.Label>
                            <Form.Control type="text" placeholder="Enter Mobile of Lawyer" onChange={(e)=>props.setLawyer(prevState=>({
                                ...prevState,
                                'mobile':e.target.value
                            }))}/>
                        </Form.Group>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                    <Accordion.Header>Recipient Name and Address</Accordion.Header>
                    <Accordion.Body>
                        <Form.Group className="mb-3" controlId="LawyerName">
                            <Form.Label>Recipient Company Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Name of Company" onChange={(e)=>props.setRecipient(prevState=>({
                                ...prevState,
                                'name':e.target.value
                            }))}/>
                            {/* <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text> */}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="LawyerAddress">
                            <Form.Label>Recipient Address</Form.Label>
                            <Form.Control type="textarea" placeholder="Enter Address of Lawyer" onChange={(e)=>props.setRecipient(prevState=>({
                                ...prevState,
                                'address':e.target.value
                            }))}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="LawyerPhone">
                            <Form.Label>Recipient City</Form.Label>
                            <Form.Control type="text" placeholder="Enter City of Recipient" onChange={(e)=>props.setRecipient(prevState=>({
                                ...prevState,
                                'city':e.target.value
                            }))}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="LawyerMobile">
                            <Form.Label>Recipient State</Form.Label>
                            <Form.Control type="text" placeholder="Enter State of Recipient" onChange={(e)=>props.setRecipient(prevState=>({
                                ...prevState,
                                'state':e.target.value
                            }))}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="LawyerPin">
                            <Form.Label>Recipient Pin</Form.Label>
                            <Form.Control type="text" placeholder="Enter Pin of Lawyer" onChange={(e)=>props.setRecipient(prevState=>({
                                ...prevState,
                                'pin':e.target.value
                            }))}/>
                        </Form.Group>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                    <Accordion.Header>Client Name and Address</Accordion.Header>
                    <Accordion.Body>
                        <Form.Group className="mb-3" controlId="LawyerName">
                            <Form.Label>Client Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Name of Company" onChange={(e)=>props.setClient(prevState=>({
                                ...prevState,
                                'name':e.target.value
                            }))}/>
                            {/* <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text> */}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="LawyerAddress">
                            <Form.Label>Client Address</Form.Label>
                            <Form.Control type="textarea" placeholder="Enter Address of Lawyer" onChange={(e)=>props.setClient(prevState=>({
                                ...prevState,
                                'address':e.target.value
                            }))}/>
                        </Form.Group>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="4">
                    <Accordion.Header>References</Accordion.Header>
                    <Accordion.Body>
                        <Form.Group className="mb-3" controlId="LawyerName">
                            <Form.Label>Add references here</Form.Label>
                            <Row>
                                <Col xs={10}>
                                    <Form.Control type="text" value={dummyref} onChange={(e)=>setDummyref(e.target.value)}/>    
                                </Col>
                                <Col xs={2}>
                                    <Button type='primary' onClick={(e)=>{
                                        e.preventDefault();
                                        if(dummyref){
                                            props.setReferences(prevState=>([...prevState,dummyref]));
                                            setDummyref('')
                                        } 
                                    }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                                            <path d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                                        </svg>    
                                    </Button>   
                                </Col>
                            </Row>
                            <Row>
                                <span style={{'padding':'3% 0 0 3% '}}>
                                    <ol>
                                        {props.references.map((ref,id)=>{
                                            return(
                                                <li key={id}>{ref}</li>
                                            );
                                        })}
                                    </ol>    
                                </span> 
                            </Row>
                        </Form.Group>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="5">
                    <Accordion.Header>Statements</Accordion.Header>
                    <Accordion.Body>
                        <Form.Group className="mb-3" controlId="LawyerName">
                            <Form.Label>Add statements here</Form.Label>
                            <Row>
                                <Col xs={10}>
                                    <Form.Control type="text" value={dummystatement} onChange={(e)=>setDummystatement(e.target.value)}/>    
                                </Col>
                                <Col xs={2}>
                                    <Button type='primary' onClick={(e)=>{
                                        e.preventDefault();
                                        if(dummystatement){
                                            props.setStatements(prevState=>([...prevState,dummystatement]));
                                            setDummystatement('')
                                        } 
                                    }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                                            <path d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                                        </svg>    
                                    </Button>   
                                </Col>
                            </Row>
                            <Row>
                                <span style={{'padding':'3% 0 0 3%'}}>
                                    <ol>
                                        {props.statements.map((ref,id)=>{
                                            return(
                                                <li key={id}>{ref}</li>
                                            );
                                        })}
                                    </ol>    
                                </span> 
                            </Row>
                        </Form.Group>
                    </Accordion.Body>
                </Accordion.Item>
                
            </Accordion>
            
            <br/>
            <center>
               <Button variant="primary" onClick={()=>htmltopdf(document.querySelector('#legalnoticeform'),'Legal_Notice.pdf')}>
                    Generate PDF
                </Button>  
            </center>
                   
            
        </Form>
    );
}

export default LegalNoticeForm;