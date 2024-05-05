import React from "react";
import artisans from '../../datas.json';

const Fabrication= () => {

    let fabArtisans = artisans.filter(artisan => artisan.category === "Fabrication");

    return(
        <div className="container batiment">
            <h1>Les spécialistes du bâtiment</h1>
            <section className="artisanBat">
                {fabArtisans.map(artisan =>(
                    <div key={artisan.id} className="card batCard">
                        <div className="card-header artisanName">
                            <h2>{artisan.name}</h2>
                        </div>
                        <div className="card-body artisanSpec">
                            <p>Note: {artisan.note} {Array.from({ length: Math.round(parseFloat(artisan.note)) }, (_, index) => <span key={index}>&#9733;</span>)}</p>
                            <p>Spécialité: {artisan.specialty} </p>
                            <p>Localisation: {artisan.location} </p>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    )
}

export default Fabrication;