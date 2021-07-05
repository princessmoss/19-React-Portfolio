import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import './App.css';

function App() {
  return (
    <div style={{height: '300px', position: 'relative'}}>
    <Layout style={{background: 'url(https://i.pinimg.com/originals/62/93/ff/6293ff11ecbc1f92dac97ab5970f4d71.webp) center / cover'}}>
        <Header transparent title="Title" style={{color: 'white'}}>
            <Navigation>
                <a href="/">About Me</a>
                <a href="/">Resume</a>
                <a href="/">Portfolio</a>
                <a href="/">Contact</a>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
                <a href="/">About Me</a>
                <a href="/">Resume</a>
                <a href="/">Portfolio</a>
                <a href="/">Contact</a>
            </Navigation>
        </Drawer>
        <Content />
    </Layout>
</div>
  );
}

export default App;
