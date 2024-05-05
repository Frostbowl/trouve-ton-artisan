import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
    return(
    <nav class="navbar navbar-expand-lg ">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/"><img className="logo" src="../img/logo.png" alt="Trouve ton artisant"/></Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse headBar" id="navbarSupportedContent">
            <div className="navigation">
              <Link class="nav-link" aria-current="page" to="/batiment">Bâtiment</Link>                 
              <Link class="nav-link " aria-current="page" to="/service">Services</Link>      
              <Link class="nav-link " aria-current="page" to="/fabrication">Fabrication</Link>
              <Link class="nav-link " aria-current="page" to="/alimentation">Alimentation</Link>
            </div>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Rechercher" aria-label="Search"/>
              <button class=" " type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    )
}

export default Header;