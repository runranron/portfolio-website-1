import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell} from 'react-mdl';
import axios from 'axios';

import ProjectCard from './ProjectCard';


class Projects extends Component {
    state = {
      projects: []
    }

    render() {
      return(
        <Grid className="Content">
          {this.state.projects.map((project, index) => {
            return <ProjectCard key={index} project={project}/>
        })}
      </Grid>
      )
    }

    componentDidMount() {
      axios
        .get('https://lambda-notes-b2b43.firebaseio.com/projects.json')
        .then(response => {
          this.setState({
            projects: response.data.filter(project => project !== null),
          })
        }).catch(err => console.log(err));
    }
}


export default Projects;
