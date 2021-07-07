import mePic from "./images/ProfileImage.jpg"
import backend from "./images/backend.png";
import chatter from "./images/chatterbox.png";
import tech from "./images/techblog.png";
import directory from "./images/emplyeedirectory.png";
import fitness from "./images/fitnesstracker.png";
import weather from "./images/weatherDashboard.png";

const user = {
  profilePic: mePic,
  altTag: "contact picture",
  email: "princessmosse@gmail.com",
  github: "princessmoss",
  linkedin: "https://www.linkedin.com/in/princess-moss-8b290a140/",
  p1: "Hi, I'm Princess – I'm a Graphic Designer and Full Stack Developer",
  p2:
    "I currently live in Charlotte, NC and I am going to UNC Charlotte for Coding Bootcamp",
  
};

const portfolios = [
  {
    id: 1,
    image: weather,
    altTag: "preview of weather",
    name: "WeatherDashboard",
    description:
      "The Weather Dashboard allows the user to search by city to find the current temperature and humidity of that area.",
    link1: "https://github.com/princessmoss/WeatherDashboard",
    link1BtnName: "Github repo",
    link2: "https://princessmoss.github.io/WeatherDashboard/",
    link2BtnName: "Deployed page",
    
  },
  {
    id: 2,
    image: fitness,
    name: "Fitness Tracker",
    description:
      "Fitness Tracker that allows the user to be able to view create and track their daily workouts. ",
    link1: "https://github.com/princessmoss/NoSQL-Workout-Tracker",
    link1BtnName: "Github repo",
    link2: "https://shrouded-wildwood-20742.herokuapp.com/?id=60dbe8b5fbbcd80015f482fb",
    link2BtnName: "Heroku page",
    
  },
  {
    id: 3,
    image: backend,
    name: "Employee Tracker",
    description:
      "Access to all employees, departments and the user is able to edit the information.",
    link1: "https://github.com/princessmoss/Emplyoyee_Tracker",
    link1BtnName: "Github repo",
  },
  {
    id: 4,
    image: chatter,
    name: "Chatterbox App",
    description:
      "Group Prjoect: Blog type style app for UNCC students",
    link1: "https://github.com/princessmoss/Chatterbox",
    link1BtnName: "Github repo",
    link2: "https://limitless-lowlands-46287.herokuapp.com/",
    link2BtnName: "Heroku page",
  },
  {
    id: 5,
    image: tech,
    name: "Tech Blog",
    description:
      "A Blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well.",
    link1: "https://github.com/princessmoss/14-MVC-Tech-Blog",
    link1BtnName: "Github demo",
    link2: "https://immense-retreat-29555.herokuapp.com/",
    link2BtnName: "Heroku repo",
  },
  {
    id: 6,
    image: directory,
    name: "Employee Directory",
    description:
      "Employee Directory that will give the user quick access to their entire employee directory at once, as well as randomize the employee's that appear.",
    link1: "https://github.com/princessmoss/employee-directory",
    link1BtnName: "Github demo",
    link2: "https://princessmoss.github.io/employee-directory/",
    link2BtnName: "Heroku repo",
  },
  
];

export { user, portfolios };
