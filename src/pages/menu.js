import { Worker } from "@react-pdf-viewer/core";
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import './css/menu.css';

// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';


const menuURL = process.env.REACT_APP_MENU_URL;

const Menu = () => {
    const openMenu = () => {
        window.open(menuURL, '_blank')
    }
    return (
        <div className="menuPage">
            <section className='menuTitle'>
                <h1>Explore Our Menu</h1>
                <hr />
            </section>
            <div className="pdfViewer">
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                    <Viewer fileUrl={menuURL} />
                </Worker>

            </div>
            <section className="button">
                <button className="cssbuttons-io" onClick={openMenu}>
                    <span>
                        Download the menu!
                    </span>
                </button>
            </section>
        </div>
    )
}

export default Menu;