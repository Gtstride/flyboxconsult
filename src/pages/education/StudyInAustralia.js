import React from 'react'
// import { Link } from 'react-router-dom'
import AustraliaEnquiryForm from './forms/AustraliaEnquiryForm'


const StudyInAustralia = () => {

  return (
    <>
      <section className="banner-area relative study-australia-home-banner blog-home-banner" id="home">
        <div className="overlay overlay-bg" />
        <div className="container">
          <div className="row d-flex align-items-center justify-content-center">
            <div className="about-content blog-header-content col-lg-12">
              <h1 className="text-white">Study In Australia</h1>
              <p className="text-white link-nav">
                <a href="/" style={{textDecoration: "none", color: "inherit"}}>Home </a>{" "}
                <span className="lnr lnr-arrow-right" />{" "}
                <a href="/study_in_australia" style={{textDecoration: "none", color: "inherit"}}> Study In Australia</a>
              </p>

              <p className="text-white">
                Australia is a delightful country and they will definitely appreciate an intelligent <br />student like you.
                kindly provide   the requested information and lets get started.</p>
              <AustraliaEnquiryForm height="3em" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default StudyInAustralia