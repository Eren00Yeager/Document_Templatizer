
import styles from '../styles/legalnotice.module.css'
import jsPDF from 'jspdf'
import { useState } from 'react'
import { Col,Row,Form,Button, Container } from 'react-bootstrap'
import LegalNoticeForm from '../components/legalNoticeForm'
import LegalNoticeHtml from '../components/legalNoticeHtml'


const legalNoticeTemplate = () => {
    const [date,setDate]=useState({
            'DD':'__',
            'MM':'__',
            'YY':'__'
        })

    const [lawyer,setLawyer]=useState({
        'id':'______',
        'name':'______',
        'address':'______',
        'pin':'______',
        'phone':'______',
        'mobile':'______'
    })

    const [client,setClient]=useState({
        'name':'______',
        'address':'______'
    })

    const [recipient,setRecipient]=useState({
        'name':'______',
        'address':'______',
        'city':'______',
        'state':'______',
        'pin':'______'
    })

    const [references,setReferences]=useState([])

    const [statements,setStatements]=useState([])

return(
    <>
    <Row style={{'padding':'3%'}}>
        <Col md={7}>
            <LegalNoticeForm setLawyer={setLawyer} setDate={setDate} setRecipient={setRecipient} setClient={setClient} 
            references={references} setReferences={setReferences} statements={statements} setStatements={setStatements}/>
        </Col>
        <Col md={5}>
            <LegalNoticeHtml lawyer={lawyer} date={date} client={client} recipient={recipient} references={references} statements={statements}/>
        </Col>
    </Row>
        
        
    </>
);
    
 }

 export default legalNoticeTemplate;