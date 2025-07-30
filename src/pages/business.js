import './css/business.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// IMAGE PATHS
const introImg1="https://hawkr-menuapp-bucket.s3.ap-southeast-1.amazonaws.com/images/7.png";
const introImg2="https://hawkr-menuapp-bucket.s3.ap-southeast-1.amazonaws.com/images/10.png";


const Business = () => {
    return (
        <div className="business">
            <section className="about">
                <h1><b style={{ color: "#4CDE73" }}>Who</b> are we?</h1>
                <hr />
                <Container className="information">
                    <Row>
                        <Col><img className = "sideImages" src = {introImg1}/></Col>
                        <Col className = "textInfo">
                            <p>
                                <b style={{ color: "#4CDE73" }}>HAWKR</b> is a local, family-owned business focused on
                                sharing their love for food - specifically Asian-fusion
                                cuisine and Singaporean food.
                            </p>
                            <br></br>
                            <p>
                                Our family has spent over 10 years living in Singapore,
                                and has shared our
                                love for Singaporean food
                                since our return to the Philippines in 2011.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="ourName">
                <h1>Our <b style={{ color: "#4CDE73" }}>Name</b></h1>
                <hr />
                <Container className="information">
                    <Row>
                        <Col><img className = "sideImages" src = {introImg2}/></Col>
                        <Col className = "textInfo">
                            <p>
                                The name <b style={{ color: "#4CDE73" }}>HAWKR</b> is taken from the term
                                “hawker center”, which are common outdoor food
                                courts in Singapore.
                            </p>
                            <br></br>
                            <p>
                                These vibrant food courts are where diverse cuisines
                                converge. Our goal is just that - to bring the best of
                                Singaporean street food right to your table, creating
                                a one-stop destination for all your cravings.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="mission">
                <h1>Mission</h1>
                <p>To introduce Singaporean flavors to the Filipino dining table.</p>

                <h1>Vision</h1>
                <p>To become your one-stop destination for all your Singaporean food cravings.</p>
            </section>
        </div>
    )
}

export default Business;