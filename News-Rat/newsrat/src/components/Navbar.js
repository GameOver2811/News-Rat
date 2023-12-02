import React, { Component } from 'react'
import './Navbar.css'

export default class Navbar extends Component {
  render() {
    return (
      <div>
        
            {/* <!-- Navbar --> */}
            <nav className="navbar navbar-expand-lg navbar-light fixed-top mask-custom shadow-0">
                <div className="container">
                <a className="navbar-brand" href="#!"><span style={{color: '#5e9693'}}>News</span><span style={{color: '#00000'}}>Rat</span></a>
                <button className="navbar-toggler" type="button" data-mdb-toggle="collapse"
                    data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#!">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#!">Reference</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#!">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#!">Contact</a>
                    </li>
                    </ul>
                    <ul className="navbar-nav d-flex flex-row">
                        <li className="nav-item me-3 me-lg-0">
                            <a className="nav-link" href="#!">
                            <i className="fab fa-twitter"></i>
                            </a>
                        </li>
                        <li className="nav-item me-3 me-lg-0">
                            <a className="nav-link" href="#!">
                            <i className="fab fa-instagram"></i>
                            </a>
                        </li>
                        <li className="nav-item me-3 me-lg-0">
                            <a className="nav-link" href="#!">
                            <i className="fab fa-facebook"></i>
                            </a>
                        </li>
                        <li className="nav-item me-3 me-lg-0">
                            <a className="nav-link" href="#!">
                            <i className="fab fa-linkedin"></i>
                            </a>
                        </li>
                    </ul>
                </div>
                </div>
            </nav>
            {/* <!-- Navbar --> */}

            {/* <!--Section: Design Block--> */}
            <section>
                {/* <!-- Intro --> */}
                {/* <div id="intro" className="bg-image vh-100" style={{backgroundImage: "url('https://mdbootstrap.com/img/Photos/new-templates/psychologist/img1.jpg')"}}></div> */}
                <div className="mask" style={{backgroundColor: 'rgba(250, 182, 162, 0.15)'}}></div>
                <div/>
                {/* <!-- Intro --> */}
            </section>
            {/* <!--Section: Design Block--> */}
        
      </div>
    )
  }
}
