import './css/home.css';
import Button from '../components/button';


const Home = () => {
    return (
        <div>
            <section className = "home">
                <div className="title">
                    <h1>A taste of <b style={{ color: '#F2545B', fontFamily: '"Marcellus SC", serif' }}>Singapore,</b></h1>
                    <h3>right here in Cebu.</h3>
                    <Button/>
                </div>
            </section>
        </div>
    )
}

export default Home;