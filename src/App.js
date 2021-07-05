import React, { Component } from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import './App.css';
import Main from './components/main';

function App() {
  return (
    <div style={{height: '300px', position: 'relative'}}>
    <Layout fixedHeader>
        <Header title="Princess M" style={{color: 'white'}} scroll>
            <Navigation>
                <a href="/">About Me</a>
                <a href="/">Resume</a>
                <a href="/">Projects</a>
                <a href="/">Contact</a>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
                <a href="/">About Me</a>
                <a href="/">Resume</a>
                <a href="/">Projects</a>
                <a href="/">Contact</a>
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
