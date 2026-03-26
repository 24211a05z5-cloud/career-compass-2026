import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useSkills } from "@/context/SkillsContext";
import { skillQuizzes } from "@/data/skillQuizzes";
import { ArrowLeft, CheckCircle2, ClipboardCheck, Plus } from "lucide-react";

const availableSkills = Object.keys(skillQuizzes);

export default function SkillAssessment() {
  const navigate = useNavigate();
  const { addSkill, skills } = useSkills();
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResult, setShowResult] = useState(false);
  const [added, setAdded] = useState(false);

  const quiz = selectedSkill ? skillQuizzes[selectedSkill] : [];

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
    const level = pct >= 0.8 ? "High" : pct >= 0.5 ? "Medium" : "Low";
    return { correct, total: quiz.length, rating, level };
  };

  const resetQuiz = () => {
    setSelectedSkill(null);
    setCurrentQ(0);
    setAnswers({});
    setShowResult(false);
    setAdded(false);
  };

  const score = showResult ? getScore() : null;

  return (
    <div className="min-h-screen p-6">
      <header className="max-w-3xl mx-auto mb-8">
        <Button variant="ghost" size="sm" onClick={() => (selectedSkill && !showResult ? resetQuiz() : navigate("/dashboard"))}>
          <ArrowLeft className="h-4 w-4 mr-1" /> {selectedSkill && !showResult ? "Back to Skills" : "Back to Dashboard"}
        </Button>
      </header>

      <div className="max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            <ClipboardCheck className="h-4 w-4" /> Skill Assessment
          </div>
          <h1 className="text-3xl font-display font-bold mb-2">
            Assess Your <span className="text-gradient">Skills</span>
          </h1>
          <p className="text-muted-foreground">Take a quick quiz to measure your proficiency</p>
        </motion.div>

        {!selectedSkill ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {availableSkills.map((skill) => (
              <motion.button
                key={skill}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedSkill(skill)}
                className="glass-card p-6 text-left hover:glow-border transition-all cursor-pointer"
              >
                <h3 className="font-display font-semibold text-lg mb-1">{skill}</h3>
                <p className="text-muted-foreground text-sm">{skillQuizzes[skill].length} questions</p>
                {skills[skill] !== undefined && (
                  <span className="text-xs text-primary mt-2 inline-block">Current: {skills[skill]}/10</span>
                )}
              </motion.button>
            ))}
          </motion.div>
        ) : !showResult ? (
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
                  <p className="text-sm text-muted-foreground mb-1">{selectedSkill} — Question {currentQ + 1} of {quiz.length}</p>
                  <h2 className="text-xl font-display font-semibold mb-6">{quiz[currentQ].question}</h2>

                  <RadioGroup
                    value={answers[currentQ] !== undefined ? String(answers[currentQ]) : undefined}
                    onValueChange={(val) => handleAnswer(Number(val))}
                    className="space-y-3"
                  >
                    {quiz[currentQ].options.map((opt, idx) => (
                      <Label
                        key={idx}
                        htmlFor={`sq${currentQ}-o${idx}`}
                        className={`flex items-center gap-3 p-4 rounded-lg border cursor-pointer transition-all ${
                          answers[currentQ] === idx ? "border-accent bg-accent/10" : "border-border hover:border-accent/50"
                        }`}
                      >
                        <RadioGroupItem value={String(idx)} id={`sq${currentQ}-o${idx}`} />
                        <span className="text-sm">{opt}</span>
                      </Label>
                    ))}
                  </RadioGroup>

                  <div className="flex justify-between mt-8">
                    <Button variant="ghost" size="sm" disabled={currentQ === 0} onClick={() => setCurrentQ((p) => p - 1)}>
                      <ArrowLeft className="h-4 w-4 mr-1" /> Previous
                    </Button>
                    <Button size="sm" disabled={answers[currentQ] === undefined} onClick={handleNext}>
                      {currentQ === quiz.length - 1 ? "See Results" : "Next"}
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
                    <p className="text-sm text-muted-foreground">Your proficiency in {selectedSkill}</p>
                    <p className="text-4xl font-display font-bold text-gradient mt-1">{score.rating}/10</p>
                    <p className="text-sm text-accent font-medium mt-1">{score.level} Proficiency</p>
                  </div>
                </CardContent>
              </Card>

              <div className="flex gap-3 justify-center flex-wrap">
                {!added ? (
                  <Button
                    variant="outline"
                    onClick={() => {
                      addSkill(selectedSkill!, score.rating);
                      setAdded(true);
                    }}
                  >
                    <Plus className="h-4 w-4 mr-1" /> Add to My Skills
                  </Button>
                ) : (
                  <span className="text-sm text-primary flex items-center gap-1">
                    <CheckCircle2 className="h-4 w-4" /> Added to your skill list
                  </span>
                )}
                <Button variant="outline" onClick={resetQuiz}>Try Another Skill</Button>
                <Button onClick={() => navigate("/dashboard")}>Back to Dashboard</Button>
              </div>
            </motion.div>
          )
        )}
      </div>
    </div>
  );
}
