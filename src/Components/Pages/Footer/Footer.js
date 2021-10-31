import { faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer py-16">
            <h2 className="text-5xl text-center mb-2">Globe<span className="define">Trotting</span></h2>
            <p className="text-center mx-auto text-gray-200">Two weeks post- op and Cory went to see his doctor. Well, kind of….he passed him at the work station….enough to share greetings. Don’t you think he should be called.</p>
            <div className="footer-icon">
                <ul className="pt-6">
                    <li>
                        <FontAwesomeIcon className="text-4xl" icon={faFacebook}></FontAwesomeIcon>
                    </li>
                    <li>
                    <FontAwesomeIcon className="text-4xl" icon={faTwitter}></FontAwesomeIcon>
                    </li>
                    <li>
                    <FontAwesomeIcon className="text-4xl" icon={faLinkedin}></FontAwesomeIcon>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;