import format from './About.module.css'
import profilepm from '../../assets/images/ProfileImage.jpg';

const About = () => {
    return (
      <div className={format.myInfo} id="about">
      <div className={format.container}>
      <div className={format.photo}>
          <img className={format.pm} src={profilepm} alt="profile"></img>
        </div>
        <div className={format.text}>
          <h2>Welcome to my Portfolio!</h2>
          <p>
            My name is Princess Moss and I am currently a graphic designer. I am all about growth and decided further 
            my education to be an all around designer by taking Coding Bootcamp at UNCC Bootcamp. My goal by the end of the program
            is to grow my knowledge in coding and continue once done with the course.
          </p>
        </div>
      </div>
    </div>
  );
};
  
  export default About;