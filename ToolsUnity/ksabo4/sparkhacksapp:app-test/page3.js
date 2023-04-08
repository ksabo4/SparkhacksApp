import React, { useState } from 'react';
import './App.css';
//import NavBar from './components/NavBar.js'
import Sidebar from './components/Sidebar.js'

const users = [
  {username : "Dave704"} , 
  {username : "TheSawMan"},
  {username : "Builder17"},
  {username : "CraftsmanCalvin89"}
]
const questions = [
  { id: 'question-1', title: 'Best budget power drill?', content: "Hello,i'm looking for the best budget power drill", user: users[0]},
  { id: 'question-2', title: 'Tools to make a wooden table?', content : "Hi, I wanted to make a wooden table for my son's birthday", user : users[1]},
  { id: 'question-4', title: 'Anyone have a circular saw?', content : "placeholder", user : users[2]},
  { id: 'question-5', title: 'Custom made tools?', content : "placeholder", user : users[3]},
];



function App() {
  const [selectedQuestionId, setSelectedQuestionId] = useState(null);

  const handleQuestionClick = (questionId) => {
    setSelectedQuestionId(questionId);
  }


  return (
    <div className="App">
      <Sidebar questions = {questions} selectedQuestionId = {selectedQuestionId} onQuestionClick={handleQuestionClick}/>
      <QuestionDisplay questions = {questions} selectedQuestionId={selectedQuestionId} />
    </div>
  )
  }

  function QuestionDisplay({ questions, selectedQuestionId }) {
    const selectedQuestion = questions.find(
      (question) => question.id === selectedQuestionId
    );
  
    return (
      <div className='question-container'>
        {selectedQuestion ? (
          //display question
          <div>
            <h1 style = {{"text-align" : "center"}}> { selectedQuestion.title}</h1>
            <p className = 'question'>{selectedQuestion.user.username}: {selectedQuestion.content}</p>
            <input type="text" value = "text"/>
          </div> 
        ) : (
          <p>Please select a question from the sidebar.</p>
        )}
      </div>
    );
  }

  function ResponseBox() {
    return (
      <div>
        <p>Reply to post:</p>
        
      </div>
    )
  }

export default App;
