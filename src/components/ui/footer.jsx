import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
  return (
    <div className='my-10 mx-auto bg-blue-950'>
        <Container>
            <Row>
                <Col className='footer-col d-flex justify-content-center'>
                    <p>1 of 3</p>
                </Col>
                <Col className='footer-col d-flex justify-content-center'>
                    <p>2 of 3</p>
                </Col>
                <Col className='footer-col d-flex justify-content-center'>
                <p>3 of 3</p>
                </Col>
            </Row>
        </Container>
    </div>
  );
}

export default Footer;