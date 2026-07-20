import { useState } from 'react';
import { QuizAnswers, QuizResult } from '../types';

const INITIAL_ANSWERS: QuizAnswers = { category: '', timeframe: '', evidence: '', lossValue: '' };

export function useQuiz() {
  const [quizStep, setQuizStep] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<QuizAnswers>(INITIAL_ANSWERS);
  const [quizResult, setQuizResult] = useState<QuizResult | null>(null);

  const evaluateCaseViability = (answers: QuizAnswers) => {
    const { timeframe, evidence, lossValue } = answers;
    let score = 0;
    if (timeframe === 'recent') score += 3;
    else if (timeframe === 'mid') score += 2;
    if (evidence === 'strong') score += 4;
    else if (evidence === 'partial') score += 2;
    if (lossValue === 'high') score += 3;
    else if (lossValue === 'medium') score += 2;
    else if (lossValue === 'low') score += 1;

    let title: string, recommendation: string, badgeColor: string;
    if (score >= 8) {
      title = "Excellent Case Prospects";
      badgeColor = "bg-emerald-500/10 text-emerald-500 border-emerald-500/20";
      recommendation = "Our analysis shows high document backing and active statute of limitations. We recommend an urgent 30-minute Partner Review Strategy Call immediately.";
    } else if (score >= 5) {
      title = "Moderate Case Viability";
      badgeColor = "bg-amber-500/10 text-amber-500 border-amber-500/20";
      recommendation = "Your dispute has clear merits, but requires structured discovery. A senior associate should audit your documentation. Recommended step: standard consultation.";
    } else {
      title = "Complex Legal Obstacles";
      badgeColor = "bg-rose-500/10 text-rose-500 border-rose-500/20";
      recommendation = "Either time limitations or lack of documentary evidence present hurdles. We suggest scheduling a direct regulatory consultation to analyze non-litigious workarounds.";
    }

    setQuizResult({ score, title, recommendation, badgeColor });
    setQuizStep(4);
  };

  const handleQuizAnswer = (key: keyof QuizAnswers, value: string) => {
    const updated = { ...quizAnswers, [key]: value };
    setQuizAnswers(updated);
    if (key === 'category') setQuizStep(1);
    else if (key === 'timeframe') setQuizStep(2);
    else if (key === 'evidence') setQuizStep(3);
    else if (key === 'lossValue') evaluateCaseViability(updated);
  };

  const resetQuiz = () => {
    setQuizStep(0);
    setQuizAnswers(INITIAL_ANSWERS);
    setQuizResult(null);
  };

  return { quizStep, quizAnswers, quizResult, handleQuizAnswer, resetQuiz };
}
