import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MapView from "../components/maps";
import './css/contact.css';

const Contact = () => {

    // open links

    const sendEmail = (subject, body) => {
        const email = 'delreyfoodgroup@gmail.com';
        const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(mailtoUrl);
    }

    const openReview = () => {
        window.open('https://www.google.com/maps/place/Cafe+Del+Rey/@10.3502708,123.9462777,17z/data=!4m16!1m9!3m8!1s0x33a9986a41f94b6d:0x1d5850f90ba923b3!2sCafe+Del+Rey!8m2!3d10.3502655!4d123.9488526!9m1!1b1!16s%2Fg%2F11fyzbhhhn!3m5!1s0x33a9986a41f94b6d:0x1d5850f90ba923b3!8m2!3d10.3502655!4d123.9488526!16s%2Fg%2F11fyzbhhhn?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D', '_blank'); // Opens in a new tab
    };

    const openFacebook = () => {
        window.open("https://www.facebook.com/hawkr.ph", '_blank')
    };

    const openInstagram = () => {
        window.open("https://www.instagram.com/hawkr.ph ", '_blank')
    };

    return (
        <div className="contactPage">
            <section className="title">
                <h1>Our Flagship Restaurant</h1>
                <hr />
            </section>

            <section className="addressInfo">
                <Container className="information">
                    <Row>
                        <Col>
                            <MapView />
                        </Col>
                        <Col>
                            <Container className="inner">
                                <h3>Cafe Del Rey</h3>
                                <p>Insular Square Mall, Mandaue, 6014 Cebu, Philippines</p>
                            </Container>
                            <br></br>
                            <Container className="inner">
                                <h3>Operating Hours:</h3>
                                <p>Open Daily</p>
                                <p>8:00am - 9:00pm</p>
                            </Container>
                            <Container className="inner">
                                <h3>Email: </h3>
                                <p>delreyfoodgroup@gmail.com</p>
                            </Container>
                            <Container className="inner">
                                <h3>Contact: </h3>
                                <p>+63 0960 469 3114 / +63 0908 663 8708</p>
                            </Container>
                            <ul className="wrapper">
                                <li className="icon facebook" onClick={openFacebook}>
                                    <span className="tooltip">Facebook</span>
                                    <svg
                                        viewBox="0 0 320 512"
                                        height="1.2em"
                                        fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                                        ></path>
                                    </svg>
                                </li>
                                <li className="icon instagram" onClick={openInstagram}>
                                    <span className="tooltip">Instagram</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        height="1.2em"
                                        fill="currentColor"
                                        class="bi bi-instagram"
                                        viewBox="0 0 16 16"
                                    >
                                        <path
                                            d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                                        ></path>
                                    </svg>
                                </li>
                                <li className="icon email" onClick={sendEmail}>
                                    <span className="tooltip">Email</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                                        <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
                                    </svg>
                                </li>
                                <li className="icon review" onClick={openReview}>
                                    <span className="tooltip">Reviews</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                                        <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z" />
                                    </svg>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
}

export default Contact;