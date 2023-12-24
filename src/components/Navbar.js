import React, { useEffect } from 'react'
import { Link, useLocation } from "react-router-dom";
import Cookies from 'js-cookie';

function Navbar({ isLoggedIn, handleLogout }) {

    useEffect(() => {
        const theme = Cookies.get("theme");
        if (theme === "dark") {
            document.body.dataset.bsTheme = "dark"
        }
    }, [])


    let location = useLocation();
    function toggleTheme() {
        let body = document.body;
        body.dataset.bsTheme =
            body.dataset.bsTheme === "light" ? "dark" : "light";
        Cookies.set("theme", body.dataset.bsTheme)
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">iNoteBook</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link`} aria-current="page"><i onClick={toggleTheme} className="fa-solid fa-circle-half-stroke"></i></Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                            </li>
                            {!isLoggedIn ? (
                                <>
                                    <li className="nav-item">
                                        <Link className={`nav-link ${location.pathname === "/login" ? "active" : ""}`} to="/login" role="button">Login</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className={`nav-link ${location.pathname === "/signup" ? "active" : ""}`} to="/signup" role="button">Sign Up</Link>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li className="nav-item">
                                        <Link className={`nav-link ${location.pathname === "/addnote" ? "active" : ""}`} to="/addnote">Add Note</Link>
                                    </li>
                                    <li className="nav-item">
                                        <button onClick={handleLogout} type="button" className="btn btn-danger">Logout</button>
                                    </li>
                                </>
                            )}

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;