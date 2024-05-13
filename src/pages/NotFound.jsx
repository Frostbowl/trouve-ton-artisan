import React from "react";
import { Link } from "react-router-dom";
import '../assets/style/not-found.css';

const NotFound = () => {

    return(
        <div className="notFound">
            <img src="../img/stop-img.png" alt="stop" className="stopImg"/>
            <h1>La page que vous recherchez est actuellement introuvable</h1>
            <h2>Veuillez revenir à <span><Link to='/'>L'accueil</Link></span> </h2>
        </div>
        
    )
}

export default NotFound;