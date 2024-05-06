import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {

    return(
        <div>
            <h1>La page recherchée est actuellement introuvable</h1>
            <Link to="/"><h2>Retour à l'accueil</h2></Link>
        </div>
        
    )
}

export default NotFound;