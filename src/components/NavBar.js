import React from 'react'
import './../css/style.css'
import { FaUserAlt } from "react-icons/fa";
import {Link} from 'react-router-dom'
function NavBar() {
    return (
       <div>
  <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar  ftco-navbar-light" id="ftco-navbar">
    <div className="container">
      <a className="navbar-brand" href="acceuil.html" > My House<br /><small><span><img className="logo1" alt="img" src="images/coffee-cup.png" width="20px" height="20px" /></span> Café &amp; Resterant <span><img className="logo1" src="images/cc1.png" width="20px" height="20px" /></span></small></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
        <span  className="oi oi-menu" /> Menu
      </button>
      <div className="collapse navbar-collapse" id="ftco-nav">
        <ul className="navbar-nav ml-auto" style={{padding:"0px 100px"}}>
          <li className="nav-item active"><Link  to="/" className="nav-link" style={{fontSize:"15px"}}><b>Acceuil</b></Link></li>
          <li className="nav-item">< Link to="/Menu" className="nav-link"style={{fontSize:"15px"}}><b>Menu</b></Link></li>
          <li className="nav-item">< Link to="/Contact" className="nav-link"style={{fontSize:"15px"}}><b>Contact</b></Link></li>
          <li className="nav-item"><Link to="/" className="nav-link"style={{fontSize:"15px"}}><b>Livraison</b></Link></li>
          
        </ul>
        
      </div><div className="nav-item"><span><Link to="/Admin" className="nav-link"style={{color:"white",marginRight:"-50px",fontSize:"15px"}}><FaUserAlt style={{ marginTop:"-5px",marginRight:"10px"}}/><b>Admin</b></Link></span></div>
    </div>
  </nav>
</div>

    )
}

export default NavBar
