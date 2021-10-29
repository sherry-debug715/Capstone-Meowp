import React from "react";
import "./Footer.css";
import { Link } from 'react-router-dom';

const Footer = () => {

    let linkedinLogo = "https://cdn.discordapp.com/attachments/900530489574703194/903647161001050132/unknown.png";
    let gitHubLogo = "https://cdn.discordapp.com/attachments/900530489574703194/903647747654180904/unknown.png";

    return (
        <>
            <footer id="footer">
                <div id="footer-upper">
                    <div className="footer-slogans">
                        <div className="slogan1">"Real People Real Reviews"</div>
                        <div className="slogan2">"A Place to Meowp Your Review"</div>
                    </div>
                    <div className="slogan2">Designed and Engineered by Sherry Yu</div>
                    <div className="read-about-me">
                        <div>About Me</div>
                            <div className="linkedin">
                                <span>Linkedin: </span>
                                <Link className="link-linkedin" to="https://www.linkedin.com/in/xiaozhuyu/">
                                    <img id="about-me-logo" src={linkedinLogo} alt="linkedin-logo"/>
                                </Link>
                            </div>
                            <div className="github">
                                <span>GitHub: </span>
                                <Link className="link-gitHub" to="https://github.com/sherry-debug715">
                                    <img id="about-me-logo" src={gitHubLogo} alt="gitHub-logo"/>
                                </Link>
                            </div>
                    </div>
                </div>
                <hr className="footer-line-breaker" />
                <div className="footer-bottom">
                    <p>Copyright 2021 © All Rights Reserved</p>
                </div>
            </footer>
        </>
    )
}

export default Footer;
