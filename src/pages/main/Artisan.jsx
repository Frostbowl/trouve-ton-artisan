import React from "react";
import artisans from '../../datas.json';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Artisan.css";

const Artisan = () => {

    let { id } = useParams();
    let artisan = artisans.find(artisan => artisan.id === id);

    return(  
        <div> 
            <section className="container page">
                <h1>{artisan.name}</h1>
                <h2>{artisan.note}{Array.from({ length: Math.round(parseFloat(artisan.note)) }, (_, index) => <span key={index}>&#9733;</span>)}</h2>
                <h2>{artisan.location}</h2>
                <h2>{artisan.specialty}</h2>
                <div className="card about">
                    <div className="card-header">
                        à propos
                    </div>
                    <div className="card-body">
                        {artisan.about}
                    </div>
                </div>
                <h3>Site web: <Link to={artisan.website} target="_blank">{artisan.website}</Link></h3>
            </section>
        </div>
    )
}

export default Artisan;