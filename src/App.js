import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl'
import Main from './components/Main/Main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
    <Layout>
      {/* header color */}
        <Header className='header-color' title="hello there" scroll>
            <Navigation>
                <Link to='/'>home</Link>
                <Link className='header' to="/aboutme">about me</Link>
                <Link to="/projects">projects</Link>
                <Link to="/contact">contact</Link>
            </Navigation>
        </Header>
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
