import React from 'react'

const HomeSection = () => {
  return (
    <div>
      <div className="hs-container">
          <h2 className="mh-subtitle">Various kind of service for you</h2>
          <article className="boxInfo">
            <section className="mh-review">
              <div className="mh-box-container">
                <div className="mh-box">
                  <i className="fas fa-quote-right"></i>
                  <div className="user-commets">
                  <img
                      className="mh-img"
                      src={require("../../assets/img/icons8-idea-64.png")}
                      alt=""
                    />
                    <h3 className="mh-coment-name">Support</h3>
                    <div className="mh-comment">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="mh-review">
              <div className="mh-box-container">
                <div className="mh-box">
                  <i className="fas fa-quote-right"></i>
                  <div className="user-commets">
                  <img
                      className="mh-img-sale"
                      src={require("../../assets/img/icons8-sale-47.png")}
                      alt=""
                    />
                    <h3 className="mh-coment-name">Sale</h3>
                    <div className="mh-comment">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="mh-review">
              <div className="mh-box-container">
                <div className="mh-box">
                  <i className="fas fa-quote-right"></i>
                  <div className="user-commets">
                  <img
                      className="mh-img-expe"
                      src={require("../../assets/img/icons8-rocket-64.png")}
                      alt=""
                    />
                    <h3 className="mh-coment-name">Experience</h3>
                    <div className="mh-comment">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </article>
      </div>



      


    </div>
  )
}

export default HomeSection