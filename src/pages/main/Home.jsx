import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import artisans from '../../datas.json';

const Home = () =>{

    let topArtisans = artisans.filter(artisan => artisan.top);

    return(
        <div>
        <section className="container card-tuto">
            <h1>Comment trouver mon artisan</h1>
            <div className="tuto">
                <div className="card tutorial">
                    <div className="card-header">
                        1
                    </div>
                    <div className="card-body">
                        <h2>Choisissez votre catégorie</h2>
                    </div>
                </div>
                <div className="card tutorial">
                    <div className="card-header">
                        2
                    </div>
                    <div className="card-body">
                        <h2>Choisissez un artisan</h2>
                    </div>
                </div>
                <div className="card tutorial">
                    <div className="card-header">
                        3
                    </div>
                    <div className="card-body">
                        <h2>Contactez le via le formulaire dédié</h2>
                    </div>
                </div>
                <div className="card tutorial">
                    <div className="card-header">
                        4
                    </div>
                    <div className="card-body">
                        <h2>Une réponse vous sera apportée sous 48h</h2>
                    </div>
                </div>
            </div>
        </section>
        <section className="container contArtisans ">
            <h1>Les artisans du mois</h1>
            <div className="topArtisans">
            {topArtisans.map(artisan =>(
                <div key={artisan.id}>
                    <div className="card topCard">
                        <div className="card-header">
                            <h2>{artisan.name}</h2>
                        </div>
                        <div className="card-body">
                            <p>Note : {artisan.note} {Array.from({ length: Math.round(parseFloat(artisan.note)) }, (_, index) => <span key={index}>&#9733;</span>)}</p>
                            <p>Spécialité : {artisan.specialty}</p>
                            <p>Localisation : {artisan.location}</p>
                        </div>
                    </div>
                </div>
            ))}
            </div>
        </section>
        </div>


    )
}

export default Home;