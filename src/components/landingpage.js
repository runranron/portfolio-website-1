import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class LandingPage extends Component {
    render() {
      return(
          <div Style={{Width: '100%', margin: 'auto' }}>
          <Grid className="landing-grid">
          <Cell col={12}>
          
          {/* add any image link you want */}
          <img 
          src="https://cdn0.iconfinder.com/data/icons/avatars-6/500/Avatar_boy_man_people_account_client_male_person_user_work_sport_beard_team_glasses-512.png"
          alt="Avatar"
          className="avatar-img"
          />
          <div className="title-text">

          <h1> Add your  title here </h1>
          {/* self closing  */}
          <hr/>


          <p>HTML/CSS | JavaScript | React | React Native | NodeJS | Git | NPM</p>

          {/* here we will add our links and add the icons for them using fontawesome cdn,  */}
          {/* i will provdie all the links that i used  */}

          <div className="social-links">
          {/* LinkedIn */}
          <a href="https://github.com/Mohammed-AB/portfolio-website" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" /></a>
          </div>
          </div>
          </Cell>
          </Grid>
          </div>
      )
    }
}


export default LandingPage;