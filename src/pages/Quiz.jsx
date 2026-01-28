import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export default function Quiz() {
  const [quizzes, setQuizzes] = useState([]);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const fetchQuizzes = async () => {
      const snapshot = await getDocs(collection(db, "quizzes"));
      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setQuizzes(data);
    };

    fetchQuizzes();
  }, []);

  const answerHandler = (opt) => {
    if (opt === quizzes[current].correctAnswer) {
      setScore(score + 1);
    }

    if (current + 1 < quizzes.length) {
      setCurrent(current + 1);
    } else {
      setFinished(true);
    }
  };

  if (quizzes.length === 0) {
    return <h4 className="text-center mt-5">Loading quizzes...</h4>;
  }

  if (finished) {
    return (
      <div className="container text-center mt-5">
        <h3>Quiz Completed </h3>
        <h4>Your Score: {score} / {quizzes.length}</h4>
      </div>
    );
  }

  const q = quizzes[current];

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow">
        <h5 className="mb-3">
          Question {current + 1} / {quizzes.length}
        </h5>

        <h4>{q.question}</h4>

        <div className="mt-3">
          {q.options.map((opt, i) => (
            <button
              key={i}
              className="btn btn-outline-primary w-100 mb-2"
              onClick={() => answerHandler(opt)}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
