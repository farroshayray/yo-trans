import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Link from 'next/link';

function Footer() {
  return (
    <div className='mt-10 mx-auto bg-blue-950 pt-10'>
        <Container>
            <Row className='flex flex-col md:flex-row gap-4'>
                <Col className='footer-col d-flex flex-col justify-content-center'>
                    <div className='my-auto mx-auto bg-white p-2 rounded-md'>
                        <img
                        src="/navbarlogo.png"
                        width="80"
                        height="80"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                        />
                    </div>  
                    <div className='flex mx-auto'>
                        <Link href='https://wa.me/6285158444204?text=Halo%20yo-trans!%20ada%20yang%20ingin%20saya%20tanyakan' className='text-white'><i className="bi bi-whatsapp me-2"></i></Link>
                        <Link href='https://telegram.me/share/url?url=https://yo-trans.com&text=Halo%20yo-trans!%20ada%20yang%20ingin%20saya%20tanyakan' className='text-white'><i className="fa-brands fa-telegram me-2"></i></Link>
                        <Link href='mailto:yo-trans@gmail.com?subject=Halo%20yo-trans!&body=Ada%20yang%20ingin%20saya%20tanyakan' className='text-white'><i className="fa-solid fa-envelope me-2"></i></Link>
                        <Link href='https://x.com/' className='text-white mr-1'><i class="bi bi-twitter"></i></Link>
                        <Link href='https://www.instagram.com/' className='text-white'><i class="bi bi-instagram"></i></Link>   
                           

                    </div>
                </Col>
                <Col className='footer-col d-flex flex-col'>
                    <p className='text-xl font-bold mb-0'>About</p>
                    <div className='flex flex-col mt-0'>
                        <a href="#" className='text-decoration-none text-white'>FAQ</a>
                        <a href="#" className='text-decoration-none text-white'>Our Company</a>
                        <a href="#" className='text-decoration-none text-white'>Career</a>
                    </div>
                </Col>
                <Col className='footer-col d-flex flex-col'>
                    <p className='text-xl font-bold mb-0'>Businesses</p>
                    <div className='flex flex-col'>
                        <a href="#" className='text-decoration-none text-white'>FAQ</a>
                        <a href="#" className='text-decoration-none text-white'>Our Company</a>
                        <a href="#" className='text-decoration-none text-white'>Career</a>
                    </div>
                </Col>
                <p className='text-white text-center mt-3'>Ⓒ 2022 PT Yo Trans. All rights reserved</p>
            </Row>
            
        </Container>
    </div>
  );
}

export default Footer;