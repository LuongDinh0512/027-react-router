import React, { Component } from 'react';

class NewsDetail extends Component {
    render() {
        return (
            <div>
                {/* Navigation*/}
                {/* <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
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
                </nav> */}
                {/* Masthead*/}
                <header className="masthead tintuc">
                    <div className="container px-4 px-lg-5 h-100">
                    <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
                        <div className="col-lg-8 align-self-end">
                        <h1 className="text-white font-weight-bold">Chi tiết</h1>                    
                        </div>
                        <div className="col-lg-8 align-self-baseline">
                        </div>
                    </div>
                    </div>
                </header>
                {/* Begin Tin tức chi tiết */}
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                    <h1 className="display-3">Lavender Advertising Việt Nam</h1>
                    <p className="lead">Category Archives: Quay Chụp Quảng Cáo</p>
                    <hr className="my-2" />            
                    <p className="lead">
                        <a className="btn btn-primary btn-lg" href="Jumbo action link" role="button">More info</a>
                    </p>
                    </div>
                </div>
                <div className="container">
                    <div className="row mt-3">
                    <div className="col-12">
                        <div className="card">
                        <div className="card-body">
                            <img src="https://lavenderstudio.com.vn/wp-content/uploads/2021/06/bo-chup-hinh-san-pham-1-800x400.jpg" alt="" className="img-fluid" />
                            <blockquote className="blockquote">
                            <h5>Dịch vụ chụp hình sản phẩm chuyên nghiệp chất lượng nhất tại Việt Nam</h5>
                            <p>Chụp ảnh profile cá nhân là một trong những việc làm quan trọng cho doanh nghiệp, công ty của bạn. Nhưng bí quyết để có một bộ ảnh profile đẹp, đạt hiệu quả cao thì không phải ai cũng biết. Bài viết dưới đây, Lavender Studio sẽ bật mí đến bạn các bước cần chuẩn bị để có một bộ ảnh profile cá nhân đẹp. Hãy cùng theo dõi nhé! Các bước cần chuẩn bị để có một bộ ảnh profile cá nhân đẹp Nếu như chưa có nhiều kinh nghiệm trong việc chụp ảnh profile cá nhân tại studio. […]</p>
                            <footer className="card-blockquote">Edit <cite title="Source title">by LuongDinh</cite></footer>
                            </blockquote>
                        </div>
                        </div>              
                    </div>        
                    </div>
                </div>
                <div className="container">
                    <div className="card border-primary">     
                    <div className="card-body">
                        <h4 className="card-title">CÁC DỊCH VỤ CHỤP ẢNH SẢN PHẨM ĐA DẠNG VÀ PHONG PHÚ CỦA ADVERTISING</h4>              
                    </div>
                    </div>  
                    <div className="row">
                    <div className="card-deck">
                        <div className="card">
                        <a href="/tin-chi-tiet"><img className="card-img-top" src="https://lavenderstudio.com.vn/wp-content/uploads/2017/03/chup-san-pham-quang-cao-mon-an.jpg" alt="Chụp sản phẩm quảng cáo cho Perfect Kitchen" /></a>
                        <div className="card-body">
                            <h4 className="card-title">Sản phẩm quảng cáo cho Perfect Kitchen</h4>
                            <p className="card-text">
                            ❉ Dịch vụ quay phim, chụp ảnh sản phẩm: shop, nhà hàng, khách sạn.
                            ❉ Dịch vụ quay phim, chụp ảnh cho các sản phẩm website online.
                            ❉ Dịch vụ quay phim chụp hình nội thất văn phòng, cao ốc.
                            </p>
                        </div>
                        </div>
                        <div className="card">
                        <a href="/tin-chi-tiet"><img className="card-img-top" src="https://lavenderstudio.com.vn/wp-content/uploads/2017/03/dich-vu-chup-hinh-nha-mau-04-1.jpg" alt="Chụp ảnh biệt thự mẫu Khang Điền - Quận 9" /></a>
                        <div className="card-body">
                            <h4 className="card-title">Biệt thự mẫu Khang Điền</h4>
                            <p className="card-text">❉ Quay phim, Chụp hình sản phẩm – quay phim quảng cáo, máy móc.</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>  
                {/* End Tin tức chi tiết */}
            </div>
        );
    }
}

export default NewsDetail;