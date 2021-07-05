import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render() {
      return(
          <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://i.pinimg.com/564x/9b/c8/a7/9bc8a754d4e2c30f485b3e182df03196.jpg"
              alt="avatar"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>

            <hr/>

          <p>HTML/CSS | Bootstrap | JavaScript | React | NodeJS | Express</p>

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
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i class="fa fa-envelope" aria-hidden="true"></i>
          </a>

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
      )
    }
}

export default Landing;