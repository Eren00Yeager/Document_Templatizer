import styles from '../styles/legalnotice.module.css'
import { Col,Row,Form,Button,Accordion, AccordionContext ,useAccordionButton} from 'react-bootstrap'
import { useContext, useRef, useState } from 'react'
import {htmltopdf,htmltodocx,htmltomail} from './utils/htmltopdf'
import emailjs from 'emailjs-com'
import { rstotext } from './utils/rstotext'


const LegalNoticeForm=(props)=>{

    return(
        <Form className={styles.lnform}>

            <Form.Group className={styles.accordion}>
                <Row>
                <Col xs={{span:8,offset:4}} md={{span:3,offset:9}}>
                    <Form.Control type="date"  style={{'textAlign':'center'}} onChange={(e)=>props.setDate(e.target.value)}/>
                </Col>
                </Row>
            </Form.Group><hr/>

            <Form.Group className="mb-3 row">
                <Col xs={12} md={2}><Form.Label>Enter Name of Lawyer</Form.Label></Col>
                <Col xs={12} md={10}>
                    <Form.Control type="text" value={props.lawyer['name']} onChange={(e)=>props.setLawyer(prevState=>({
                        ...prevState,
                        'name':e.target.value
                    }))}/>
                </Col>
            </Form.Group>
            <Form.Group className="mb-3 row">
                <Col xs={12} md={2}><Form.Label>Enter ID of Lawyer</Form.Label></Col>
                <Col xs={12} md={10}>
                    <Form.Control type="text" value={props.lawyer['id']} onChange={(e)=>props.setLawyer(prevState=>({
                        ...prevState,
                        'id':e.target.value
                    }))}/>
                </Col>    
            </Form.Group><hr/>

            <Form.Group className="mb-3 row">
                <Col xs={12} md={2}><Form.Label>Enter Name of Client</Form.Label></Col>
                <Col xs={12} md={10}>
                    <Form.Control type="text" value={props.client['name']} onChange={(e)=>props.setClient(prevState=>({
                        ...prevState,
                        'name':e.target.value
                    }))}/>    
                </Col>
            </Form.Group>
            <Form.Group className="mb-3 row">
                <Col xs={12} md={2}><Form.Label>Enter Address of Client</Form.Label></Col>
                <Col xs={12} md={10}>
                    <Form.Control as="textarea" value={props.client['address']} onChange={(e)=>props.setClient(prevState=>({
                        ...prevState,
                        'address':e.target.value
                    }))}/>
                </Col>
                
            </Form.Group><hr/>

            <Form.Group className="mb-3 row">
                <Col xs={12} md={2}><Form.Label>Enter Name of Recipient</Form.Label></Col>
                <Col xs={12} md={10}>
                    <Form.Control type="text" value={props.recipient['name']} onChange={(e)=>props.setRecipient(prevState=>({
                        ...prevState,
                        'name':e.target.value
                    }))}/>
                </Col>
            </Form.Group>
            <Form.Group className="mb-3 row">
                <Col xs={12} md={2}><Form.Label>Enter Email of Recipient</Form.Label></Col>
                <Col xs={12} md={10}>
                    <Form.Control type="text" value={props.recipient['email']} onChange={(e)=>props.setRecipient(prevState=>({
                        ...prevState,
                        'email':e.target.value
                    }))}/>
                </Col>
            </Form.Group>
            <Form.Group className="mb-3 row">
                <Col xs={12} md={2}><Form.Label>Enter Address of Recipient</Form.Label></Col>
                <Col xs={12} md={10}>
                    <Form.Control as="textarea" value={props.recipient['address']} onChange={(e)=>props.setRecipient(prevState=>({
                        ...prevState,
                        'address':e.target.value
                    }))}/>
                </Col>
            </Form.Group><hr/>

            <Form.Group className="mb-3 row">
                <Col xs={12} md={2}><Form.Label>Enter Amount to be refunded</Form.Label></Col>
                <Col xs={12} md={10}>
                    <Form.Control type="number" value={props.rupees['rs']} onChange={(e)=>
                    {
                        props.setRupees(prevState=>({
                        ...prevState,
                        'rs':e.target.value,
                        'words':rstotext(e.target.value)
                        }))
                    }
                    }/>
                </Col>
                
            </Form.Group>
            <Form.Group className="mb-3 row">
                <Col xs={12} md={2}><Form.Label>Amount in words</Form.Label></Col>
                <Col xs={12} md={10}>
                    <Form.Control type="text" value={props.rupees['words']} onChange={(e)=>props.setRupees(prevState=>({
                        ...prevState,
                        'words':e.target.value
                    }))}/>
                </Col>
            </Form.Group><hr/>

            <Form.Group className="mb-3 row">
                <Col xs={12} md={2}><Form.Label>Reason for the notice</Form.Label></Col>
                <Col xs={12} md={10}>
                    <Form.Control type="text" value={props.reason} onChange={(e)=>props.setReason(e.target.value)}/>
                </Col>
            </Form.Group>
            <Form.Group className="mb-3 row">
                <Col xs={12} md={2}><Form.Label>Action</Form.Label></Col>
                <Col xs={12} md={10}>
                    <Form.Control type="text" value={props.action} onChange={(e)=>props.setAction(e.target.value)}/>
                </Col>
            </Form.Group>


            <center>
               <Button variant="success" size='lg' style={{'margin':'1vh'}} onClick={()=>htmltopdf(document.querySelector('#legalnoticeform'),'Legal_Notice')}>
                    Generate PDF
                </Button>&emsp;
                <Button variant="success" size='lg' style={{'margin':'1vh'}} onClick={()=>htmltodocx(document.querySelector('#legalnoticeform'),'Legal_Notice')}>
                    Generate DOCX
                </Button> &emsp;
                <Button id='htmltoemailbtn' variant="success" size='lg' style={{'margin':'1vh'}} onClick={()=>htmltomail(props.lawyer,props.client,props.date,props.recipient,props.rupees,props.reason,props.action)}>
                    Send mail
                </Button> 
            </center>
        </Form>
    );
}

export default LegalNoticeForm;




