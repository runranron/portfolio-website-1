import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl'
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
// first
      
      <div className="demo-big-content">
    <Layout>
      {/* header color */}
        <Header className='header-color' title="hello there" scroll>
            <Navigation>
                <Link to='/'>home</Link>
                <Link to="/resume">resume</Link>
                <Link className='header' to="/aboutme">about me</Link>
                <Link to="/projects">projects</Link>
                <Link to="/contact">contact</Link>
            </Navigation>
        </Header>
        {/* <Drawer title="Title">
        <Navigation>
                <Link to="/resume">Reusme</Link>
                <Link to="/aboutme">About me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer> */}
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
    
    );
  }
}

export default App;