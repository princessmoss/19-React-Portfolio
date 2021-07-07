import { user } from "../assets/Data";

const Home = () => (
  <div>
    <div className="bg">
      <div className="container about-wrapper">
          <div className="row">
            <div className=" me-text col">
              <h3 className="col about" style={{ fontSize: "260%" }}>About Me</h3>
              <div className="line"></div>
              <p>{user.p1}</p>
              <p>{user.p2}</p>
              <p>{user.p4}</p>
            </div>
            <div className="me-image col">
              <img src={user.profilePic} alt={user.altTag}/>
            </div>
            
          </div>
        </div>
    </div>
    <div className="bg3">
        <div className="container skills-wrapper">
          <div className="row">
            <h3 className="col-12 skills" style={{ fontSize: "260%" }}>Programs</h3>
            <div className="line"></div>
          </div>
          <div className="row skills-list">
            <div className="col">
              <img scr="" alt=""/>
              {/* <h4>Development</h4>
              <p>
                HTML5, CSS, JavaScript, Responsive Web Design
              </p> */}
            </div>
            <div className="col">
            <img scr="" alt=""/>
              <p> Abode Illustrator / Photoshop / InDesign / HTML5 /CSS /JavaScript / Responsive Web Design </p>
            </div>
            <div className="col">
            <img scr="" alt=""/>
            </div>
            
          </div>
          <div className="social-links">
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
            <i class="fa fa-envelope" aria-hidden="true"></i>
          </a>
      </div>
        </div>
    </div>
  </div>

);

export default Home;
