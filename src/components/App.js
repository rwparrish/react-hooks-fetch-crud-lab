import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then(resp => resp.json())
      .then(data => setQuestions(data))
  }, [])

  const handleAddQuestion = (newQuestion) => {
    setQuestions([...questions, newQuestion])
  }
  
  const handleDeleteQuestion = (deletedQuestion) => {
    const updatedQuestions = questions.filter((q) => {
      return q !== deletedQuestion
    })
    setQuestions(updatedQuestions)
  }

  const handleUpdateQuestion = (updatedQuestion) => {
    const updatedQuestions = questions.map((q) => {
      if (q.id === updatedQuestion.id) {
        return updatedQuestion
      } else {
        return q
      }
    })
    setQuestions(updatedQuestions)
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {
        page === "Form" ? 
          <QuestionForm onAddQuestion={handleAddQuestion} /> : 
          <QuestionList questions={questions} onDeleteQuestion={handleDeleteQuestion} onUpdateQuestion={handleUpdateQuestion} />
      }
    </main>
  );
}

export default App;
