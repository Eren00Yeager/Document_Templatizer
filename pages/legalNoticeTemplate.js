
import styles from '../styles/legalnotice.module.css'
import jsPDF from 'jspdf'
import { useState } from 'react'
import { Col,Row,Form,Button, Container } from 'react-bootstrap'
import LegalNoticeForm from '../components/legalNoticeForm'
import LegalNoticeHtml from '../components/legalNoticeHtml'
import Lnformhtmlmobile from '../components/lnformhtmlmobile'


const LegalNoticeTemplate = () => {
    const [date,setDate]=useState('______')

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
        'address1':'______',
        'address2':'______',
        'city':'______',
        'state':'______',
        'pin':'______'
    })

    const [recipient,setRecipient]=useState({
        'name':'______',
        'address1':'______',
        'address2':'______',
        'city':'______',
        'state':'______',
        'pin':'______'
    })

    const [references,setReferences]=useState([])

    const [statements,setStatements]=useState([])

return(
    <>
    <Row className={styles.legalnoticerow}>
        <Col xs={12} md={7} className={styles.formcol}>
            <LegalNoticeForm 
            setLawyer={setLawyer} setDate={setDate} setRecipient={setRecipient} setClient={setClient} 
            references={references} setReferences={setReferences} statements={statements} setStatements={setStatements}/>
        </Col>
        <Col md={5} className={`${styles.htmlcol} d-none d-sm-block`}>
            <LegalNoticeHtml lawyer={lawyer} date={date} client={client} 
            recipient={recipient} references={references} statements={statements}/>
        </Col>
        <div className={`d-block d-sm-none ${styles.htmlcolmobile}`}>
            <Lnformhtmlmobile
            lawyer={lawyer} date={date} client={client} 
            recipient={recipient} references={references} statements={statements}/>
        </div>  
    </Row>
        
        
    </>
);
    
 }

export default LegalNoticeTemplate;