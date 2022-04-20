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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          </p>
          <p
          className="mh-txt2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>

    </div>
    
  )
}

export default MainHome