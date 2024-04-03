import React,{useState} from 'react'
import { quiz } from '../questions'
import './Quiz.css'
const Quiz = () => {
    const [activeQuestion, setActiveQuestion] = useState(0)
    const [selectedAnswer, setSelectedAnswer] = useState('')
    const [showResult, setShowResult] = useState(false)
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null)
    const [result, setResult] = useState({
      score: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
    })
   

    const { questions } =  quiz
    // destructuring

    const {question, choices} = questions[activeQuestion]
    // old  
    //  const onClickNext = () => {
    //      // again reset the selectedAnwerIndex, so it won't effect next question
    //     setSelectedAnswerIndex(null)
    //     //original is setActivequestion we added soemthing above and below
    //     setActiveQuestion((prev) => prev + 1)
    //     // new addition down below
    //     setResult((prev) =>
    //      selectedAnswer
    //       ? {
    //         ...prev,
    //         score: prev.score + 5,
    //         correctAnswers: prev.correctAnswers + 1,
    //         }
    //       : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
    //     )
    // }
   
    const onClickNext = () => {
        setSelectedAnswerIndex(null)
        setResult((prev) =>
          selectedAnswer
            ? {
                ...prev,
                score: prev.score + 5,
                correctAnswers: prev.correctAnswers + 1,
              }
            : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
        )
        if (activeQuestion !== questions.length - 1) {
          setActiveQuestion((prev) => prev + 1)
        } else {
          setActiveQuestion(0)
          setShowResult(true)
        }
    }


    //old
    // const onAnswerSelected = (answer) => {
    //     if (answer === question.correctAnswers) {
    //       setSelectedAnswer(true)
    //       console.log('right')
    //     } else {
    //       setSelectedAnswer(false)
    //       console.log('wrong')
    //     }
    // }
    const onAnswerSelected = (answer, index) => {
        setSelectedAnswerIndex(index)
        if (answer === question.correctAnswer) {
          setSelectedAnswer(true)
        } else {
          setSelectedAnswer(false)
        }
    }
      
    const addLeadingZero = (number) => (number > 9 ? number : `0${number}`)
     // og version 
    // return (
    //     <div className="quiz-container">
    //       <div>
    //         {/* replacing this with what belown<h1>Quiz</h1> */}
    //         <span className="active-question-no">{addLeadingZero(activeQuestion + 1)}</span>
    //         <span className="total-question">/{addLeadingZero(questions.length)}</span>
    //       </div>
    //       {/* old 
    //       <h2>{questions[activeQuestion].question}</h2> */}

    //       <h2>{question}</h2>
    //       <ul>
    //         {/* old one 
    //          {choices.map((item) => (
    //         <li>{item}</li>
    //         ))}
    //         */}
    //         {/* old one.2
    //          {choices.map((answer) => (
    //           <li onClick={() => onAnswerSelected(answer)} key={answer}>
    //             {answer}
    //           </li>
    //         ))} */}
    //         {choices.map((answer, index) => (
    //             <li
    //             onClick={() => onAnswerSelected(answer, index)}
    //             key={answer}
    //             className={selectedAnswerIndex === index ? 'selected-answer' : null}>
    //             {answer}
    //             </li>
    //         ))}
    //       </ul>
    //       {/* old one <button onClick={onClickNext}>Next</button> */}
    //       {/* old one .2 <button onClick={onClickNext}>{activeQuestion === questions.length - 1 ? 'Finish' : 'Next'}</button> */}
    //       <div className="flex-right">
    //             <button onClick={onClickNext} disabled={selectedAnswerIndex === null}>
    //             {activeQuestion === questions.length - 1 ? 'Finish' : 'Next'}
    //             </button>
    //       </div>
    //     </div>
    
    // )

    return (
        <div className="quiz-container">
          {!showResult ? (
            <div>
              <div>
                <span className="active-question-no">{addLeadingZero(activeQuestion + 1)}</span>
                <span className="total-question">/{addLeadingZero(questions.length)}</span>
              </div>
              <h2>{question}</h2>
              <ul>
                {choices.map((answer, index) => (
                  <li
                    onClick={() => onAnswerSelected(answer, index)}
                    key={answer}
                    className={selectedAnswerIndex === index ? 'selected-answer' : null}>
                    {answer}
                  </li>
                ))}
              </ul>
              <div className="flex-right">
                <button onClick={onClickNext} disabled={selectedAnswerIndex === null}>
                  {activeQuestion === questions.length - 1 ? 'Finish' : 'Next'}
                </button>
              </div>
            </div>
          ) : (
            <div className="result">
              <h3>Result</h3>
              <p>
                Total Question: <span>{questions.length}</span>
              </p>
              <p>
                Total Score:<span> {result.score}</span>
              </p>
              <p>
                Correct Answers:<span> {result.correctAnswers}</span>
              </p>
              <p>
                Wrong Answers:<span> {result.wrongAnswers}</span>
              </p>
            </div>
          )}
        </div>
      )
}

export default Quiz