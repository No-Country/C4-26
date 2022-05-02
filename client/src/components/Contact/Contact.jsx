/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'



const Contact = () => {
  return (
      <div className="contact-main">
        <section className="contact-title">
            <h1>Contact</h1>
          </section>
          <div className="contact-wrapper">
              <div className="showcase-area">
                <div className="contact-container">
            <div className="contact-center">
              <p className="contact-text">
                We are suitable professionals in the technological area
                and we know the difficulty of finding quality IT talent,
                that's why we created the path towards it.!
              </p>
              <input className="contact-input" type="text" name="email" placeholder="Enter Your Name"></input>
                          
            </div>
            <div className="contact-images">
             <img src={require("../../assets/img/contact/contactPeople.png")} alt="Person Image" className="contact-right1"/>
            </div>

         </div>
        </div>

          </div>
      </div>
  )
}

export default Contact