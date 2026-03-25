import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useSkills } from "@/context/SkillsContext";
import { useAuth } from "@/context/AuthContext";
import { analyzeDreamJob, getAlternativeCareer, CAREERS } from "@/data/careers";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, ArrowLeft, TrendingUp, Shield, Zap, Sparkles, LogOut, AlertTriangle, CheckCircle } from "lucide-react";

export default function DreamJob() {
  const { skills } = useSkills();
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ReturnType<typeof analyzeDreamJob> | null>(null);
  const [searched, setSearched] = useState(false);

  const handleSearch = () => {
    if (!query.trim()) return;
    setLoading(true);
    setSearched(true);
    setTimeout(() => {
      setResult(analyzeDreamJob(query, skills));
      setLoading(false);
    }, 1200);
  };

  const alternative = result?.career ? getAlternativeCareer(result.career) : null;

  const availableJobs = CAREERS.map((c) => c.title);

  return (
    <div className="min-h-screen p-6">
      <header className="flex items-center justify-between mb-8 max-w-4xl mx-auto">
        <div className="flex items-center gap-2">
          <Sparkles className="h-6 w-6 text-primary" />
          <span className="font-display font-bold text-lg text-gradient">AI Career 2026</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-muted-foreground">{user?.name}</span>
          <Button variant="ghost" size="sm" onClick={() => { logout(); navigate("/login"); }}>
            <LogOut className="h-4 w-4" />
          </Button>
        </div>
      </header>

      <div className="max-w-4xl mx-auto">
        <Button variant="ghost" size="sm" onClick={() => navigate("/dashboard")} className="mb-4">
          <ArrowLeft className="h-4 w-4 mr-1" /> Back
        </Button>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-3xl font-display font-bold mb-2">
            Dream Job <span className="text-gradient">Analysis</span>
          </h1>
          <p className="text-muted-foreground mb-6">Enter your dream career to see if it's worth pursuing in 2026</p>
        </motion.div>

        <div className="glass-card p-6 mb-6">
          <div className="flex gap-2 mb-3">
            <Input
              placeholder="e.g., Data Scientist, Frontend Developer..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            />
            <Button onClick={handleSearch} disabled={!query.trim()}>
              <Search className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {availableJobs.slice(0, 8).map((job) => (
              <Badge
                key={job}
                variant="secondary"
                className="cursor-pointer hover:bg-primary/20 transition-colors text-xs"
                onClick={() => { setQuery(job); }}
              >
                {job}
              </Badge>
            ))}
          </div>
        </div>

        {loading && (
          <div className="flex items-center justify-center py-16">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center">
              <div className="animate-pulse-glow inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <p className="text-muted-foreground">Analyzing your dream job...</p>
            </motion.div>
          </div>
        )}

        <AnimatePresence>
          {!loading && searched && !result && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="glass-card p-6 text-center">
              <AlertTriangle className="h-10 w-10 text-warning mx-auto mb-3" />
              <p className="text-muted-foreground">
                We couldn't find a match for "<span className="text-foreground">{query}</span>". Try one of the suggested jobs above.
              </p>
            </motion.div>
          )}

          {!loading && result && result.career && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
              <div className="glass-card p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-2xl font-display font-semibold">{result.career.title}</h2>
                    <p className="text-sm text-muted-foreground mt-1">{result.career.description}</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold font-display text-primary">{result.percentage}%</div>
                    <div className="text-xs text-muted-foreground">Your Match</div>
                  </div>
                </div>

                {/* Required Skills */}
                <div className="mb-4">
                  <h3 className="text-sm font-semibold mb-2">Required Skills</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {Object.entries(result.career.requiredSkills).map(([skill, level]) => {
                      const userLevel = skills[skill] || 0;
                      const met = userLevel >= level;
                      return (
                        <Badge
                          key={skill}
                          variant="outline"
                          className={met ? "border-success/30 text-success" : "border-warning/30 text-warning"}
                        >
                          {met ? <CheckCircle className="h-3 w-3 mr-1" /> : <AlertTriangle className="h-3 w-3 mr-1" />}
                          {skill} ({level}+)
                        </Badge>
                      );
                    })}
                  </div>
                </div>

                {/* Skill Gap */}
                {(result.missingSkills.length > 0 || result.weakSkills.length > 0) && (
                  <div className="bg-warning/5 border border-warning/20 rounded-lg p-3 mb-4">
                    <p className="text-sm font-medium text-warning mb-1">Skill Gap</p>
                    <p className="text-sm text-muted-foreground">
                      You need to improve: {[...result.missingSkills, ...result.weakSkills].join(", ")}
                    </p>
                  </div>
                )}

                {/* Future Insights */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="bg-secondary/50 rounded-lg p-3 text-center">
                    <p className="text-xs text-muted-foreground mb-1">Industry Demand</p>
                    <p className={`font-semibold text-sm ${result.career.demand === "High" ? "text-success" : result.career.demand === "Medium" ? "text-warning" : "text-destructive"}`}>
                      {result.career.demand}
                    </p>
                  </div>
                  <div className="bg-secondary/50 rounded-lg p-3 text-center">
                    <p className="text-xs text-muted-foreground mb-1">Growth Trend</p>
                    <p className={`font-semibold text-sm flex items-center justify-center gap-1 ${result.career.growthTrend === "Growing" ? "text-success" : result.career.growthTrend === "Stable" ? "text-warning" : "text-destructive"}`}>
                      <TrendingUp className="h-3 w-3" />{result.career.growthTrend}
                    </p>
                  </div>
                  <div className="bg-secondary/50 rounded-lg p-3 text-center">
                    <p className="text-xs text-muted-foreground mb-1">AI Impact</p>
                    <p className={`font-semibold text-sm flex items-center justify-center gap-1 ${result.career.aiImpact === "Low Risk" ? "text-success" : result.career.aiImpact === "Medium Risk" ? "text-warning" : "text-destructive"}`}>
                      <Shield className="h-3 w-3" />{result.career.aiImpact}
                    </p>
                  </div>
                </div>

                {/* Verdict */}
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                  <p className="text-sm font-medium text-primary mb-1">Final Verdict: Is this career worth it in 2026?</p>
                  <p className="text-sm">{result.career.verdict}</p>
                  <p className="text-sm text-muted-foreground italic mt-2">{result.career.industryInsight}</p>
                </div>
              </div>

              {/* Alternative */}
              {alternative && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="glass-card p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <AlertTriangle className="h-5 w-5 text-warning" />
                    <h3 className="font-display font-semibold">Alternative Career Suggestion</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    Since {result.career.title} carries some risk, consider:
                  </p>
                  <div className="bg-secondary/50 rounded-lg p-4">
                    <h4 className="font-semibold text-primary">{alternative.title}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{alternative.description}</p>
                    <p className="text-sm mt-2">{alternative.verdict}</p>
                  </div>
                </motion.div>
              )}

              {Object.keys(skills).length === 0 && (
                <div className="glass-card p-4 text-center">
                  <p className="text-sm text-muted-foreground">
                    <span className="text-primary cursor-pointer hover:underline" onClick={() => navigate("/skills")}>
                      Add your skills
                    </span>{" "}
                    to get a more accurate match percentage.
                  </p>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
