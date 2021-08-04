import React from 'react'

const Slider = () => {
  return (
    <div>
      <section className="banner-area relative" id="home">
        <div className="overlay overlay-bg" />
        <div className="container">
          <div className="row fullscreen d-flex align-items-center justify-content-between">
            <div className="banner-content col-lg-9 col-md-12">
              <h1 className="text-uppercase">
                Get a better education for a better world
              </h1>
              <p className="pt-10 pb-10 text-white">
                <b className="text-white">
                  There have never being any time better than now, to take the decision to give your family that very dream life you have always dreamt of.  Let us help you achieve those dreams and make them a reality.
                </b>
              </p>
              <a href="/contact-us" className="primary-btn text-uppercase">
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="feature-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="single-feature">
                <div className="title">
                  <h4>Enquire About Studying</h4>
                </div>
                <div className="desc-wrap">
                  <p>
                    Usage of the Internet is becoming more common due to rapid
                    advancement of technology.
                  </p>
                  <a href onClick={(e) => { e.preventDefault() }}>Get More Information</a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="single-feature">
                <div className="title">
                  <h4>Enquire About Work</h4>
                </div>
                <div className="desc-wrap">
                  <p>
                    For many of us, our very first experience of learning about the
                    celestial bodies begins when we saw our first.
                  </p>
                  <a href onClick={(e) => { e.preventDefault() }}>Get More Information</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Slider
