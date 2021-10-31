import React from "react";
import "./Footer.css";
import { Link } from 'react-router-dom';

const Footer = () => {

    let linkedinLogo = "https://cdn.discordapp.com/attachments/900530489574703194/903647161001050132/unknown.png";
    let gitHubLogo = "https://cdn.discordapp.com/attachments/900530489574703194/903647747654180904/unknown.png";

    return (
            <footer id="footer">
                <div id="footer-upper">
                    <div className="slogan2">Designed and Engineered by Sherry Yu</div>
                    <div className="read-about-me-container">
                        <div className="read-about-me">
                            <div className="professional-profile">Linkedin: </div>
                            <a className="link-linkedin" href="https://www.linkedin.com/in/xiaozhuyu/">
                                <img id="about-me-logo" src={linkedinLogo} alt="linkedin-logo"/>
                            </a>
                        </div>
                        <div className="read-about-me">
                            <div className="professional-profile">GitHub: </div>
                            <a className="link-gitHub" href="https://github.com/sherry-debug715">
                                <img id="about-me-logo" src={gitHubLogo} alt="gitHub-logo"/>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="copyright">Copyright 2021 © All Rights Reserved</p>
                </div>
            </footer>
    )
}

export default Footer;
