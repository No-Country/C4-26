/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

import '../CardWorkers/cardWorkers.css'
const CardWorkers = () => {
    return (
    <section className="cw-main-card">             
 	<div className="card-container">
	<img className="round" src={require("../../../assets/img/naranja1.png")} alt="user" />
	<h2 className="cw-name-profile">Diana Smith</h2>
    <h4 className="cw-name-country">📍 New York</h4>
    <h4 className="cw-title-profile">UX Product Design</h4>
	
	<p className="cw-description-profile">User interface designer and <br/> front-end developer</p>
	<p className="cw-price">$299.99</p>
    <div className="cw-buttons">
		<button className="primary">
			Add Service
		</button>
    {/*<button className="primary-ghost">
        Add Service
    </button>*/}
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