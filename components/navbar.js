import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import {rstotext} from './utils/rstotext'

function ColorSchemesExample(props) {
  const handleClick=()=>{
    var data=props.sheetdata
    if(!data){
      alert('No more data in sheet')
    }else{
      data=data.shift()
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
      <Navbar expand="lg" style={{'background':'linear-gradient(#2AF598,#00FA9A)','height':'5vh'}}>
        <Container>
          <Navbar.Brand style={{'color': 'white', 'fontWeight':'bold', 'fontSize':'30px'}} href="/">{props.name}</Navbar.Brand>
          <Navbar.Text className='d-none d-sm-block'>
            <Button onClick={handleClick}>Prefill : Next</Button>
          </Navbar.Text>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;