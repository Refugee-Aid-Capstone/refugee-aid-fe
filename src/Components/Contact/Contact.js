import React from 'react';
import '../Contact/Contact.scss'
import weAllHuman from '../../images/usa-custom.jpeg';
// import weAllHuman from '../../images/images.jpeg';

const ContactSection = () => {
    return (
        <div className="contact-section">
            <div className="top-section">
                <div className="left-side">
                    <div className="weallhuman-container">
                        <img src={weAllHuman} alt="Refugees" className="wehalluman-img" />
                    </div>
                </div>
                <div className="right-side">
                <h3 className="resources-header">HELPFUL RESOURCES</h3>
                    <ul>
                        <li>
                            <a href="https://www.wrapsnet.org/documents/FY%202023%20Reception%20&%20Placement%20Fact%20Sheet.pdf" target="_blank" rel="noopener noreferrer">
                                FY 2023 Reception & Placement Fact Sheet
                            </a>
                        </li>
                        <li>
                            <a href="https://www.wrapsnet.org/afghans-granted-humanitarian-parole/" target="_blank" rel="noopener noreferrer">
                                R&P Affiliate Directory as of July 2023
                            </a>
                        </li>
                        <li>
                            <a href="https://www.wrapsnet.org/documents/Things%20You%20Need%20to%20Know%20About%20Resettling%20in%20the%20United%20States%20(English).pdf" target="_blank" rel="noopener noreferrer">
                                Things You Need to Know About Resettling in the United States (English)
                            </a>
                        </li>
                        <li>
                            <a href="https://www.wrapsnet.org/documents/Things%20You%20Need%20to%20Know%20About%20Resettling%20in%20the%20United%20States%20(Dari).pdf" target="_blank" rel="noopener noreferrer">
                                Things You Need to Know About Resettling in the United States (Dari/ دری)
                            </a>
                        </li>
                        <li>
                            <a href="https://www.wrapsnet.org/documents/Things%20You%20Need%20to%20Know%20About%20Resettling%20in%20the%20United%20States%20(Pashto).pdf" target="_blank" rel="noopener noreferrer">
                                Things You Need to Know About Resettling in the United States (Pashto/ پښتو)
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="bottom-section">
                <h2>CONTACT US</h2>
                <p>Need technical assistance with this website? Send an email to:
                    <a href="mailto:webhelp@wrapsnet.org" className="email-link">nanajon66@gmail.com</a>.
                </p>

                <p className="netflix-red">
                    The U.S. Refugee Admissions Program (USRAP) is free of charge.
                    Any requests to solicit funds for referral or access to the USRAP
                    are illegitimate and not associated with the U.S. government.
                </p>
                <p>
                    <a href="#">U.S. Department of State</a> |
                    <a href="#">Bureau of Population, Refugees, and Migration</a> |
                    <a href="#">Refugee Admissions</a>
                </p>
                <footer>
                    <p>Copyright © 2016 Refugee Processing Center</p>
                    <p className="special-links">
                        <a href="#">Privacy Statement</a> | <a href="#">Terms of Use</a>
                    </p>

                </footer>
            </div>
        </div>
    );
};

export default ContactSection;
