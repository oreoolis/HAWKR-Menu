import './css/home.css';
import Button from '../components/button';


const Home = () => {
    return (
        <div>
            <section>
                <div className="title">
                    <h1>A taste of <b style={{ color: '#F2545B' }}>Singapore,</b></h1>
                    <h3>right here in Cebu.</h3>
                    <Button/>
                </div>

            </section>
        </div>
    )
}

export default Home;