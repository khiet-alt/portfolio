import React from 'react'
// React font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard, faBars, faEnvelopeOpen, faHome, faProjectDiagram } from '@fortawesome/free-solid-svg-icons'
import '../styles/navbar.scss'

// shortcut: rafce
const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img className="logo" src="logo192.png" alt="logo..." />
                </a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" 
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                    aria-expanded="false" aria-label="Toggle navigation">
                        <FontAwesomeIcon icon={faBars} style={{color: 'black'}} />
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home
                                <FontAwesomeIcon icon={faHome} className="icon" />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About
                                <FontAwesomeIcon icon={faAddressCard} className="icon" />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Projects
                                <FontAwesomeIcon icon={faProjectDiagram} className="icon" />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact
                                <FontAwesomeIcon icon={faEnvelopeOpen} className="icon" />
                            </a>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    )
}

export default NavBar
