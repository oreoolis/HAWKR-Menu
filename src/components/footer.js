import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
    return (
        <footer>
            <Container fluid>
                <Row className="bg-success text-white">
                    <Col>
                        <p>@2025 Cafe Del Rey</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;