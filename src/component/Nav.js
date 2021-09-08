import React, { Component } from 'react';

class Nav extends Component {
    render() {
        return (
            <div>
                {/* Begin menu */}
                {/* Navigation*/}
                <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
                    <div className="container px-4 px-lg-5">
                    <a className="navbar-brand" href="index.html">Category Archives</a>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ms-auto my-2 my-lg-0">
                        <li className="nav-item"><a className="nav-link" href="tintuc.html">Tin tức</a></li>
                        <li className="nav-item"><a className="nav-link" href="chitiet.html">Tin chi tiết</a></li>
                        <li className="nav-item"><a className="nav-link" href="lienhe.html">Liên hệ</a></li>
                        <li className="nav-item"><a className="nav-link" href="#portfolio">Portfolio</a></li>
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