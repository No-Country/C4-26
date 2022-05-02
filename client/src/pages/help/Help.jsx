/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import '../help/help.css'

const Help = () => {
  return (
    <div>
      <section className="help-title">
        <h1>You'll love it! our simplicity!</h1>
      </section>
      <div className="big-wrapper">
        <div className="showcase-area1">
          <div className="help-container1">
            <div className="help-left">
              <div className="help_titleBig">
                <h1>1.- Future is here,</h1>
                <h1>Start Exploring now.</h1>
              </div>
              <p className="help-text">
                The first step is to register in the application,
                either from its web or mobile version!
              </p>
            </div>

            <div className="help-images">
             <img src={require("../../assets/img/help/rocketProfile.png")} alt="Person Image" className="help-right1"/>
            </div>
         </div>
        </div>

         <div className="showcase-area2">
          <div className="help-container2">
            <div className="help-images">
             <img src={require("../../assets/img/help/searchMen.png")} alt="Person Image" className="help-right1"/>
            </div>
            <div className="help-left">
              <div className="help_titleBig">
                <h1>2.- Find the ideal profile,</h1>
                <h1>For your project or company.</h1>
              </div>
              <p className="help-text">
                Each job description will be quoted according to the requirements it has,
                and will be transformed into a job offer at the time the company accepts the search quote!
              </p>
            </div>
         </div>
        </div>

        <div className="showcase-area3">
          <div className="help-container3">
            <div className="help-left">
              <div className="help_titleBig">
                <h1>3.- Add the profile</h1>
                <h1>To your shopping cart.</h1>
              </div>
              <p className="help-text">
                If you have already selected the ideal profile,
                it is time to add it to the shopping cart!
              </p>
            </div>

            <div className="help-images">
             <img src={require("../../assets/img/help/womanProfileWeb.png")} alt="Person Image" className="help-right3"/>
            </div>
         </div>
        </div>

        <div className="showcase-area4">
          <div className="help-container4">
            <div className="help-images">
             <img src={require("../../assets/img/help/womanProfileWork.png")} alt="Person Image" className="help-right1"/>
            </div>
            <div className="help-left">
              <div className="help_titleBig">
                <h1>4.- Start the ideal project, </h1>
                <h1>With JobsMarkets.</h1>
              </div>
              <p className="help-text">
                JobsMarkets offers qualified profiles
                for your company or project!
              </p>
            </div>
         </div>
        </div>



      </div>
    </div>
    
  )
}

export default Help