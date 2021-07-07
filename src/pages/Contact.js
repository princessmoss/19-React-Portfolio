import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faMobile } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { user } from "../assets/Data";
const Contact = () => (
  <main className="bg3">
    <div className="container connect-wrapper">
      <div className="row">
        <h3 className="col-12 connect" style={{ fontSize: "260%" }}>Princess M. Contact</h3>
        <div className="line"></div>
      </div>
  
      <div className="row socials">
          <div className="col">
            <span><FontAwesomeIcon icon={faEnvelope} /></span>
            <a href={`mailto:${user.name}`}><p>{user.email}</p></a>
          </div>
          <div className="col">
            <span><FontAwesomeIcon icon={faMobile} /></span>
            <a href={`tel:${user.mobile}`}><p>{user.mobile}</p></a>
          </div>
          <div className="col">
            <span><FontAwesomeIcon icon={faGithub} /></span>
            <a href={`https://github.com/${user.github}`} target="_blank"><p>{user.github}</p></a>
          </div>
          <div className="col">
            <span><FontAwesomeIcon icon={faLinkedin} /></span>
            <a href={`https://www.linkedin.com/in/princess-moss-8b290a140/${user.linkedin}`} target="_blank"><p>{user.linkedin}</p></a>
          </div>
          <div className="col">
            <span><FontAwesomeIcon icon={faDownload} /></span>
            <a href="PEMoResume.pdf" download><p> Download CV {user.cv}</p></a>
          </div>
        </div>
    </div>  
  </main>
);

export default Contact;
