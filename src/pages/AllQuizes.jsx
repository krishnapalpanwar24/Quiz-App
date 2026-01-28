import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export default function AllQuizes() {
  const [quizzes, setQuizzes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("ALL");

<<<<<<< HEAD
  // 🔹 Fetch quizzes from Firebase
=======

>>>>>>> 37eeedd0c44772c9447a6a7362a269b95847ba82
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
    };

    fetchQuizzes();
  }, []);

<<<<<<< HEAD
  // 🔹 Get unique categories for dropdown
=======
  
>>>>>>> 37eeedd0c44772c9447a6a7362a269b95847ba82
  const categories = [
    "ALL",
    ...new Set(quizzes.map((q) => q.category)),
  ];

<<<<<<< HEAD
  // 🔹 Filter quizzes by category
=======
  
>>>>>>> 37eeedd0c44772c9447a6a7362a269b95847ba82
  const filteredQuizzes =
    selectedCategory === "ALL"
      ? quizzes
      : quizzes.filter((q) => q.category === selectedCategory);

  if (loading) return <p className="text-center mt-5">Loading quizzes...</p>;

  return (
    <div className="container mt-4">
      <h3 className="mb-4 text-center">All Quizzes</h3>

<<<<<<< HEAD
      {/* 🔽 CATEGORY DROPDOWN */}
=======
      
>>>>>>> 37eeedd0c44772c9447a6a7362a269b95847ba82
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

<<<<<<< HEAD
      {/* ❌ NO QUIZZES */}
=======
      
>>>>>>> 37eeedd0c44772c9447a6a7362a269b95847ba82
      {filteredQuizzes.length === 0 && (
        <p className="text-muted text-center">
          No quizzes available for this category
        </p>
      )}

<<<<<<< HEAD
      {/* ✅ QUIZ LIST */}
=======
>>>>>>> 37eeedd0c44772c9447a6a7362a269b95847ba82
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
    </div>
  );
}
