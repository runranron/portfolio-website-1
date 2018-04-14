import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from '../LandingPage/LandingPage';
import AboutMe from '../AboutMe/AboutMe';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
import Resume from '../Resume/Resume';
import AddProject from '../Projects/AddProject';


const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/aboutme" component={AboutMe} />
    <Route path="/contact" component={Contact} />
    <Route path="/projects" component={Projects} />
    <Route path="/resume" component={Resume} />
    <Route path='/addproject' component={AddProject} />
  </Switch>
)

export default Main;
