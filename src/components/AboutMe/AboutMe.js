import React, { Component } from 'react';
import {
  Grid,
  Cell,
} from 'react-mdl';


class About extends Component {
    render() {
      return(
          <Grid className="Landing-grid">
            <Cell col={12} className="Main-content">
              <div className="title-text">
                <h1>About Me</h1>
              <hr/>
            </div>
            </Cell>
          </Grid>
      )
  }
}


export default About;
