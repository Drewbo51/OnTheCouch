import React from 'react';


const Footer = () => {
    return(
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    {/* Colum1*/}
                    <div className="col">
                        <h4>OntheCouch Reviews</h4>
                        <ul className="list-unstyled">
                            <li>Bay Area and SoCal</li>
                            <li>Contributors</li>
                            <li>The Vision</li>
                        </ul>
                    </div>
                   {/* column2*/}
                    <div className="col">
                        <h4>About</h4>
                        <ul className="list-unstyled">
                            <li>Careers</li>
                            <li>Support</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    {/* column3*/}
                    <div className="col">
                        <h4>Privacy Policy</h4>
                        <ul className="list-unstyled">
                            <li>Legal</li>
                            <li>Terms</li>
                            <li>Privacy</li>
                        </ul>
                    </div>
                <div className="row">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()}

                    </p>
                </div>
                </div>

            </div>
        </div>
    )
}

export default Footer;