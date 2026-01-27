import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";

export default function AddQuiz() {
  const [category, setCategory] = useState("");
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [correctAnswer, setCorrectAnswer] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!category || !question || options.includes("") || !correctAnswer) {
      alert("Please fill all fields");
      return;
    }

    try {
      await addDoc(collection(db, "quizzes"), {
        category: category.trim(),
        question,
        options,
        correctAnswer,
        createdAt: new Date()
      });

      alert("Quiz Added Successfully ");

      setCategory("");
      setQuestion("");
      setOptions(["", "", "", ""]);
      setCorrectAnswer("");
    } catch (error) {
      console.error("Error adding quiz:", error);
    }
  };

  return (
    <div className="container">
      <h3 className="mb-3">Add Quiz</h3>

      <form onSubmit={submitHandler} className="card p-4 shadow">
        <input
          className="form-control mb-3"
          placeholder="Category (HTML, CSS, JS, React)"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <input
          className="form-control mb-3"
          placeholder="Question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />

        {options.map((opt, i) => (
          <input
            key={i}
            className="form-control mb-2"
            placeholder={`Option ${i + 1}`}
            value={opt}
            onChange={(e) => {
              const copy = [...options];
              copy[i] = e.target.value;
              setOptions(copy);
            }}
          />
        ))}

        <select
          className="form-control mb-3"
          value={correctAnswer}
          onChange={(e) => setCorrectAnswer(e.target.value)}
        >
          <option value="">Select Correct Answer</option>
          {options.map((opt, i) => (
            <option key={i} value={opt}>
              {opt || `Option ${i + 1}`}
            </option>
          ))}
        </select>

        <button className="btn btn-success w-100">
          Add Quiz
        </button>
      </form>
    </div>
  );
}
