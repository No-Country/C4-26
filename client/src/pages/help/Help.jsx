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
        <div className="showcase-area">
          <div className="help-container">
            <div className="help-left">
              <div className="big-title">
                <h1>1.- Future is here,</h1>
                <h1>Start Exploring now.</h1>
              </div>
              <p className="help-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Delectus eius distinctio odit, magni magnam qui ex perferendis
                vitae!
              </p>
            </div>

            <div className="help-images">
             <img src={require("../../assets/img/help/rocketProfile.png")} alt="Person Image" className="help-right1"/>
            </div>
         </div>
        </div>

         <div className="showcase-area">
          <div className="help-container">
            <div className="help-images">
             <img src={require("../../assets/img/help/searchMen.png")} alt="Person Image" className="help-right1"/>
            </div>
            <div className="help-left">
              <div className="big-title">
                <h1>2.- Find the ideal profile,</h1>
                <h1>For your project or company.</h1>
              </div>
              <p className="help-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Delectus eius distinctio odit, magni magnam qui ex perferendis
                vitae!
              </p>
            </div>
         </div>
        </div>

        <div className="showcase-area">
          <div className="help-container">
            <div className="help-left">
              <div className="big-title">
                <h1>3.- Add the profile</h1>
                <h1>To your shopping cart.</h1>
              </div>
              <p className="help-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Delectus eius distinctio odit, magni magnam qui ex perferendis
                vitae!
              </p>
            </div>

            <div className="help-images">
             <img src={require("../../assets/img/help/womanProfileWeb.png")} alt="Person Image" className="help-right3"/>
            </div>
         </div>
        </div>

        <div className="showcase-area">
          <div className="help-container">
            <div className="help-images">
             <img src={require("../../assets/img/help/womanProfileWork.png")} alt="Person Image" className="help-right1"/>
            </div>
            <div className="help-left">
              <div className="big-title">
                <h1>4.- Start the ideal project, </h1>
                <h1>With JobsMarkets.</h1>
              </div>
              <p className="help-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Delectus eius distinctio odit, magni magnam qui ex perferendis
                vitae!
              </p>
            </div>
         </div>
        </div>



      </div>
    </div>
    
  )
}

export default Help