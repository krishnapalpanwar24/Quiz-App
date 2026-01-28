import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

<<<<<<< HEAD
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
=======
export default function AllQuizes() {
  const [quizzes, setQuizzes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("ALL");


  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const snapshot = await getDocs(collection(db, "quizzes"));
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setQuizzes(data);
      } catch (error) {
        console.error("Error fetching quizzes:", error);
      } finally {
        setLoading(false);
      }
>>>>>>> 37eeedd0c44772c9447a6a7362a269b95847ba82
    };

    fetchQuizzes();
  }, []);

<<<<<<< HEAD
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
=======
  
  const categories = [
    "ALL",
    ...new Set(quizzes.map((q) => q.category)),
  ];

  
  const filteredQuizzes =
    selectedCategory === "ALL"
      ? quizzes
      : quizzes.filter((q) => q.category === selectedCategory);

  if (loading) return <p className="text-center mt-5">Loading quizzes...</p>;

  return (
    <div className="container mt-4">
      <h3 className="mb-4 text-center">All Quizzes</h3>

      
      <div className="mb-4 text-center">
        <select
          className="form-select w-50 mx-auto"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((cat, i) => (
            <option key={i} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      
      {filteredQuizzes.length === 0 && (
        <p className="text-muted text-center">
          No quizzes available for this category
        </p>
      )}

      {filteredQuizzes.map((q, index) => (
        <div key={q.id} className="card mb-3 shadow-sm">
          <div className="card-body">
            <h6 className="text-primary">
              {index + 1}. {q.question}
            </h6>

            <p>
              <strong>Category:</strong>{" "}
              <span className="badge bg-secondary">
                {q.category}
              </span>
            </p>

            <ul className="list-group mb-2">
              {q.options.map((opt, i) => (
                <li
                  key={i}
                  className={`list-group-item ${
                    opt === q.correctAnswer
                      ? "list-group-item-success"
                      : ""
                  }`}
                >
                  {opt}
                </li>
              ))}
            </ul>

            <small className="text-success">
              Correct Answer: {q.correctAnswer}
            </small>
          </div>
        </div>
      ))}
>>>>>>> 37eeedd0c44772c9447a6a7362a269b95847ba82
    </div>
  );
}
