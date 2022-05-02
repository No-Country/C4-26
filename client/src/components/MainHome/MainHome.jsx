import React from 'react'

const MainHome = () => {
  return (
    <div className="mh-main">
        <div className="mh-container">
        
        <div className="mh-img">
          <img className="mh-img-mh" src={require("../../assets/img/girl-chatting-people.png")} alt="" />
        </div>
        <div className="mh-text">
          <p
          className="mh-txt">
            Our value proposition
          </p>
          <p
          className="mh-txt2">
            We provide an effective recruitment and selection service for IT personnel: companies can create job offers according to their needs, optimizing the process from the first step thanks to the automated descriptions of the set to cover.
          </p>
        </div>
      </div>

    </div>
    
  )
}

export default MainHome