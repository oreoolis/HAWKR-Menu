import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
    const redirectMain = () => {
        window.open('https://www.facebook.com/delreyskitchen', '_blank');
    }
    return (
        <footer>
            <Container fluid>
                <Row className="bg-success text-white">
                    <Col className = "label" onClick={redirectMain}>
                        <b style={{cursor: "pointer", fontFamily: 'Inter'}}>© 2025 Cafe Del Rey</b>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;