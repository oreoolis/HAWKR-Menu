import './css/menu.css';

// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';


const menuURL = process.env.REACT_APP_MENU_URL;

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