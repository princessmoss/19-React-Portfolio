import React, { Component } from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import './App.css';
import Main from './components/main';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="demo-big-content">
    <Layout>
    <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">Princess M Portfolio</Link>} scroll>       
     <Navigation>
                <Link to="/aboutme">About Me</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">Menu</Link>}>           
         <Navigation>
            <Link to="/aboutme">About Me</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
//     <div style={{height: '300px', position: 'relative'}}>
//     <Layout style={{background: 'url(https://i.pinimg.com/originals/62/93/ff/6293ff11ecbc1f92dac97ab5970f4d71.webp) center / cover'}}>
//         <Header transparent title="Princess M." style={{color: 'white'}}>
//             <Navigation >
//                 <a href="/" style={{color: 'black'}}>About Me</a>
//                 <a href="/" style={{color: 'black'}}>Resume</a>
//                 <a href="/" style={{color: 'black'}}>Portfolio</a>
//                 <a href="/" style={{color: 'black'}}>Contact</a>
//             </Navigation>
//         </Header>
//         <Drawer title="Menu" >
//             <Navigation>
//                 <a href="/">About Me</a>
//                 <a href="/">Resume</a>
//                 <a href="/">Portfolio</a>
//                 <a href="/">Contact</a>
//             </Navigation>
//         </Drawer>
//         <Content />
//     </Layout>
// </div>
  );
}

export default App;
