import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Resume extends Component {
    render() {
      return(
        <Grid className="Landing-page">
            <Cell className="content">
                <div className="title-text">
                    <h1>Resume</h1>
                </div>
            </Cell> 
        </Grid>
      )
    }
}


export default Resume;