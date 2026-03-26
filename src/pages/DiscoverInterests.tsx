import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ArrowLeft, ArrowRight, Brain, Lightbulb, ChevronRight } from "lucide-react";

interface Question {
  id: number;
  question: string;
  options: { label: string; categories: string[] }[];
}

const questions: Question[] = [
  {
    id: 1,
    question: "When faced with a complex problem, you prefer to:",
    options: [
      { label: "Break it down logically and analyze data", categories: ["Analytical", "Technical"] },
      { label: "Brainstorm creative and unconventional solutions", categories: ["Creative"] },
      { label: "Discuss it with a team and delegate tasks", categories: ["Management"] },
      { label: "Build a prototype or hands-on solution", categories: ["Technical"] },
    ],
  },
  {
    id: 2,
    question: "Which activity excites you the most?",
    options: [
      { label: "Solving puzzles and brain teasers", categories: ["Analytical"] },
      { label: "Designing visuals or writing stories", categories: ["Creative"] },
      { label: "Writing code or building systems", categories: ["Technical"] },
      { label: "Leading a project and motivating people", categories: ["Management"] },
    ],
  },
  {
    id: 3,
    question: "In a group project, you naturally take on the role of:",
    options: [
      { label: "The researcher who gathers and analyzes information", categories: ["Analytical"] },
      { label: "The designer who makes things look and feel great", categories: ["Creative"] },
      { label: "The developer who builds the core product", categories: ["Technical"] },
      { label: "The coordinator who organizes everyone", categories: ["Management"] },
    ],
  },
  {
    id: 4,
    question: "Which type of content do you enjoy consuming?",
    options: [
      { label: "Data reports, statistics, and research papers", categories: ["Analytical"] },
      { label: "Art, design inspiration, and creative media", categories: ["Creative"] },
      { label: "Tech blogs, documentation, and tutorials", categories: ["Technical"] },
      { label: "Business strategy and leadership podcasts", categories: ["Management"] },
    ],
  },
  {
    id: 5,
    question: "Your ideal work environment is:",
    options: [
      { label: "Quiet space with data dashboards and spreadsheets", categories: ["Analytical"] },
      { label: "Open studio with design tools and whiteboards", categories: ["Creative"] },
      { label: "Tech lab with multiple monitors and dev tools", categories: ["Technical"] },
      { label: "Meeting rooms with whiteboards and team discussions", categories: ["Management"] },
    ],
  },
  {
    id: 6,
    question: "When learning something new, you prefer:",
    options: [
      { label: "Reading documentation and understanding the theory", categories: ["Analytical"] },
      { label: "Experimenting and learning through trial and error", categories: ["Creative", "Technical"] },
      { label: "Following structured courses with hands-on labs", categories: ["Technical"] },
      { label: "Learning through mentorship and real-world scenarios", categories: ["Management"] },
    ],
  },
  {
    id: 7,
    question: "Which achievement would make you proudest?",
    options: [
      { label: "Discovering a pattern in data that nobody else noticed", categories: ["Analytical"] },
      { label: "Creating a product design that users love", categories: ["Creative"] },
      { label: "Building a system that handles millions of requests", categories: ["Technical"] },
      { label: "Growing a team from 5 to 50 people successfully", categories: ["Management"] },
    ],
  },
];

const categoryDomains: Record<string, string[]> = {
  Analytical: ["Data Science", "Business Analytics", "Research & Development", "Financial Analysis"],
  Creative: ["UI/UX Design", "Content Creation", "Product Design", "Brand Strategy"],
  Technical: ["Software Development", "Cloud Engineering", "Cybersecurity", "AI/ML Engineering"],
  Management: ["Product Management", "Project Management", "Operations", "Consulting"],
};

