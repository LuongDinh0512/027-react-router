import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div>
                {/* Masthead*/}
                <header className="masthead">
                <div className="container px-4 px-lg-5 h-100">
                    <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
                    <div className="col-lg-8 align-self-end">
                        <h1 className="text-white font-weight-bold">Category Archives</h1>
                        <h1 className="text-white font-weight-bold">Quay Chụp Quảng Cáo</h1>
                        <hr className="divider" />
                    </div>
                    <div className="col-lg-8 align-self-baseline">
                        <p className="text-white-75 mb-5">Công ty TNHH Dịch vụ Truyền thông Lavender, với thương hiệu Lavender Advertising, tự hào là một trong số ít những công ty có tiếng hàng đầu trong lĩnh vực Truyền thông – Giải trí.</p>
                        <a className="btn btn-primary btn-xl" href="#about">Find Out More</a>
                    </div>
                    </div>
                </div>
                </header>
                {/* About*/}
                <section className="page-section bg-primary" id="about">
                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-lg-8 text-center">
                        <h2 className="text-white mt-0">We've got what you need!</h2>
                        <hr className="divider divider-light" />
                        <p className="text-white-75 mb-4">Start Bootstrap has everything you need to get your new website up and running in no time! Choose one of our open source, free to download, and easy to use themes! No strings attached!</p>
                        <a className="btn btn-light btn-xl" href="#services">Get Started!</a>
                    </div>
                    </div>
                </div>
                </section>
                {/* Services*/}
                <section className="page-section" id="services">
                <div className="container px-4 px-lg-5">
                    <h2 className="text-center mt-0">At Your Service</h2>
                    <hr className="divider" />
                    <div className="row gx-4 gx-lg-5">
                    <div className="col-lg-3 col-md-6 text-center">
                        <div className="mt-5">
                        <div className="mb-2"><i className="bi-gem fs-1 text-primary" /></div>
                        <h3 className="h4 mb-2">Sturdy Themes</h3>
                        <p className="text-muted mb-0">Our themes are updated regularly to keep them bug free!</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 text-center">
                        <div className="mt-5">
                        <div className="mb-2"><i className="bi-laptop fs-1 text-primary" /></div>
                        <h3 className="h4 mb-2">Up to Date</h3>
                        <p className="text-muted mb-0">All dependencies are kept current to keep things fresh.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 text-center">
                        <div className="mt-5">
                        <div className="mb-2"><i className="bi-globe fs-1 text-primary" /></div>
                        <h3 className="h4 mb-2">Ready to Publish</h3>
                        <p className="text-muted mb-0">You can use this design as is, or you can make changes!</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 text-center">
                        <div className="mt-5">
                        <div className="mb-2"><i className="bi-heart fs-1 text-primary" /></div>
                        <h3 className="h4 mb-2">Made with Love</h3>
                        <p className="text-muted mb-0">Is it really open source if it's not made with love?</p>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
            </div>
        );
    }
}

export default Home;