import './css/menu.css';

// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

const menuURL = "https://hawkr-menuapp-bucket.s3.ap-southeast-1.amazonaws.com/documents/menu.pdf";

const Menu = () => {
    // const openMenu = () => {
    //     window.open(menuURL, '_blank')
    // }
    return (
        <div className="menuPage">
            <section className='menuTitle'>
                <h1>Explore Our Menu</h1>
                <hr />
            </section>
            <div className="pdfViewer">
                <iframe src = {menuURL}></iframe>
            </div>
        </div>
    )
}

export default Menu;