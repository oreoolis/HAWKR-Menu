
import './css/button.css';
import { useNavigate } from 'react-router-dom';

const Button = () => {
    const navigate = useNavigate();

    return (
        <button class="cssbuttons-io" onClick={()=> navigate('/menu')} >
            <span>
                Explore the Menu
            </span>
        </button>

    );
}

export default Button;