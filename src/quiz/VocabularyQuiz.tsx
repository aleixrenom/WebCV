import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Howl } from "howler";
import vocabData from "./vocabData.json";

interface Question {
  word: string;
  correct: string;
  options: string[];
}

const VocabularyQuiz: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  // Sounds
  const correctSound = new Howl({ src: ["/sounds/correct.mp3"] });
  const incorrectSound = new Howl({ src: ["/sounds/incorrect.mp3"] });

  // Helper function to shuffle an array
  const shuffleArray = useCallback((array: string[]): string[] => {
    return [...array].sort(() => Math.random() - 0.5);
  }, []);

  // Helper function to randomize options for each question
  const randomizeQuestions = useCallback(
    (questions: Question[]): Question[] => {
      return questions.map((question) => ({
        ...question,
        options: shuffleArray(question.options),
      }));
    },
    [shuffleArray],
  );

  useEffect(() => {
    const storedProgress = localStorage.getItem("quizProgress");
    if (storedProgress) {
      const progress = JSON.parse(storedProgress);
      setQuestions(progress.questions);
      setCurrentIndex(progress.currentIndex);
      setScore(progress.score);
    } else {
      // Randomize questions and their options
      const shuffled = [...vocabData].sort(() => Math.random() - 0.5);
      const randomized = randomizeQuestions(shuffled);
      setQuestions(randomized);
      localStorage.setItem(
        "quizProgress",
        JSON.stringify({
          questions: randomized,
          currentIndex: 0,
          score: 0,
        }),
      );
    }
  }, [randomizeQuestions]);

  const handleAnswerSelect = (answer: string) => {
    if (isAnswered) return;
    setSelectedAnswer(answer);
    setIsAnswered(true);
    const isCorrect = answer === questions[currentIndex].correct;
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
      correctSound.play();
      // Auto-advance after 1 second
      setTimeout(() => {
        handleNext();
      }, 1000);
    } else {
      incorrectSound.play();
      // Auto-advance after 1.5 seconds
      setTimeout(() => {
        handleNext();
      }, 1500);
    }
  };

  const handleNext = () => {
    const nextIndex = currentIndex + 1;
    if (nextIndex < questions.length) {
      setCurrentIndex(nextIndex);
      setSelectedAnswer(null);
      setIsAnswered(false);
      // Update localStorage
      localStorage.setItem(
        "quizProgress",
        JSON.stringify({
          questions,
          currentIndex: nextIndex,
          score,
        }),
      );
    } else {
      setShowResults(true);
      localStorage.removeItem("quizProgress"); // Clear on completion
    }
  };

  const cancelReset = () => {
    setShowResetConfirm(false);
  };

  const resetQuiz = () => {
    localStorage.removeItem("quizProgress");
    setQuestions([]);
    setCurrentIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setShowResults(false);
    setShowResetConfirm(false);
    // Re-randomize
    const shuffled = [...vocabData].sort(() => Math.random() - 0.5);
    const randomized = randomizeQuestions(shuffled);
    setQuestions(randomized);
  };

  const handleResetClick = () => {
    setShowResetConfirm(true);
  };

  if (questions.length === 0) return <div>Loading...</div>;

  if (showResults) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen flex items-center justify-center bg-gray-100 p-4"
      >
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Quiz Complete!</h2>
          <p className="text-lg mb-4">
            Your score: {score} / {questions.length}
          </p>
          <button
            onClick={resetQuiz}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Restart Quiz
          </button>
        </div>
      </motion.div>
    );
  }

  const currentQuestion = questions[currentIndex];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
        >
          <div className="flex items-center justify-between gap-4 mb-4">
            <p className="text-sm text-gray-600 font-medium">
              {currentIndex + 1} / {questions.length}
            </p>
            <h2 className="flex-1 text-center text-xl font-semibold">
              {currentQuestion.word}
            </h2>
            <motion.button
              onClick={handleResetClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full text-blue-500 transition-colors hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-200"
              aria-label="Reset quiz"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="23 4 23 10 17 10" />
                <polyline points="1 20 1 14 7 14" />
                <path d="M3.51 9a9 9 0 0114.13-3.36L23 10" />
                <path d="M20.49 15a9 9 0 01-14.13 3.36L1 14" />
              </svg>
            </motion.button>
          </div>
          {showResetConfirm && (
            <div className="mb-4 rounded-lg border border-blue-100 bg-blue-50 px-3 py-3 text-sm text-blue-700">
              <div className="flex items-center justify-between gap-3">
                <span>Reset quiz and lose current progress?</span>
                <div className="flex gap-2">
                  <button
                    onClick={cancelReset}
                    className="rounded border border-blue-200 px-2 py-1 text-blue-700 hover:bg-blue-100"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={resetQuiz}
                    className="rounded bg-blue-500 px-2 py-1 text-white hover:bg-blue-600"
                  >
                    Reset
                  </button>
                </div>
              </div>
            </div>
          )}
          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => (
              <motion.button
                key={index}
                onClick={() => handleAnswerSelect(option)}
                disabled={isAnswered}
                className={`w-full p-3 rounded-lg border-2 transition-colors ${
                  selectedAnswer === option
                    ? option === currentQuestion.correct
                      ? "bg-green-100 border-green-500"
                      : "bg-red-100 border-red-500"
                    : isAnswered &&
                        option === currentQuestion.correct &&
                        selectedAnswer !== currentQuestion.correct
                      ? "bg-green-100 border-green-500"
                      : "bg-white border-gray-300 hover:border-gray-400"
                }`}
                whileHover={!isAnswered ? { scale: 1.02 } : {}}
                whileTap={!isAnswered ? { scale: 0.98 } : {}}
              >
                {option}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default VocabularyQuiz;
