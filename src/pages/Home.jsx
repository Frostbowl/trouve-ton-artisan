import React from "react";
import { Link } from "react-router-dom";
import "../assets/style/home.css";
import artisans from '../datas.json';

const Home = () =>{

    let topArtisans = artisans.filter(artisan => artisan.top);

    return(
        <div>
        <section className="container card-tuto" >
            <h1>Comment trouver mon artisan</h1>
            <div className="carousel slide container" id="carousel">
                <div className="carousel-inner container">
                    <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    </button>
                    <div className="carousel-item active">
                        <h3>1</h3> 
                        <p>Choisissez votre catégorie</p>
                    </div>
                    <div className="carousel-item ">
                        <h3>2</h3> 
                        <p>Choisissez un artisan</p>
                    </div>
                    <div className="carousel-item ">
                        <h3>3</h3> 
                        <p>Contactez le via le formulaire dédiée</p>
                    </div>
                    <div className="carousel-item ">
                        <h3>4</h3> 
                        <p>Une réponse vous sera apportée sous 48h</p>
                    </div>
                    <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    </button>
                </div>
                <div className="carousel-indicator " >
                    <button type="button" className="active indicator" data-bs-target="#carousel" data-bs-slide-to="0" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" className="indicator" data-bs-target="#carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" className="indicator" data-bs-target="#carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" className="indicator" data-bs-target="#carousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
            </div>
        </section>
        <section className="container contArtisans ">
            <h1>Les artisans du mois</h1>
            <div className="topArtisans">
            {topArtisans.map(artisan =>(
                <Link key={artisan.id} to={`/artisan/${artisan.id}`} className="link">
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
                </Link>
            ))}
            </div>
        </section>
        </div>


    )
}

export default Home;