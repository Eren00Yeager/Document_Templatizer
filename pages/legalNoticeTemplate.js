
import styles from '../styles/legalnotice.module.css'
import jsPDF from 'jspdf'
import { useEffect, useState } from 'react'
import { Col,Row,Spinner } from 'react-bootstrap'
import LegalNoticeForm from '../components/legalNoticeForm'
import LegalNoticeHtml from '../components/legalNoticeHtml'
import Lnformhtmlmobile from '../components/lnformhtmlmobile'
import axios from 'axios'
import Nav from '../components/navbar'

const SpinnerComp=()=>{
    return(
        <span style={{height:'100vh',marginTop:'45vh'}}>
            <center style={{paddingTop:'45vh'}}>
                <Spinner animation="grow" style={{color:'#00FA9A',height:'5vh',width:'5vh'}}/>
            </center>
        </span>
    );
}

const LegalNoticeTemplate = () => {

    Date.prototype.toDateInputValue = (function() {
        var local = new Date(this);
        local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
        return local.toJSON().slice(0,10);
    });

    const[sheetdata,setSheetdata]=useState('')
    const [date,setDate]=useState(new Date().toDateInputValue())
    const [lawyer,setLawyer]=useState({
        'id':'D/123/2310',
        'name':'ANTIM AMLAN'
    })
    const [client,setClient]=useState({
        'name':'',
        'address':''
    })
    const [recipient,setRecipient]=useState({
        'name':'',
        'address':'',
        'email':''
    })
    const [rupees,setRupees]=useState({
        'rs':0,
        'words':'Zero'
    })
    const [action,setAction]=useState('')
    const [reason,setReason]=useState('')

    useEffect(()=>{
        axios
          .get("/api/consumer")
          .then((res) => {
            setSheetdata(res.data)
          })
          .catch((err)=>{
            console.log("error in consumersheet")
            console.log(err)
          });
    },[])


return(
    <>
    {!sheetdata? <SpinnerComp/>:
    <>
    <Nav name='Consumer Legal Notice Template' setSheetdata={setSheetdata} sheetdata={sheetdata}
    setLawyer={setLawyer} setDate={setDate} setRecipient={setRecipient} setClient={setClient} 
    setRupees={setRupees} setAction={setAction} setReason={setReason}/>
    <Row className={styles.legalnoticerow}>
        <Col xs={12} md={7} className={styles.formcol}>
            <LegalNoticeForm 
            lawyer={lawyer} date={date} client={client} 
            recipient={recipient} rupees={rupees} action={action} reason={reason}
            setLawyer={setLawyer} setDate={setDate} setRecipient={setRecipient} setClient={setClient} 
            setRupees={setRupees} setAction={setAction} setReason={setReason}/>
        </Col>
        <Col md={5} className={`${styles.htmlcol} d-none d-sm-block`}>
            <LegalNoticeHtml lawyer={lawyer} date={date} client={client} 
            recipient={recipient} rupees={rupees} action={action} reason={reason}/>
        </Col>
        <div className={`d-block d-sm-none ${styles.htmlcolmobile}`}>
            <Lnformhtmlmobile
            lawyer={lawyer} date={date} client={client} reason={reason}
            recipient={recipient} rupees={rupees} action={action}/>
        </div>  
    </Row>
    </>
}
    </>
);
    
 }

export default LegalNoticeTemplate;