import React from 'react'
import { CartWidget } from '../CartWidget/CartWidget'

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light px-5">
            <a className="navbar-brand" href="#">
                Panda CBD Store
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <CartWidget />
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            ¿Quienes Somos?
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            Productos
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            Servicios
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            Contacto
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
