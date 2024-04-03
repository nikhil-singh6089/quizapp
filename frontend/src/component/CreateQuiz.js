import React, { useState } from 'react';
import {
  TextField,
  Button,
  Typography,
  Container,
  Box,
  Paper,
} from '@material-ui/core';
import fs from 'fs';
import path from 'path';

const CreateQuiz = () => {
  const [topic, setTopic] = useState('');
  const [level, setLevel] = useState('');
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [perQuestionScore, setPerQuestionScore] = useState(0);
  const [questions, setQuestions] = useState([]);

  const handleTopicChange = (e) => setTopic(e.target.value);
  const handleLevelChange = (e) => setLevel(e.target.value);
  const handleTotalQuestionsChange = (e) => setTotalQuestions(parseInt(e.target.value));
  const handlePerQuestionScoreChange = (e) => setPerQuestionScore(parseInt(e.target.value));

  const handleQuestionChange = (index, field, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index][field] = value;
    setQuestions(updatedQuestions);
  };

  const addQuestion = () => {
    setQuestions([...questions, { question: '', choices: [], type: 'MCQs', correctAnswer: '' }]);
  };

  const removeQuestion = (index) => {
    const updatedQuestions = [...questions];
    updatedQuestions.splice(index, 1);
    setQuestions(updatedQuestions);
  };
  // const extractQuizObject = (fileContent) => {
  //   const exportRegex = /export const quiz = ({[\s\S]*?})/;
  //   const match = fileContent.match(exportRegex);

  //   if (match && match[1]) {
  //     return JSON.parse(match[1]);
  //   }

  //   return {};
  // };


  const handleSubmit = (e) => {
    e.preventDefault();
    // Update the questions.js file with the new quiz object
    const newQuiz = {
      topic,
      level,
      totalQuestions,
      perQuestionScore,
      questions,
    };
    // const questionsFilePath = path.join(__dirname, '../questions.js');

    // // Read the existing content of the questions.js file
    // const existingContent = fs.readFileSync(questionsFilePath, 'utf8');

    // // Parse the existing quiz object from the file
    // const existingQuiz = extractQuizObject(existingContent);

    // // Update the existing quiz object with the new data
    // const updatedQuiz = { ...existingQuiz, ...newQuiz };

    // // Convert the updated quiz object to a string
    // const updatedQuizString = `export const quiz = ${JSON.stringify(updatedQuiz, null, 2)}`;

    // // Write the updated quiz string to the questions.js file
    // fs.writeFileSync(questionsFilePath, updatedQuizString, 'utf8');

    // console.log('Quiz updated successfully!');
    // console.log('New quiz:', newQuiz);
  };


  return (
    <Container maxWidth="md">
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Typography variant="h4" gutterBottom>
          Create Quiz
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            label="Topic"
            variant="outlined"
            value={topic}
            onChange={handleTopicChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Level"
            variant="outlined"
            value={level}
            onChange={handleLevelChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Total Questions"
            variant="outlined"
            value={totalQuestions}
            onChange={handleTotalQuestionsChange}
            type="number"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Per Question Score"
            variant="outlined"
            value={perQuestionScore}
            onChange={handlePerQuestionScoreChange}
            type="number"
            fullWidth
            margin="normal"
          />
          <Typography variant="h5" gutterBottom>
            Questions
          </Typography>
          {questions.map((question, index) => (
            <Box key={index} mb={2}>
              <TextField
                label={`Question ${index + 1}`}
                variant="outlined"
                value={question.question}
                onChange={(e) => handleQuestionChange(index, 'question', e.target.value)}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Choices (comma-separated)"
                variant="outlined"
                value={question.choices.join(', ')}
                onChange={(e) => handleQuestionChange(index, 'choices', e.target.value.split(', '))}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Correct Answer"
                variant="outlined"
                value={question.correctAnswer}
                onChange={(e) => handleQuestionChange(index, 'correctAnswer', e.target.value)}
                fullWidth
                margin="normal"
              />
              <Button
                variant="contained"
                color="secondary"
                onClick={() => removeQuestion(index)}
                style={{ marginTop: '10px' }}
              >
                Remove Question
              </Button>
            </Box>
          ))}
          <Button variant="contained" color="primary" onClick={addQuestion}>
            Add Question
          </Button>
          <Box mt={2}>
            <Button variant="contained" color="primary" type="submit">
              Save Quiz
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default CreateQuiz;