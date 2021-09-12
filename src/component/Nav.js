import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";
class Nav extends Component {
    render() {
        return (
            <div>
                {/* Begin menu */}
                {/* Navigation*/}
                <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
                    <div className="container px-4 px-lg-5">                        
                        {/* <a className="navbar-brand" href="/"><NavLink to="/home">Category Archives</NavLink></a> */}
                        <a className="navbar-brand" href="/home">Category Archives</a>
                        <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ms-auto my-2 my-lg-0">
                                {/* <li className="nav-item"><a className="nav-link" href="/tin-tuc">Tin tức</a></li>
                                <li className="nav-item"><a className="nav-link" href="/tin-chi-tiet">Tin chi tiết</a></li>
                                <li className="nav-item"><a className="nav-link" href="/lien-he">Liên hệ</a></li>
                                <li className="nav-item"><a className="nav-link" href="#portfolio">Portfolio</a></li> */}
                                
                                <li><NavLink activeClassName="active" to="/home">Home</NavLink></li>
                                <li><NavLink activeClassName="active" to="/tin-tuc">Tin tức</NavLink></li>
                                <li><NavLink activeClassName="active" to="/tin-chi-tiet">Tin chi tiết</NavLink></li>
                                <li><NavLink activeClassName="active" to="/lien-he">Liên hệ</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                {/* End menu */}
            </div>
        );
    }
}

export default Nav;