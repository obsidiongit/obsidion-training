"use client";

import { useState } from "react";
import { QUIZ_DATA } from "@/data/quiz-data";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";
import { CheckCircle2, XCircle, RotateCcw } from "lucide-react";

export function Quiz() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSelect = (questionId: number, optionIndex: number) => {
    if (isSubmitted) return;
    setAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));
  };

  const calculateScore = () => {
    let score = 0;
    QUIZ_DATA.forEach((q) => {
      if (answers[q.id] === q.correctAnswer) {
        score++;
      }
    });
    return score;
  };

  const score = calculateScore();
  const percentage = Math.round((score / QUIZ_DATA.length) * 100);
  const passed = score >= 9;

  const handleSubmit = () => {
    if (Object.keys(answers).length < QUIZ_DATA.length) {
      alert("Please answer all questions before submitting.");
      return;
    }
    setIsSubmitted(true);
    
    if (passed) {
      try {
        const saved = localStorage.getItem('obsidion-progress');
        const completed = saved ? JSON.parse(saved) : [];
        if (Array.isArray(completed) && !completed.includes(11)) {
          localStorage.setItem('obsidion-progress', JSON.stringify([...completed, 11]));
          window.dispatchEvent(new Event('progress-updated'));
        }
      } catch (e) {}
    }
  };

  const handleRetake = () => {
    setAnswers({});
    setIsSubmitted(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="space-y-8 max-w-3xl">
      {QUIZ_DATA.map((q, index) => {
        const selectedOption = answers[q.id];
        const isCorrect = selectedOption === q.correctAnswer;
        const showFeedback = isSubmitted;

        return (
          <Card
            key={q.id}
            className={cn(
              "transition-all",
              showFeedback && isCorrect && "border-emerald-accent/50 bg-emerald-accent/5",
              showFeedback && !isCorrect && "border-amber-accent/50 bg-amber-accent/5"
            )}
          >
            <div className="flex gap-4 mb-6">
              <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center font-bold text-sm shrink-0">
                {index + 1}
              </div>
              <h3 className="text-lg font-bold pt-1">{q.question}</h3>
            </div>

            <div className="space-y-3">
              {q.options.map((option, optIdx) => {
                const isSelected = selectedOption === optIdx;
                const isCorrectOption = optIdx === q.correctAnswer;
                
                let buttonStyle = "border hover:bg-muted";
                if (isSelected) buttonStyle = "border-accent bg-accent/10 font-medium";
                if (showFeedback) {
                  if (isCorrectOption) {
                    buttonStyle = "border-emerald-accent bg-emerald-accent/10 text-emerald-900 font-medium";
                  } else if (isSelected && !isCorrectOption) {
                    buttonStyle = "border-amber-accent bg-amber-accent/10 text-amber-900";
                  } else {
                    buttonStyle = "border opacity-50";
                  }
                }

                return (
                  <button
                    key={optIdx}
                    onClick={() => handleSelect(q.id, optIdx)}
                    disabled={isSubmitted}
                    className={cn(
                      "w-full text-left p-4 rounded-xl transition-all flex items-start gap-3",
                      buttonStyle
                    )}
                  >
                    <div className="pt-0.5 shrink-0">
                      {showFeedback && isCorrectOption && <CheckCircle2 className="w-5 h-5 text-emerald-accent" />}
                      {showFeedback && isSelected && !isCorrectOption && <XCircle className="w-5 h-5 text-amber-accent" />}
                      {(!showFeedback || (!isCorrectOption && !isSelected)) && (
                        <div className={cn(
                          "w-5 h-5 rounded-full border-2",
                          isSelected ? "border-accent bg-accent" : "border-muted-foreground/30"
                        )} />
                      )}
                    </div>
                    <span>{option}</span>
                  </button>
                );
              })}
            </div>

            {showFeedback && (
              <div className="mt-6 p-4 rounded-lg bg-background border text-sm leading-relaxed">
                <span className="font-bold block mb-1">Feedback:</span>
                {q.feedback}
              </div>
            )}
          </Card>
        );
      })}

      {!isSubmitted ? (
        <div className="flex justify-end pt-4 border-t">
          <button
            onClick={handleSubmit}
            className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-full font-bold transition-colors"
          >
            Submit Quiz
          </button>
        </div>
      ) : (
        <div className="pt-8 border-t flex flex-col items-center">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-black mb-2">Quiz Results</h2>
            <div className={cn(
              "text-5xl font-black mb-4",
              passed ? "text-emerald-accent" : "text-amber-accent"
            )}>
              {percentage}%
            </div>
            <p className="text-xl font-medium">
              {passed 
                ? "Excellent! You have successfully mastered the Cannabis Playbook." 
                : "You didn't quite hit the passing mark (9/12). Review the playbook and try again."}
            </p>
          </div>
          
          <button
            onClick={handleRetake}
            className="flex items-center gap-2 bg-muted hover:bg-muted/80 text-foreground px-6 py-3 rounded-full font-bold transition-colors"
          >
            <RotateCcw className="w-5 h-5" />
            Retake Quiz
          </button>
        </div>
      )}
    </div>
  );
}
