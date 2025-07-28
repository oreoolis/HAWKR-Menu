import { Worker } from "@react-pdf-viewer/core";
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import './css/menu.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const menuURL = process.env.REACT_APP_MENU_URL;

const Menu = () => {
    const openMenu = () => {
        window.open(menuURL, '_blank')
    }
    return (
        <div className="menuPage">
            <section className='menuTitle'>
                <Container>
                    <Row className="w-100 g-1">
                        <Col xs={12} lg={8}>
                            <h1>Explore Our Menu</h1>
                        </Col>
                        <Col xs={12} lg={4}>
                            <section className="button">
                                <button className="cssbuttons-io" onClick={openMenu}>
                                    <span>
                                        Download the menu!
                                    </span>
                                </button>
                            </section>
                        </Col>
                    </Row>
                </Container>
                <hr />
            </section>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                <div className="pdfViewer">
                    <Viewer fileUrl={menuURL} />
                </div>
            </Worker>
        </div>
    )
}

export default Menu;