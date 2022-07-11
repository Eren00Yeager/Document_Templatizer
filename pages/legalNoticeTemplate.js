
import styles from '../styles/generatePDF.module.css'
import jsPDF from 'jspdf'
import { useState } from 'react'
import { Col,Row,Form,Button } from 'react-bootstrap'

const htmltopdf=()=>{
    var doc=new jsPDF('p','pt','a4')
    doc.html(document.querySelector('#html2pdfform'),{
        callback:function(pdf){
            var pageCount=doc.internal.getNumberOfPages();
            pdf.deletePage(pageCount+1);
            pdf.save('mypdf.pdf');
        }
    })
}


const legalNoticeTemplate = () => {

    const [lawyer,setLawyer]=useState({
        'name':'_____',
        'address':'_____',
        'pin':'_____',
        'phone':'_____',
        'mobile':'_____'
    })

return(
    <>
    <Row style={{'padding':'3%'}}>
        <Col md={7}>
            <Form>
                <Form.Group className="mb-3" controlId="LawyerName">
                    <Form.Label>LawyerName</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name of Lawyer" onChange={(e)=>setLawyer(prevState=>({
                        ...prevState,
                        'name':e.target.value
                    }))}/>
                    {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text> */}
                </Form.Group>
                <Form.Group className="mb-3" controlId="LawyerAddress">
                    <Form.Label>LawyerAddress</Form.Label>
                    <Form.Control type="textarea" placeholder="Enter Address of Lawyer" onChange={(e)=>setLawyer(prevState=>({
                        ...prevState,
                        'address':e.target.value
                    }))}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="LawyerPin">
                    <Form.Label>LawyerPin</Form.Label>
                    <Form.Control type="text" placeholder="Enter Pin of Lawyer" onChange={(e)=>setLawyer(prevState=>({
                        ...prevState,
                        'pin':e.target.value
                    }))}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="LawyerPhone">
                    <Form.Label>LawyerPhone</Form.Label>
                    <Form.Control type="text" placeholder="Enter Phone of Lawyer" onChange={(e)=>setLawyer(prevState=>({
                        ...prevState,
                        'phone':e.target.value
                    }))}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="LawyerMobile">
                    <Form.Label>LawyerMobile</Form.Label>
                    <Form.Control type="text" placeholder="Enter Mobile of Lawyer" onChange={(e)=>setLawyer(prevState=>({
                        ...prevState,
                        'mobile':e.target.value
                    }))}/>
                </Form.Group>
                <Button variant="primary"  onClick={htmltopdf}>
                    Generate PDF
                </Button>
            </Form>
        </Col>
        <Col md={5}>
            <div id='html2pdfform' className={styles.form}>
                <h2><center>{lawyer['name']}</center></h2>
                <h3><center>ADVOCATE</center></h3>
                <h4>Address : {lawyer['address']}</h4>
                <h4>Pin : {lawyer['pin']}</h4>
                <h4>Telephone : {lawyer['phone']} &emsp; Mobile : {lawyer['mobile']}</h4>
                <hr/>
                <div>
                    <p>
                    <span >Date:</span>
                    <em>
                        <span >DD-MM-YYYY</span>
                    </em>
                    </p>
                    <p>
                    <span >To,&nbsp;</span>
                    </p>
                    <p>
                    <strong>Grievance Officer</strong>
                    </p>
                    <p>
                    <em>
                        <span >I&lt;Company’s name&gt;</span>
                    </em>
                    </p>
                    <p>
                    <em>
                        <span >&lt;Address line 1</span>
                    </em>
                    </p>
                    <p>
                    <em>
                        <span >line 2, line 3&nbsp;</span>
                    </em>
                    </p>
                    <p>
                    <em>
                        <span >City, State - Pin&gt;</span>
                    </em>
                    </p>
                    <p dir="ltr">
                    <br/>
                    <br/>
                    </p>
                    <p>
                    <strong>My Client:</strong>
                    </p>
                    <p>
                    <strong>
                        <em>Mr. &lt;Client’s Name&gt;</em>
                    </strong>
                    <em>
                        <span >,</span>
                    </em>
                    <em>
                        <span >R/o – &lt;Full Address&gt;</span>
                    </em>
                    </p>
                    <p dir="ltr">
                    <br/>
                    </p>
                    <p>
                    <strong>SUB:&nbsp;</strong>
                    <em>
                        <span >Legal</span>
                    </em> 
                    <em>
                        <span >Notice for deficiency in services, defects and mental harassment.</span>
                    </em>
                    </p>
                    <p>
                    <strong>
                        <em>Reference:</em>
                    </strong>
                    </p>
                    <ol>
                    <li  aria-level="1">
                        <span >&nbsp;</span>
                    </li>
                    <li  aria-level="1">
                        <span >&nbsp;&nbsp;</span>
                    </li>
                    <li  aria-level="1">
                        <span >&nbsp;&nbsp;</span>
                    </li>
                    <li  aria-level="1">
                        <span >&nbsp;</span>
                    </li>
                    </ol>
                    <p dir="ltr">
                    <br/>
                    </p>
                    <p>
                    <span >Dear Sir/ Ma’am,</span>
                    </p>
                    <p>
                    <span >It is hereby stated that You have provided deficient services, breached the agreed terms and conditions and denied the due refund to my Client accruing from the mental harassment, deficiency of services to my Client along with criminal breach of trust and conspiracy to cheat and defraud my Client. Under the instructions from and on behalf of my Client, and after crucial analysis of all the sequential events of the repeated conversations between You and my Client which were handed to me by my client, we would like to state as follows:</span>
                    </p>
                    <ol>
                    <li  aria-level="1">
                        <span >That my Client ………,, a resident of</span>
                    </li>
                    <li  aria-level="1">
                        <br/>
                    </li>
                    <li  aria-level="1">
                        <span >&nbsp;</span>
                    </li>
                    <li  aria-level="1">
                        <span >&nbsp;</span>
                    </li>
                    <li  aria-level="1">
                        <span >&nbsp;</span>
                    </li>
                    <li  aria-level="1">
                        <span >&nbsp;</span>
                    </li>
                    <li  aria-level="1">
                        <span >&nbsp;</span>
                    </li>
                    <li  aria-level="1">
                        <span >&nbsp;&nbsp;</span>
                    </li>
                    <li  aria-level="1">
                        <span >. It is abundantly clear for you to note that You breached the aforesaid terms by not providing the services or more accurately providing deficient services.</span>
                    </li>
                    <li  aria-level="1">
                        <span >That after examining the above situation and perilous travel service provided by You. My Client’s trip was ruined. That your engaged employees, associates and representatives were ill mannered and unresponsive and did not help in resolving the issues raised.&nbsp;</span>
                    </li>
                    <li  aria-level="1">
                        <span >Accordingly, upon instructions of and on behalf of my Client, we hereby demand You to refund the above said amount or respond to the present Notice, within 20 days of the first receipt thereof (by e-mail or other modes) furnishing reasons as to why consumer proceedings for the above-mentioned offences, should not be initiated against You. Kindly be informed that in case of failure to respond on your part within the said time period, my Client shall be constrained to initiate legal action in accordance with law and in such an event You alone shall be liable for all our costs and expenses in contesting litigation against You and the consequences of such litigation.</span>
                    </li>
                    <li  aria-level="1">
                        <span >This is without prejudice to all other rights and entitlements that we may have against You notice(s) under law and equity.</span>
                    </li>
                    </ol>
                    <p dir="ltr">
                    <br/>
                    </p>
                    <p>
                    <span >Take further notice that in case of your failure to discharge your obligations and commitments within the time specified, my Client shall be further constrained to lodge a consumer complaint against You for deficiency of services and wrongful loss caused to my Client and also institute such other proceedings and actions in law as advised.&nbsp;</span>
                    </p>
                    <p>
                    <strong>A copy of the Legal Notice has been retained in my office for future reference.</strong>
                    </p>
                    <p dir="ltr">
                    <br/>
                    <br/>
                    </p>
                    <p>
                    <strong>&lt;Lawyer’s Name&gt;</strong>
                    </p>
                    <p>
                    <span >(Advocate)</span>
                    </p>
                    <p>
                    <span >&lt;Lawyer’s ID no.&gt;</span>
                    </p>
                </div>
            </div>
            <br/>
        </Col>
    </Row>
        
        
    </>
);
    
 }

 export default legalNoticeTemplate;