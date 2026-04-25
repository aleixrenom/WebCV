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

  const resetQuiz = () => {
    localStorage.removeItem("quizProgress");
    setQuestions([]);
    setCurrentIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setShowResults(false);
    // Re-randomize
    const shuffled = [...vocabData].sort(() => Math.random() - 0.5);
    const randomized = randomizeQuestions(shuffled);
    setQuestions(randomized);
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
          className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
        >
          <div className="flex flex-row">
            <div className="mb-4 w-full">
              <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{
                    width: `${((currentIndex + 1) / questions.length) * 100}%`,
                  }}
                ></div>
              </div>
              <p className="text-sm text-gray-600">
                Question {currentIndex + 1} of {questions.length}
              </p>
            </div>
            <motion.button
              onClick={resetQuiz}
              className="text-blue-500 h-8 w-1/2"
            >
              Restart quiz
            </motion.button>
          </div>
          <h2 className="text-xl font-semibold mb-6 text-center">
            {currentQuestion.word}
          </h2>
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
