import React from 'react';
import {
  Card,
  CardTitle,
  CardText,
  CardActions,
  CardMenu,
  IconButton,
  Button,
} from 'react-mdl';

import './ProjectCard.css';

export default props => (
  <Card className="ProjectCard" shadow={5}>
    <CardTitle className='ProjectCard__title'>{props.project.title}</CardTitle>
    <CardText className = 'ProjectCard__text'>
        {props.project.description}
    </CardText>
    <CardActions className='ProjectCard__actions' border>
      <Button onClick={() => window.location.assign(props.project.github)} colored>GitHub</Button>
      <Button onClick={() => window.location.assign(props.project.codepen)} colored>CodePen</Button>
      <Button onClick={() => window.location.assign(props.project.demo)} colored>Live Demo</Button>
    </CardActions>
    <CardMenu style={{color: '#fff',}}>
      <IconButton name="share" />
    </CardMenu>
  </Card>
);
