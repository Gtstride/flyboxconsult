import React from 'react'
import NavBar from '../NavBar/NavBar'
import * as Icon from 'react-bootstrap-icons'

const Header = () => {
  return (
    <div>
      <header id="header">
        <div className="header-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-sm-6 col-8 header-top-left no-padding">
                <ul>
                  <li><a href="https://www.facebook.com/TravelwithFlyBox" target="_blank" rel="noreferrer"><Icon.Facebook size={20} /></a></li>
                  <li><a href="https://www.instagram.com/fly.boxconsult/" target="_blank" rel="noreferrer"><Icon.Instagram size={20} /></a></li>
                  <li><a href="https://wa.link/x17s0b" target="_blank" rel="noreferrer"><Icon.Whatsapp size={20} /></a></li>
                </ul>
              </div>

              <div className="col-lg-6 col-sm-6 col-4 header-top-right no-padding">
                <a href="tel:+234 705 7586 835">
                  <span className="lnr lnr-phone-handset" />{" "}
                  <span className="text">+234 705 7586 835</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <NavBar />
      </header>
    </div>
  )
}

export default Header