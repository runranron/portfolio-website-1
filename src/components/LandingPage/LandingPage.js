import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

// first

class LandingPage extends Component {
    render() {
      return(
          <Grid className="Content">
            <Cell col={12}>
              <img alt="Avatar" className="avatar-img"
              src="https://scontent-dfw5-1.cdninstagram.com/vp/93e760a68ead143aba6217c1cb67b8de/5B504878/t51.2885-15/e35/11374195_992679550796225_496538000_n.jpg"
              />
              <div className="title-text">
                <h1>Hi, i'm William.</h1>
                <p>I like food. Please hire me.</p>
              <hr/>
              <p>HTML/CSS | JavaScript | React | Redux | NodeJS | Linux | Python</p>

              {/* here we will add our links and add the icons for them using fontawesome cdn,  */}
              {/* i will provdie all the links that i used  */}

              <div className="social-links">
                {/* Github */}
                  <a href="https://github.com/runranron/portfolio-website-1" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-github-square" aria-hidden="true" /></a>

                    {/* LinkedIn */}
                  <a href="https://www.linkedin.com/in/william-pelton-49b60921/" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-linkedin-square" aria-hidden="true" /></a>
                </div>
              </div>
            </Cell>
          </Grid>
      )
    }
}


export default LandingPage;
