import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown }  from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.css";
import * as bootstrap from 'bootstrap';

function NavBar() {
    return (
        <div className="Item">
            <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">MudArt</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Productos</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Servicios</a>
                    </li>
                </ul>
                </div>
                <FontAwesomeIcon icon={faCartArrowDown}/>
            </div>
            </nav>
        </div>
    );
    }
    
    export default NavBar;