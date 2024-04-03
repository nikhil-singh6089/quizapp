import { Grid, Typography,Button,makeStyles, } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import './Welcomehome.css';


/*The common Landing Page where all the different services define*/
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

const Welcomehome = (props) => {
    let history = useHistory();
    
    const handleClick = (location) => {
        console.log(location);
        history.push(location);
    };
return(
    <React.Fragment>
        <div className="home-container">
            <div className="home-content">
                <h1 className="home-heading">Make a online Quiz For Test The Students Skill</h1>
                <p className="home-description">
                    Millions of people are searching for Quiz maker for creating the online Quiz.
                </p>
                <p className="home-description">Make Quiz for Test and Check Knowledge</p>
              <Button style={{
                    backgroundColor: 'blue',
                    color: 'white',
                    padding: '10px 20px',
                    fontSize: '16px',
                }}
                className="create-quiz-button" onClick={() => handleClick("/createQuiz")}>
                CreateQuiz
              </Button>
              <Button style={{
                    backgroundColor: 'blue',
                    color: 'white',
                    padding: '10px 20px',
                    fontSize: '16px',
                }}
                className="take-quiz-button" onClick={() => handleClick("/takeQuiz")}>
                Take Quiz
              </Button>
            </div>
        </div>
    </React.Fragment>
);
};
export default Welcomehome