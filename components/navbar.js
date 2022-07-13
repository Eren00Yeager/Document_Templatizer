import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Help from '../components/modal';

function ColorSchemesExample() {
  return (
    <>
      <Navbar expand="lg" style={{'background':'linear-gradient(#02fa8a,#2AF598)','height':'5vh'}}>
        <Container>
          <Navbar.Brand style={{'color': 'white', 'fontWeight':'bold', 'fontSize':'30px'}} href="/">LegalNoticeTemplate</Navbar.Brand>
            {/* <Nav className="me-auto">
              <Nav.Link style={{'color': 'white', 'fontSize':'20px'}} href="#home">Home</Nav.Link>
            </Nav> */}
          <Navbar.Text className='d-none d-sm-block'>
            <Help />
          </Navbar.Text>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;