export default function DiscoverInterests() {
  const navigate = useNavigate();
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResult, setShowResult] = useState(false);

  const handleSelect = (optionIndex: number) => {
    setAnswers((prev) => ({ ...prev, [currentQ]: optionIndex }));
  };

  const handleNext = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ((p) => p + 1);
    } else {
      setShowResult(true);
    }
  };

  const getResults = () => {
    const scores: Record<string, number> = { Analytical: 0, Creative: 0, Technical: 0, Management: 0 };
    Object.entries(answers).forEach(([qIdx, optIdx]) => {
      const q = questions[Number(qIdx)];
      q.options[optIdx].categories.forEach((c) => {
        scores[c] = (scores[c] || 0) + 1;
      });
    });
    const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    return { top: sorted.slice(0, 2).map(([k]) => k), scores };
  };

  const results = showResult ? getResults() : null;

  return (
    <div className="min-h-screen p-6">
      <header className="max-w-3xl mx-auto mb-8">
        <Button variant="ghost" size="sm" onClick={() => navigate("/dashboard")}>
          <ArrowLeft className="h-4 w-4 mr-1" /> Back to Dashboard
        </Button>
      </header>

      <div className="max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            <Brain className="h-4 w-4" /> Psychometric Assessment
          </div>
          <h1 className="text-3xl font-display font-bold mb-2">
            Discover Your <span className="text-gradient">Interests</span>
          </h1>
          <p className="text-muted-foreground">Answer a few questions to uncover your ideal career orientation</p>
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
              {/* Progress */}
              <div className="flex items-center gap-2 mb-6">
                {questions.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1.5 flex-1 rounded-full transition-colors ${
                      i <= currentQ ? "bg-primary" : "bg-muted"
                    }`}
                  />
                ))}
              </div>

              <Card className="glass-card border-0">
                <CardContent className="p-8">
                  <p className="text-sm text-muted-foreground mb-2">
                    Question {currentQ + 1} of {questions.length}
                  </p>
                  <h2 className="text-xl font-display font-semibold mb-6">{questions[currentQ].question}</h2>

                  <RadioGroup
                    value={answers[currentQ] !== undefined ? String(answers[currentQ]) : undefined}
                    onValueChange={(val) => handleSelect(Number(val))}
                    className="space-y-3"
                  >
                    {questions[currentQ].options.map((opt, idx) => (
                      <Label
                        key={idx}
                        htmlFor={`q${currentQ}-o${idx}`}
                        className={`flex items-center gap-3 p-4 rounded-lg border cursor-pointer transition-all ${
                          answers[currentQ] === idx
                            ? "border-primary bg-primary/10"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        <RadioGroupItem value={String(idx)} id={`q${currentQ}-o${idx}`} />
                        <span className="text-sm">{opt.label}</span>
                      </Label>
                    ))}
                  </RadioGroup>

                  <div className="flex justify-between mt-8">
                    <Button
                      variant="ghost"
                      size="sm"
                      disabled={currentQ === 0}
                      onClick={() => setCurrentQ((p) => p - 1)}
                    >
                      <ArrowLeft className="h-4 w-4 mr-1" /> Previous
                    </Button>
                    <Button
                      size="sm"
                      disabled={answers[currentQ] === undefined}
                      onClick={handleNext}
                    >
                      {currentQ === questions.length - 1 ? "See Results" : "Next"}{" "}
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
        ) : (
          results && (
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <Card className="glass-card border-0 mb-6">
                <CardContent className="p-8 text-center">
                  <Lightbulb className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h2 className="text-2xl font-display font-bold mb-2">Your Orientation</h2>
                  <p className="text-xl text-gradient font-semibold mb-1">
                    You are {results.top.join(" and ")} oriented
                  </p>
                  <p className="text-muted-foreground text-sm mt-2">
                    Based on your responses, these traits define your career personality.
                  </p>
                </CardContent>
              </Card>

              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                {results.top.map((cat) => (
                  <Card key={cat} className="glass-card border-0">
                    <CardContent className="p-6">
                      <h3 className="font-display font-semibold text-lg mb-3 text-primary">{cat}</h3>
                      <p className="text-sm text-muted-foreground mb-3">Suitable domains:</p>
                      <ul className="space-y-2">
                        {categoryDomains[cat].map((d) => (
                          <li key={d} className="flex items-center gap-2 text-sm">
                            <ChevronRight className="h-3 w-3 text-primary" /> {d}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="flex gap-3 justify-center">
                <Button variant="outline" onClick={() => { setShowResult(false); setCurrentQ(0); setAnswers({}); }}>
                  Retake Test
                </Button>
                <Button onClick={() => navigate("/dashboard")}>Back to Dashboard</Button>
              </div>
            </motion.div>
          )
        )}
      </div>
    </div>
  );
}
