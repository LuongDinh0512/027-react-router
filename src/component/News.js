import React, { Component } from 'react';

class News extends Component {
    render() {
        return (
            <div>                
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
                {/* Masthead*/}
                <header className="masthead tintuc">
                    <div className="container px-4 px-lg-5 h-100">
                    <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
                        <div className="col-lg-8 align-self-end">
                        <h1 className="text-white font-weight-bold">Danh sách</h1>                    
                        </div>
                        <div className="col-lg-8 align-self-baseline">
                        </div>
                    </div>
                    </div>
                </header>
                {/* Begin Tin tức */}
                <div className="container">
                    <div className="row mt-3">
                    <div className="col-4">
                        <div className="card">
                        <div className="card-body">
                            <a href="chitiet.html"><img src="https://lavenderstudio.com.vn/wp-content/uploads/2021/06/bo-chup-hinh-san-pham-1-800x400.jpg" alt="" className="img-fluid" /></a>
                            <blockquote className="blockquote">                            
                            <p><a href="chitiet.html">Dịch vụ chụp hình sản phẩm chuyên nghiệp chất lượng nhất tại Việt Nam</a></p>
                            <footer className="card-blockquote">Edit <cite title="Source title">by LuongDinh</cite></footer>
                            </blockquote>
                        </div>
                        </div>
                        <hr />
                    </div>
                    <div className="col-4">
                        <div className="card-deck">
                        <div className="card">
                            <a href="chitiet.html"><img className="card-img-top" src="https://lavenderstudio.com.vn/wp-content/uploads/2021/05/dich-vu-chup-hinh-san-pham-2.png" alt="img-fluid" /></a>
                            <div className="card-body">
                            <h4 className="card-title"><a href="chitiet.html">Crayola Việt Nam</a></h4>
                            <p className="card-text">Tiết lộ địa điểm chụp ảnh profile nữ chất lượng nhất</p>
                            </div>
                        </div>
                        <div className="card">
                            <a href="chitiet.html"><img className="card-img-top" src="https://lavenderstudio.com.vn/wp-content/uploads/2021/05/chup-hinh-san-pham-dep1-1024x683.jpg" alt="img-fluid" /></a>
                            <div className="card-body">
                            <h4 className="card-title"><a href="chitiet.html">Category Archives: Quay Chụp Quảng Cáo</a></h4>
                            <p className="card-text">Dịch vụ quay phim chụp hình quảng cáo doanh nghiệp- cá nhân – tổ chức chuyên nghiệp và uy tín hàng đầu tại Việt Nam</p>
                            </div>
                        </div>
                        </div>
                        <hr />
                    </div>
                    <div className="col-4">
                        <div className="card-deck">
                        <div className="card">
                            <a href="chitiet.html"><img className="card-img-top" src="https://lavenderstudio.com.vn/wp-content/uploads/2021/05/dich-vu-chup-hinh-san-pham-2.png" alt="img-fluid" /></a>
                            <div className="card-body">
                            <h4 className="card-title"><a href="chitiet.html">Crayola Việt Nam</a></h4>
                            <p className="card-text">Tiết lộ địa điểm chụp ảnh profile nữ chất lượng nhất</p>
                            </div>
                        </div>
                        <div className="card">
                            <a href="chitiet.html"><img className="card-img-top" src="https://lavenderstudio.com.vn/wp-content/uploads/2021/05/chup-hinh-san-pham-dep1-1024x683.jpg" alt="img-fluid" /></a>
                            <div className="card-body">
                            <h4 className="card-title"><a href="chitiet.html">Category Archives: Quay Chụp Quảng Cáo</a></h4>
                            <p className="card-text">Dịch vụ quay phim chụp hình quảng cáo doanh nghiệp- cá nhân – tổ chức chuyên nghiệp và uy tín hàng đầu tại Việt Nam</p>
                            </div>
                        </div>
                        </div>
                        <hr />
                    </div>            
                    </div>
                </div>
                {/* End Tin tức */}                   
            </div>
        );
    }
}

export default News;