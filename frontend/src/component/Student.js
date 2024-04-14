import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';

const Student = () => {
    const [quizTaken, setQuizTaken] = useState([]);
    const [quizToken, setQuizToken] = useState('');
    let history = useHistory();
    
    const handleClick = (location) => {
        console.log(location);
        history.push(location);
    };

    // Fetch the list of quizzes taken by the student
    useEffect(() => {
        // Your API call to fetch the list of quizzes taken by the student
        // Update the `quizTaken` state with the response data
    }, []);

    // Function to handle quiz submission using a token
    const handleQuizSubmission = () => {
        // Your logic to handle quiz submission using the `quizToken`
    };


    return (
        <div>
            <div>
                <h2>Quizzes Taken</h2>
                {/* Render the list of quizzes taken */}
                {quizTaken.map((quiz, index) => (
                    <div key={index}>
                        {/* Display quiz details */}
                        <p>{quiz.title}</p>
                        {/* Add more details as per your requirements */}
                    </div>
                ))}
            </div>
            <div>
                <h2>Take Quiz</h2>
                <input
                    type="text"
                    value={quizToken}
                    onChange={(e) => setQuizToken(e.target.value)}
                    placeholder="Enter quiz token"
                />
                <button onClick={handleQuizSubmission}>Submit</button>
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
    );
};

export default Student;