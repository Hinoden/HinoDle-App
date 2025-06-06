import '../styles/Home.css';
import logo from '../assets/Wordle_Logo.svg.png';
import {useNavigate} from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    const handlePlayClick = () => {
        navigate('/Game');
    };
    return (
        <div className='home-container'>
            <img src={logo} alt="Wordle Icon" className='home-logo' />
            <h1 className='home-title'>Hinodle</h1>
            <p className='home-description'>Get 6 chances to guess a 5-letter word.</p>
            <button className='home-button' onClick={handlePlayClick}>Play</button>
        </div>
    );
}

export default Home;