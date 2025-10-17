import './Homepagina.css';
import logo from '../../assets/logo-white.png'

function Homepagina() {
    return (
        <>
            <div className="page-container">
                <img src={logo} alt="Company logo"/>
                <h1>Bij blogventure geloven we in de kracht van woorden*</h1>
            </div>
        </>
    );
}

export default Homepagina;