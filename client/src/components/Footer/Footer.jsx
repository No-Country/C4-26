import React from 'react'

const Footer = () => {
  return (
     <div className="footer">
      <img
        className="logo"
        src={require("../../assets/img/logom.jpg")} 
        alt="logo"
      />
      <p>© Copyright 2022 - JobMarkets. All rights reserved</p>
    </div>
  )
}

export default Footer