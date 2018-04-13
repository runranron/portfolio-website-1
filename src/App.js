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
        <Header className='header-color' title="Main" scroll>
            <Navigation>
                <Link to="/resume">Reusme</Link>
                <Link className='header' to="/aboutme">About me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
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