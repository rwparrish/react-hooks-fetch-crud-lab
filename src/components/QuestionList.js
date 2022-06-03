import React from "react";
import QuestionItem from "./QuestionItem"

function QuestionList({questions, onDeleteQuestion}) {

  const questionsToDisplay = questions.map(q => <QuestionItem key={q.id} question={q} onDeleteQuestion={onDeleteQuestion} />)

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionsToDisplay}</ul>
    </section>
  );
}

export default QuestionList;
