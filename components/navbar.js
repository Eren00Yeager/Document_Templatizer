import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import {rstotext} from './utils/rstotext'
import styles from '../styles/Home.module.css'

function ColorSchemesExample(props) {
  const handleClick=()=>{
    
    var data;
    if(props.sheetdata.length==0){
      alert('No more data in sheet')
    }else{
      data=props.sheetdata.shift()
      props.setClient(prevState=>({
        ...prevState,
        'name':data['client_name'],
        'address':data['client_address']
      }))
      props.setRecipient(prevState=>({
        ...prevState,
          'name':data['recipient_name'],
          'address':data['recipient_address'],
          'email':data['recipient_email']
      }))
      props.setRupees(prevState=>({
        ...prevState,
          'words':rstotext(data['amount']),
          'rs':data['amount']
      }))
      props.setAction(data['action'])
      props.setReason(data['reason'])
    }
    

  }
  return (
    <>
      <Navbar expand="lg" className={styles.navbar}>
        <Container>
          <Navbar.Brand className={styles.navbarbrand}  href="/">{props.name}</Navbar.Brand>
          <Navbar.Text>
            <Button variant='success' onClick={handleClick}>Prefill Next</Button>
          </Navbar.Text>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;