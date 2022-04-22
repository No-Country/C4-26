/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

import '../CardWorkers/cardWorkers.css'
const CardWorkers = ({name, ubication, profile, description, price}) => {
    return (
    <section className="cw-main-card">             
 	<div className="card-container">
	<img className="round" src={require("../../../assets/img/naranja1.png")} alt="user" />
	<h2 className="cw-name-profile">{name}</h2>
    <h4 className="cw-name-country">📍 {ubication}</h4>
    <h4 className="cw-title-profile">{profile}</h4>
	
	<p className="cw-description-profile">{description}</p>
	<p className="cw-price">$ {price}</p>
    <div className="cw-buttons">
		<button className="primary">
			Add Service
		</button>
	</div>
	<section className="cw-skills">
		<ul className="social-icons">

      <li className="cw-list-icons"><a href="#"><i className="fa fa-instagram"></i></a></li>
      <li className="cw-list-icons"><a href="#"><i className="fa fa-twitter"></i></a></li>
      <li className="cw-list-icons"><a href="#"><i className="fa fa-linkedin"></i></a></li>
      <li className="cw-list-icons"><a href="#"><i className="fa fa-github"></i></a></li>
    </ul>
	</section>
    </div>




            

            

</section>
  )
}

export default CardWorkers