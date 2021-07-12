import * as React from "react";
import weather from '../../assets/images/WeatherDashboard.png'
import backend from '../../assets/images/backend.png'
import chatter from '../../assets/images/Chatterbox.png'
import fitness from '../../assets/images/fitnesstracker.png'

const Projects = () => {
    return (
      (<div style={{ margin: `50px`, display: `flex`, flexDirection: `row`, justifyContent: `center` }} id="projects">
    <div className="e-card e-card-horizontal" style={{ width: `400px` }}>
        <img src={weather} alt="Sample" style={{ height: `180px` }}/>
        <div className="e-card-stacked">
            <div className="e-card-header">
                <div className="e-card-header-caption">
                    <div className="e-card-header-title">Weather Dashboard</div>
                    <h3>The Weather Dashboard allows the user to search by city to find the current temperature and humidity of that area.</h3>
                    <a href="https://github.com/princessmoss/WeatherDashboard">Github</a><br></br>
                    <a href="https://shrouded-wildwood-20742.herokuapp.com/?id=60ea211787c18e00157c060d">Deployed</a>
                </div>
                <br></br>
                <img src={fitness} alt="Sample" style={{ height: `180px` }}/>
                <div className="e-card-header-title">Fitness Tracker</div>
                    <h3>Fitness Tracker that allows the user to be able to view create and track their daily workouts.</h3>
                    <a href="https://github.com/princessmoss/NoSQL-Workout-Tracker">Github</a><br></br>
                    <a href="https://shrouded-wildwood-20742.herokuapp.com/?id=60dbe8b5fbbcd80015f482fb">Deployed</a>
            </div>
            <img src={backend} alt="Sample" style={{ height: `180px` }}/>
            <div className="e-card-header-title">Employee Tracker</div>
                    <h3>Access to all employees, departments and the user is able to edit the information.</h3>
                    <a href="https://github.com/princessmoss/Emplyoyee_Tracker">Github</a>
            </div>
             <img src={chatter} alt="Sample" style={{ height: `180px` }}/>
            <div className="e-card-header-title">Chatterbox</div>
                    <h3>Group Prjoect: Blog type style app for UNCC students</h3>
                    <a href="https://github.com/princessmoss/Chatterbox">Github</a><br></br>
                    <a href="https://limitless-lowlands-46287.herokuapp.com/">Deployed</a>
             </div>
  </div>)
    );
  }
  
  export default Projects;

  