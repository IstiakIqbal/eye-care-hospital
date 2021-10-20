import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="bg-dark text-white pt-5 pb-4">
            <div className="container text-center text-md-left">
                <div className="row text-center text-md-left">

                    <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold text-info">About Us</h5>
                        <hr className="mb-4" />
                        <p>State-of-the-art diagnostic devices Advanced surgical machinery Surgeon with multi-fellowship training around the world</p>
                    </div>

                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold text-info">Let Us Help</h5>
                        <hr className="mb-4" />
                        <p>
                            <Link to="/" className="text-white text-decoration-none">Your Account</Link>
                        </p>

                        <p>
                            <Link to="/" className="text-white text-decoration-none">Treatments</Link>
                        </p>
                        <p>
                            <Link to="/" className="text-white text-decoration-none">Help</Link>
                        </p>
                    </div>

                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold text-info">Contact</h5>
                        <hr className="mb-4" />
                        <p>
                            <li className="fas fa-home mr-3 list-unstyled"></li> Chittagong, Bangladesh
                        </p>
                        <p>
                            <li className="fas fa-envelope mr-3 list-unstyled"></li>istiakiqbal@gmail.com
                        </p>
                        <p>
                            <li className="fas fa-home mr-3 list-unstyled"></li>01812688156
                        </p>
                    </div>
                    <hr className="mb-4" />
                    <div className="row d-flex justify-content-center">
                        <p>
                            <small>Copyright ©2020 All rights reserved by:
                                <Link className="text-decoration-none text-info mx-2">Md. Istiak Iqbal</Link>
                            </small>
                        </p>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Footer;