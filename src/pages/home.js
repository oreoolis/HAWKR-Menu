import './css/home.css';
import Button from '../components/button';


const Home = () => {
    return (
        <div>
            <section className = "home">
                <div className="titleName">
                    <h1>A taste of <b style={{ color: ' #e43840ff', fontFamily: '"Marcellus SC", serif' }}>Singapore,</b></h1>
                    <h3>right here in Cebu.</h3>
                    <br></br>
                    <Button/>
                </div>
            </section>
        </div>
    )
}

export default Home;