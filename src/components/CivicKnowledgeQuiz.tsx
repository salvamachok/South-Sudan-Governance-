import React, { useState } from 'react';
import { CIVIC_QUIZ_QUESTIONS } from '../data/southSudanData';
import { CheckCircle2, XCircle, RotateCcw, Award } from 'lucide-react';

export const CivicKnowledgeQuiz: React.FC = () => {
  const [selectedAnswers, setSelectedAnswers] = useState<{ [questionId: number]: number }>({});
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSelectOption = (questionId: number, optionIndex: number) => {
    if (submitted) return;
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: optionIndex
    }));
  };

  const calculateScore = () => {
    let score = 0;
    CIVIC_QUIZ_QUESTIONS.forEach(q => {
      if (selectedAnswers[q.id] === q.correctIndex) {
        score += 1;
      }
    });
    return score;
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setSubmitted(false);
  };

  const score = calculateScore();
  const allAnswered = Object.keys(selectedAnswers).length === CIVIC_QUIZ_QUESTIONS.length;

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      {/* Title */}
      <div>
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-stone-500">
          <span>Civic Education & Assessment</span>
          <span aria-hidden="true">·</span>
          <span>Knowledge Check</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-serif-display font-semibold text-stone-900 mt-1">
          South Sudan Civic & Parliamentary Knowledge Test
        </h2>
        <p className="mt-2 text-stone-600 leading-relaxed font-sans-body">
          Test your comprehension of the National Legislature (TNLA), Council of States, 
          the 10 States, 3 Special Administrative Areas, and the County-Payam-Boma decentralized system.
        </p>
      </div>

      {/* Score Banner if Submitted */}
      {submitted && (
        <div className="p-6 bg-stone-900 text-stone-100 rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-amber-400 text-stone-950 flex items-center justify-center font-bold text-lg font-mono">
              {score}
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg text-white">
                Test Completed: {score} out of {CIVIC_QUIZ_QUESTIONS.length} Correct
              </h3>
              <p className="text-xs text-stone-300">
                {score === CIVIC_QUIZ_QUESTIONS.length 
                  ? 'Exemplary civic mastery of South Sudan constitutional governance!' 
                  : 'Review the explanations below each question to deepen your understanding.'}
              </p>
            </div>
          </div>
          <button
            onClick={handleReset}
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold bg-stone-800 hover:bg-stone-700 text-white rounded transition-colors whitespace-nowrap self-start sm:self-auto"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Retake Quiz</span>
          </button>
        </div>
      )}

      {/* Questions List */}
      <div className="space-y-6">
        {CIVIC_QUIZ_QUESTIONS.map((q, idx) => {
          const userAnswer = selectedAnswers[q.id];
          const isAnswered = userAnswer !== undefined;
          const isCorrect = userAnswer === q.correctIndex;

          return (
            <div key={q.id} className="bg-white border border-stone-200 rounded-lg p-6 space-y-4">
              <div className="flex items-start justify-between gap-4">
                <span className="text-xs font-mono font-bold text-amber-800">
                  Question {idx + 1} of {CIVIC_QUIZ_QUESTIONS.length}
                </span>
                {submitted && (
                  <span className={`text-xs font-mono font-bold flex items-center gap-1 ${isCorrect ? 'text-emerald-700' : 'text-red-700'}`}>
                    {isCorrect ? <CheckCircle2 className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
                    {isCorrect ? 'Correct' : 'Incorrect'}
                  </span>
                )}
              </div>

              <h3 className="font-serif font-bold text-stone-900 text-base leading-snug">
                {q.question}
              </h3>

              {/* Options */}
              <div className="space-y-2">
                {q.options.map((option, optIdx) => {
                  const isSelected = userAnswer === optIdx;
                  let optionStyle = 'bg-stone-50 hover:bg-stone-100/80 border-stone-200 text-stone-800';

                  if (submitted) {
                    if (optIdx === q.correctIndex) {
                      optionStyle = 'bg-emerald-50 border-emerald-300 text-emerald-950 font-semibold ring-1 ring-emerald-300';
                    } else if (isSelected && !isCorrect) {
                      optionStyle = 'bg-red-50 border-red-300 text-red-950 line-through ring-1 ring-red-300';
                    } else {
                      optionStyle = 'bg-stone-50/50 border-stone-200 text-stone-400';
                    }
                  } else if (isSelected) {
                    optionStyle = 'bg-stone-900 text-white border-stone-900 shadow-xs';
                  }

                  return (
                    <button
                      key={optIdx}
                      onClick={() => handleSelectOption(q.id, optIdx)}
                      disabled={submitted}
                      className={`w-full text-left p-3 rounded text-xs transition-colors border flex items-center justify-between ${optionStyle}`}
                    >
                      <span>{option}</span>
                      <span className="w-4 h-4 rounded-full border border-current opacity-60 flex items-center justify-center text-[10px]">
                        {String.fromCharCode(65 + optIdx)}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Explanation note when submitted */}
              {submitted && (
                <div className="mt-3 p-3 bg-stone-50 rounded border border-stone-200 text-xs text-stone-700">
                  <span className="font-bold text-stone-900 block mb-0.5">Explanation:</span>
                  {q.explanation}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Submit Action */}
      {!submitted && (
        <div className="flex items-center justify-between pt-4">
          <span className="text-xs text-stone-500 font-mono">
            {Object.keys(selectedAnswers).length} of {CIVIC_QUIZ_QUESTIONS.length} questions answered
          </span>
          <button
            onClick={() => setSubmitted(true)}
            disabled={!allAnswered}
            className={`px-6 py-2.5 text-xs sm:text-sm font-semibold rounded transition-colors whitespace-nowrap ${
              allAnswered
                ? 'bg-stone-900 text-white hover:bg-stone-800 shadow-sm cursor-pointer'
                : 'bg-stone-200 text-stone-400 cursor-not-allowed'
            }`}
          >
            Submit Answers & Check Score
          </button>
        </div>
      )}
    </div>
  );
};
