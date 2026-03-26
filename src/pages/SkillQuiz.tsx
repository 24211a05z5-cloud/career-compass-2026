import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useSkills } from "@/context/SkillsContext";
import { skillQuizzes } from "@/data/skillQuizzes";
import { ArrowLeft, CheckCircle2, ClipboardCheck } from "lucide-react";

export default function SkillQuiz() {
  const { skillName } = useParams<{ skillName: string }>();
  const navigate = useNavigate();
  const { updateSkill, addSkill, skills } = useSkills();
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResult, setShowResult] = useState(false);

  const decodedSkill = decodeURIComponent(skillName || "");
  const quiz = skillQuizzes[decodedSkill] || [];

  if (!quiz.length) {
    return (
      <div className="min-h-screen p-6 flex flex-col items-center justify-center">
        <p className="text-muted-foreground mb-4">No quiz available for "{decodedSkill}"</p>
        <Button onClick={() => navigate("/skills")}>Back to Skills</Button>
      </div>
    );
  }

  const handleAnswer = (idx: number) => {
    setAnswers((prev) => ({ ...prev, [currentQ]: idx }));
  };

  const handleNext = () => {
    if (currentQ < quiz.length - 1) {
      setCurrentQ((p) => p + 1);
    } else {
      setShowResult(true);
    }
  };

  const getScore = () => {
    let correct = 0;
    Object.entries(answers).forEach(([qIdx, aIdx]) => {
      if (quiz[Number(qIdx)].correctIndex === aIdx) correct++;
    });
    const pct = correct / quiz.length;
    const rating = pct >= 0.8 ? 9 : pct >= 0.5 ? 6 : 3;
    const level = pct >= 0.8 ? "Advanced" : pct >= 0.5 ? "Intermediate" : "Beginner";
    return { correct, total: quiz.length, rating, level };
  };

  const score = showResult ? getScore() : null;

  const handleApplyAndReturn = () => {
    if (score) {
      if (skills[decodedSkill] !== undefined) {
        updateSkill(decodedSkill, score.rating);
      } else {
        addSkill(decodedSkill, score.rating);
      }
      navigate("/skills");
    }
  };

  return (
    <div className="min-h-screen p-6">
      <header className="max-w-3xl mx-auto mb-8">
        <Button variant="ghost" size="sm" onClick={() => navigate("/skills")}>
          <ArrowLeft className="h-4 w-4 mr-1" /> Back to Skills
        </Button>
      </header>

      <div className="max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            <ClipboardCheck className="h-4 w-4" /> Skill Assessment
          </div>
          <h1 className="text-3xl font-display font-bold mb-2">
            Assess <span className="text-gradient">{decodedSkill}</span>
          </h1>
          <p className="text-muted-foreground">Answer {quiz.length} questions to determine your level</p>
        </motion.div>

        {!showResult ? (
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQ}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-2 mb-6">
                {quiz.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1.5 flex-1 rounded-full transition-colors ${i <= currentQ ? "bg-accent" : "bg-muted"}`}
                  />
                ))}
              </div>

              <Card className="glass-card border-0">
                <CardContent className="p-8">
                  <p className="text-sm text-muted-foreground mb-1">
                    {decodedSkill} — Question {currentQ + 1} of {quiz.length}
                  </p>
                  <h2 className="text-xl font-display font-semibold mb-6">{quiz[currentQ].question}</h2>

                  <RadioGroup
                    value={answers[currentQ] !== undefined ? String(answers[currentQ]) : undefined}
                    onValueChange={(val) => handleAnswer(Number(val))}
                    className="space-y-3"
                  >
                    {quiz[currentQ].options.map((opt, idx) => (
                      <Label
                        key={idx}
                        htmlFor={`q${currentQ}-o${idx}`}
                        className={`flex items-center gap-3 p-4 rounded-lg border cursor-pointer transition-all ${
                          answers[currentQ] === idx ? "border-accent bg-accent/10" : "border-border hover:border-accent/50"
                        }`}
                      >
                        <RadioGroupItem value={String(idx)} id={`q${currentQ}-o${idx}`} />
                        <span className="text-sm">{opt}</span>
                      </Label>
                    ))}
                  </RadioGroup>

                  <div className="flex justify-between mt-8">
                    <Button variant="ghost" size="sm" disabled={currentQ === 0} onClick={() => setCurrentQ((p) => p - 1)}>
                      <ArrowLeft className="h-4 w-4 mr-1" /> Previous
                    </Button>
                    <Button size="sm" disabled={answers[currentQ] === undefined} onClick={handleNext}>
                      {currentQ === quiz.length - 1 ? "Submit" : "Next"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
        ) : (
          score && (
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <Card className="glass-card border-0 mb-6">
                <CardContent className="p-8 text-center">
                  <CheckCircle2 className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h2 className="text-2xl font-display font-bold mb-2">Assessment Complete</h2>
                  <p className="text-muted-foreground mb-4">
                    You answered {score.correct} out of {score.total} correctly
                  </p>
                  <div className="inline-block bg-accent/10 rounded-xl px-6 py-4">
                    <p className="text-sm text-muted-foreground">Your proficiency in {decodedSkill}</p>
                    <p className="text-4xl font-display font-bold text-gradient mt-1">{score.rating}/10</p>
                    <p className="text-sm text-accent font-medium mt-1">{score.level}</p>
                  </div>
                </CardContent>
              </Card>

              <div className="flex gap-3 justify-center flex-wrap">
                <Button onClick={handleApplyAndReturn}>
                  <CheckCircle2 className="h-4 w-4 mr-1" /> Apply Score & Return
                </Button>
                <Button variant="outline" onClick={() => navigate("/skills")}>
                  Back to Skills
                </Button>
              </div>
            </motion.div>
          )
        )}
      </div>
    </div>
  );
}
