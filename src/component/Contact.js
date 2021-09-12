import React, { Component } from 'react';

class Contact extends Component {
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
                        <h1 className="text-white font-weight-bold">Liên hệ</h1>                    
                        </div>
                        <div className="col-lg-8 align-self-baseline">
                        </div>
                    </div>
                    </div>
                </header>
                {/* Begin Contact */}
                <section className="page-section" id="contact">
                    <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-lg-8 col-xl-6 text-center">
                        <h2 className="mt-0">Let's Get In Touch!</h2>
                        <hr className="divider" />
                        <p className="text-muted mb-5">Ready to start your next project with us? Send us a messages and we will get back to you as soon as possible!</p>
                        </div>
                    </div>
                    <div className="row gx-4 gx-lg-5 justify-content-center mb-5">
                        <div className="col-lg-6">
                        {/* * * * * * * * * * * * * * * **/}
                        {/* * * SB Forms Contact Form * **/}
                        {/* * * * * * * * * * * * * * * **/}
                        {/* This form is pre-integrated with SB Forms.*/}
                        {/* To make this form functional, sign up at*/}
                        {/* https://startbootstrap.com/solution/contact-forms*/}
                        {/* to get an API token!*/}
                        <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                            {/* Name input*/}
                            <div className="form-floating mb-3">
                            <input className="form-control" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required" />
                            <label htmlFor="name">Full name</label>
                            <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                            </div>
                            {/* Email address input*/}
                            <div className="form-floating mb-3">
                            <input className="form-control" id="email" type="email" placeholder="name@example.com" data-sb-validations="required,email" />
                            <label htmlFor="email">Email address</label>
                            <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                            <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                            </div>
                            {/* Phone number input*/}
                            <div className="form-floating mb-3">
                            <input className="form-control" id="phone" type="tel" placeholder="(123) 456-7890" data-sb-validations="required" />
                            <label htmlFor="phone">Phone number</label>
                            <div className="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                            </div>
                            {/* Message input*/}
                            <div className="form-floating mb-3">
                            <textarea className="form-control" id="message" type="text" placeholder="Enter your message here..." style={{height: '10rem'}} data-sb-validations="required" defaultValue={""} />
                            <label htmlFor="message">Message</label>
                            <div className="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                            </div>
                            {/* Submit success message*/}
                            {/**/}
                            {/* This is what your users will see when the form*/}
                            {/* has successfully submitted*/}
                            <div className="d-none" id="submitSuccessMessage">
                            <div className="text-center mb-3">
                                <div className="fw-bolder">Form submission successful!</div>
                                To activate this form, sign up at
                                <br />
                                <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                            </div>
                            </div>
                            {/* Submit error message*/}
                            {/**/}
                            {/* This is what your users will see when there is*/}
                            {/* an error submitting the form*/}
                            <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>
                            {/* Submit Button*/}
                            <div className="d-grid"><button className="btn btn-primary btn-xl disabled" id="submitButton" type="submit">Submit</button></div>
                        </form>
                        </div>
                    </div>
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-lg-4 text-center mb-5 mb-lg-0">
                        <i className="bi-phone fs-2 mb-3 text-muted" />
                        <div>+1 (555) 123-4567</div>
                        </div>
                    </div>
                    </div>
                </section>
                {/* End Contact */}
            </div>
        );
    }
}

export default Contact;