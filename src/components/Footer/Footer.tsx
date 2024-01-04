import React from "react";
import {Facebook, Instagram, Twitter, Youtube} from "react-feather";

const Footer = () => {
    return (
        <footer className="#">
            <section className="link">
                <div className="logos flex gap-x-5 text-white fill-blue-50 ml-20">
                    <Facebook />
                    <Instagram />
                    <Twitter />
                    <Youtube />
                </div>
                <div className="sub-links mt-10 text-left ml-20">
                    <ul>
                        <li>Audio and Subtitles</li>
                        <li>Audio Description</li>
                        <li>Help Center</li>
                        <li>Gift Cards</li>
                        <li>Media Center</li>
                        <li>Investor Relations</li>
                        <li>Jobs</li>
                        <li>Terms of Use</li>
                        <li>Privacy</li>
                        <li>Legal Notices</li>
                        <li>Corporate Information</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </section>

            <p>Atnflix</p>
            <p>Atnlie@2023</p>

        </footer>
    );
}

export default Footer;
