import React from "react";

const Footer = () => (
    
  <div className="footer">
      <div className="contact-links" id="contact">
      {/* LinkedIn */}
      <a href="https://www.linkedin.com/in/princess-moss-8b290a140/" rel="noopener noreferrer" target="_blank">
        <i className="fa fa-linkedin-square" aria-hidden="true" />
      </a>

      {/* Github */}
      <a href="https://github.com/princessmoss" rel="noopener noreferrer" target="_blank">
        <i className="fa fa-github-square" aria-hidden="true" />
      </a>

      {/* Email */}
      <a href="mailto:princessmosse@gmail.com" rel="noopener noreferrer" target="_blank">
        <i class="fa fa-envelope" aria-hidden="true" />
      </a>

      {/* PDF */}
      <a href="PEMoResume.pdf" download rel="noopener noreferrer" target="_blank">
        <i class="fa fa-file-pdf-o" aria-hidden="true" />
      </a>

      {/* Phone */}
      <a href="tel:8642214038" rel="noopener noreferrer" target="_blank">
        <i class="fa fa-phone-square"  aria-hidden="true" />
      </a>

    </div>
    <p>Princess Moss Profile</p>
    
  </div>
);

export default Footer;