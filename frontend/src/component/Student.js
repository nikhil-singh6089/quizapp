import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Grid, TextField, Button, makeStyles  } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    inputContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: theme.spacing(2),
    },
  }));

const Student = () => {
    const [quizTaken, setQuizTaken] = useState([]);
    const [quizToken, setQuizToken] = useState('');
    let history = useHistory();
    const classes = useStyles();
    
    const handleClick = (location, data) => {
        console.log(location);
        console.log(data);
        history.push({
            pathname: location,
            state: {quizToken: quizToken}, // Pass data as state
        });
    };

    const handleQuizTokenChange = (e) => {
        const token = e.target.value;
        setQuizToken(token);
        localStorage.setItem('quizToken', token); // Update local storage
    };

    // Fetch the list of quizzes taken by the student
    useEffect(() => {
        // Your API call to fetch the list of quizzes taken by the student
        // Update the `quizTaken` state with the response data
    }, []);

    // Function to handle quiz submission using a token
    const handleQuizSubmission = () => {
        // Your logic to handle quiz submission using the `quizToken`
        localStorage.setItem('usertoken', quizToken);
        //setQuizToken(quizToken);
        console.log(quizToken);
    };


    return (
        <Grid container className={classes.inputContainer}>
          <TextField
            type="text"
            value={quizToken}
            onChange={handleQuizTokenChange}
            placeholder="Enter quiz token"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleQuizSubmission}
            style={{ marginLeft: 10 }}
          >
            Submit
          </Button>
          <Button
            variant="contained"
            color="primary"
            className="take-quiz-button"
            onClick={handleClick}
            style={{ marginLeft: 10 }}
          >
            Take Quiz
          </Button>
        </Grid>
      );
    };

export default Student;