import React from "react"
import RoutePath from '../router/RoutePath';

function Footer() {
    return (
            <footer className="footer">
            <div className="container text-center text-md-left">
                <div className="row">
                    <div className="col-md-3 mx-auto">
                        <h5 className="footerText text-uppercase mt-3 mb-4 text-center">Follow us</h5>
                        <ul className="list-unstyled text-center">
                            <li class="d-inline">
                                <a className="text-color-custom-links  text-decoration-none" href={RoutePath.facebook} target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook fa-2x"></i></a>
                            </li>
                            <li className="d-inline">
                                <a className="text-color-custom-links  text-decoration-none ml-2" href={RoutePath.twitter} target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter-square fa-2x"></i></a>
                            </li>
                            <li className="d-inline">
                                <a className="text-color-custom-links  text-decoration-none ml-2" href={RoutePath.linkedin} target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin fa-2x"></i></a>
                            </li>
                            <li className="d-inline">
                                <a className="text-color-custom-links  text-decoration-none ml-2" href={RoutePath.instagram} target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram-square fa-2x"></i></a>
                            </li>
                        </ul>
                    </div>
                    <hr className="clearfix w-100 d-md-none" />
                    <div className="col-md-3 mx-auto">
                        <h5 className="text-uppercase mt-3 mb-4">Links</h5>
                        <ul className="list-unstyled">
                        <li>
                                <a className="text-uppercase text-color-custom-links text-decoration-none" href={RoutePath.home}>Home</a>
                            </li>
                            <li>
                                <a className="text-uppercase text-color-custom-links text-decoration-none" href={RoutePath.news}>News</a>
                            </li>
                            <li>
                                <a className="text-uppercase text-color-custom-links text-decoration-none" href={RoutePath.contact}>Contact us</a>
                            </li>
                        </ul>
                    </div>
                    <hr className="clearfix w-100 d-md-none" />
                    <div className="col-md-3 mx-auto">
                        <h5 className="text-uppercase mt-3 mb-4">About us</h5>
                        <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Quisque felis nisi, gravida ut convallis at, convallis in nibh. 
                            Vivamus dictum tincidunt mauris, ut posuere turpis ultricies a. 
                            Phasellus efficitur leo at erat dignissim.
                        </p>
                    </div>
                </div>
            </div>
            <div className="footer-copyright bg-custom text-center py-3 text-decoration-none">© 2020 
                <a className="text-decoration-none" href={RoutePath.home}> FakePage</a>
            </div>
        </footer>
    )
}
export default Footer