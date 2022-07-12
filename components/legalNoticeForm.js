import styles from '../styles/legalnotice.module.css'
import { Col,Row,Form,Button,Accordion, AccordionContext ,useAccordionButton} from 'react-bootstrap'
import { useContext, useState } from 'react'
import {htmltopdf,htmltodocx} from './utils/htmltopdf'

const LegalNoticeForm=(props)=>{

    const [dummyref,setDummyref]=useState('')
    const [dummystatement,setDummystatement]=useState('')


    const onclickAccordion=(id)=>{
        document.querySelectorAll('.lnformrows').forEach((row)=>{
            if(`#${row.id}`!=id){row.style=null}
        }) 
        const element=document.querySelector(id)

        element.scrollIntoView({ 
            behavior: 'smooth' 
          });

        
        if(!element.style.backgroundColor){
            element.style.backgroundColor='rgba(255, 255, 255, 0.541)'
            element.style.borderRadius='10px'
            element.style.scale='1.05'
            element.style.opacity = 2;
        }else{
            element.style=null
        }

    }
    return(
        <Form>
            <Accordion flush>
                <Form.Group className={styles.accordion} onFocus={()=>onclickAccordion('#lndate')}>
                    <Row>
                    <Col xs={{span:8,offset:4}} md={{span:3,offset:9}}>
                        <Form.Control type="date" placeholder="Enter Mobile of Lawyer"  style={{'textAlign':'center'}} onChange={(e)=>props.setDate(e.target.value)}/>
                    </Col>
                    </Row>
                    
                    
                </Form.Group>
                

                <Accordion.Item className={styles.accordion} eventKey="1">
                    <Accordion.Header onClick={()=>onclickAccordion('#lnlawyer')}>Lawyer Name and Address</Accordion.Header>
                    <Accordion.Body>
                        <Form.Group className="mb-3">
                            <Form.Label>Lawyer Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Name of Lawyer" onChange={(e)=>props.setLawyer(prevState=>({
                                ...prevState,
                                'name':e.target.value.toUpperCase()
                            }))}/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Lawyer ID</Form.Label>
                            <Form.Control type="text" placeholder="Enter ID of Lawyer" onChange={(e)=>props.setLawyer(prevState=>({
                                ...prevState,
                                'id':e.target.value
                            }))}/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Lawyer Address</Form.Label>
                            <Form.Control type="textarea" placeholder="Enter Address of Lawyer" onChange={(e)=>props.setLawyer(prevState=>({
                                ...prevState,
                                'address':e.target.value
                            }))}/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Lawyer Pin</Form.Label>
                            <Form.Control type="text" placeholder="Enter Pin of Lawyer" onChange={(e)=>props.setLawyer(prevState=>({
                                ...prevState,
                                'pin':e.target.value
                            }))}/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Lawyer Phone</Form.Label>
                            <Form.Control type="text" placeholder="Enter Phone of Lawyer" onChange={(e)=>props.setLawyer(prevState=>({
                                ...prevState,
                                'phone':e.target.value
                            }))}/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>LawyerMobile</Form.Label>
                            <Form.Control type="text" placeholder="Enter Mobile of Lawyer" onChange={(e)=>props.setLawyer(prevState=>({
                                ...prevState,
                                'mobile':e.target.value
                            }))}/>
                        </Form.Group>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item className={styles.accordion} eventKey="2">
                    <Accordion.Header onClick={()=>onclickAccordion('#lnrecipient')}>Recipient Name and Address</Accordion.Header>
                    <Accordion.Body>
                        <Form.Group className="mb-3">
                            <Form.Label>Recipient Company Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Name of Recipient" onChange={(e)=>props.setRecipient(prevState=>({
                                ...prevState,
                                'name':e.target.value
                            }))}/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Recipient Address</Form.Label>
                            <Form.Control type="textarea" placeholder="Enter Address of Recipient" onChange={(e)=>props.setRecipient(prevState=>({
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
                            <Form.Control type="text" placeholder="Enter Pin of Recipient" onChange={(e)=>props.setRecipient(prevState=>({
                                ...prevState,
                                'pin':e.target.value
                            }))}/>
                        </Form.Group>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item className={styles.accordion} eventKey="3">
                    <Accordion.Header onClick={()=>onclickAccordion('#lnclient')}>Client Name and Address</Accordion.Header>
                    <Accordion.Body>
                        <Form.Group className="mb-3">
                            <Form.Label>Client Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Name of Client" onChange={(e)=>props.setClient(prevState=>({
                                ...prevState,
                                'name':e.target.value
                            }))}/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Client Address</Form.Label>
                            <Form.Control type="textarea" placeholder="Enter Address of Client" onChange={(e)=>props.setClient(prevState=>({
                                ...prevState,
                                'address':e.target.value
                            }))}/>
                        </Form.Group>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item className={styles.accordion} eventKey="4">
                    <Accordion.Header onClick={()=>onclickAccordion('#lnreferences')}>References</Accordion.Header>
                    <Accordion.Body>
                        <Form.Group className="mb-3">
                            <Form.Label>Add references here</Form.Label>
                            <Row>
                                <Col xs={10}>
                                    <Form.Control type="text" value={dummyref} onChange={(e)=>setDummyref(e.target.value)}/>    
                                </Col>
                                <Col xs={2}>
                                    <Button variant="info" onClick={(e)=>{
                                        e.preventDefault();
                                        if(dummyref){
                                            props.setReferences(prevState=>([...prevState,dummyref]));
                                            setDummyref('')
                                        } 
                                    }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" className="bi bi-plus-lg" viewBox="0 0 16 16">
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

                <Accordion.Item className={styles.accordion} eventKey="5">
                    <Accordion.Header onClick={()=>onclickAccordion('#lnstatements')}>Statements</Accordion.Header>
                    <Accordion.Body>
                        <Form.Group className="mb-3">
                            <Form.Label>Add statements here</Form.Label>
                            <Row>
                                <Col xs={10}>
                                    <Form.Control type="text" value={dummystatement} onChange={(e)=>setDummystatement(e.target.value)}/>    
                                </Col>
                                <Col xs={2}>
                                    <Button variant="info" onClick={(e)=>{
                                        e.preventDefault();
                                        if(dummystatement){
                                            props.setStatements(prevState=>([...prevState,dummystatement]));
                                            setDummystatement('')
                                        } 
                                    }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" className="bi bi-plus-lg" viewBox="0 0 16 16">
                                            <path d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                                        </svg>    
                                    </Button>   
                                </Col>
                            </Row>
                            <Row>
                                <span style={{'padding':'3% 0 0 3%'}}>
                                    <ol start='2'>
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
               <Button variant="success" size='lg' style={{'margin':'1vh'}} onClick={()=>htmltopdf(document.querySelector('#legalnoticeform'),'Legal_Notice.pdf')}>
                    Generate PDF
                </Button>&emsp;
                <Button variant="success" size='lg' style={{'margin':'1vh'}} onClick={()=>htmltodocx(document.querySelector('#legalnoticeform'),'Legal_Notice.pdf')}>
                    Generate DOCX
                </Button> 
            </center>
                   
            
        </Form>
    );
}

export default LegalNoticeForm;