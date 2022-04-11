/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

import '../CardWorkers/cardWorkers.css'
const CardWorkers = () => {
    return (
    <section className="cw-main-card">
    <div className="card-container">
	<span className="pro">PRO</span>
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
    {/*<button className="primary ghost">
        Add Service
    </button>*/}
	</div>
	<div className="skills">
		<h6>Skills</h6>
		<ul clasName="cw-list-skills">
			<li>UI / UX</li>
			<li>Front End Development</li>
			<li>HTML</li>
			<li>CSS</li>
			<li>JavaScript</li>
			<li>React</li>
			<li>Node</li>
		</ul>
	</div>
    </div>
            
    <div className="card-container">
	<span className="pro">PRO</span>
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
    {/*<button className="primary ghost">
        Add Service
    </button>*/}
	</div>
	<div className="skills">
		<h6>Skills</h6>
		<ul clasName="cw-list-skills">
			<li>UI / UX</li>
			<li>Front End Development</li>
			<li>HTML</li>
			<li>CSS</li>
			<li>JavaScript</li>
			<li>React</li>
			<li>Node</li>
		</ul>
	</div>
    </div>
            
 <div className="card-container">
	<span className="pro">PRO</span>
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
    {/*<button className="primary ghost">
        Add Service
    </button>*/}
	</div>
	<div className="cw-skills">
		<h6>Skills</h6>
		<ul className="social-icons">

      <li className="cw-list-icons"><a href="#"><i className="fa fa-instagram"></i></a></li>
      <li className="cw-list-icons"><a href="#"><i className="fa fa-twitter"></i></a></li>
      <li className="cw-list-icons"><a href="#"><i className="fa fa-linkedin"></i></a></li>
      <li className="cw-list-icons"><a href="#"><i className="fa fa-codepen"></i></a></li>
    </ul>

	</div>
    </div>




            

            

</section>
  )
}

export default CardWorkers