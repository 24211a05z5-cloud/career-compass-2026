import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useSkills } from "@/context/SkillsContext";
import { useAuth } from "@/context/AuthContext";
import { getTopCareers, CareerData } from "@/data/careers";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, TrendingUp, Shield, Zap, Sparkles, LogOut, Award } from "lucide-react";
import CareerInsightsDashboard from "@/components/CareerInsightsDashboard";

function DemandBadge({ demand }: { demand: string }) {
  const color = demand === "High" ? "bg-success/20 text-success" : demand === "Medium" ? "bg-warning/20 text-warning" : "bg-destructive/20 text-destructive";
  return <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${color}`}>{demand}</span>;
}

function GrowthBadge({ trend }: { trend: string }) {
  const color = trend === "Growing" ? "text-success" : trend === "Stable" ? "text-warning" : "text-destructive";
  return <span className={`flex items-center gap-1 text-xs font-semibold ${color}`}><TrendingUp className="h-3 w-3" />{trend}</span>;
}

function AiRiskBadge({ risk }: { risk: string }) {
  const color = risk === "Low Risk" ? "text-success" : risk === "Medium Risk" ? "text-warning" : "text-destructive";
  return <span className={`flex items-center gap-1 text-xs font-semibold ${color}`}><Shield className="h-3 w-3" />{risk}</span>;
}

export default function Results() {
  const { skills } = useSkills();
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState<ReturnType<typeof getTopCareers>>([]);

  useEffect(() => {
    if (Object.keys(skills).length === 0) {
      navigate("/skills");
      return;
    }
    const timer = setTimeout(() => {
      setResults(getTopCareers(skills, 5));
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, [skills, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center">
          <div className="animate-pulse-glow inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
            <Zap className="h-10 w-10 text-primary" />
          </div>
          <p className="text-lg text-muted-foreground">Analyzing your profile...</p>
        </motion.div>
      </div>
    );
  }

  const topCareer = results[0];

  return (
    <div className="min-h-screen p-6">
      <header className="flex items-center justify-between mb-8 max-w-5xl mx-auto">
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

      <div className="max-w-5xl mx-auto">
        <Button variant="ghost" size="sm" onClick={() => navigate("/skills")} className="mb-4">
          <ArrowLeft className="h-4 w-4 mr-1" /> Back to Skills
        </Button>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-3xl font-display font-bold mb-2">
            Career <span className="text-gradient">Recommendations</span>
          </h1>
          <p className="text-muted-foreground mb-8">Your top career matches based on your skill profile</p>
        </motion.div>

        <div className="space-y-6 mb-10">
          {results.map((r, i) => (
            <motion.div
              key={r.career.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`glass-card p-6 cursor-pointer hover:ring-1 hover:ring-primary/50 transition-all ${i === 0 ? "glow-border" : ""}`}
              onClick={() => navigate(`/career/${r.career.id}`)}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    {i === 0 && <Award className="h-5 w-5 text-primary" />}
                    <h2 className="text-xl font-display font-semibold">{r.career.title}</h2>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{r.career.description}</p>

                  {/* Match explanation */}
                  <p className="text-sm mb-3">
                    <span className="text-primary font-medium">Recommended</span> because you have strong{" "}
                    {r.matchedSkills.length > 0
                      ? r.matchedSkills.slice(0, 3).join(", ") + " skills"
                      : "foundational skills"}
                    .
                  </p>

                  {/* Skill Gap */}
                  {(r.missingSkills.length > 0 || r.weakSkills.length > 0) && (
                    <div className="mb-3">
                      <p className="text-sm font-medium text-warning mb-1">Skills to improve:</p>
                      <div className="flex flex-wrap gap-1.5">
                        {[...r.missingSkills, ...r.weakSkills].map((s) => (
                          <Badge key={s} variant="outline" className="text-xs border-warning/30 text-warning">
                            {s}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Future Insights */}
                  <div className="flex flex-wrap gap-3 mb-3">
                    <div className="flex items-center gap-1.5 text-xs">
                      <span className="text-muted-foreground">Demand:</span> <DemandBadge demand={r.career.demand} />
                    </div>
                    <div className="flex items-center gap-1.5 text-xs">
                      <span className="text-muted-foreground">Growth:</span> <GrowthBadge trend={r.career.growthTrend} />
                    </div>
                    <div className="flex items-center gap-1.5 text-xs">
                      <span className="text-muted-foreground">AI Impact:</span> <AiRiskBadge risk={r.career.aiImpact} />
                    </div>
                  </div>

                  {/* Verdict & Insight */}
                  <div className="bg-secondary/50 rounded-lg p-3 text-sm space-y-1">
                    <p><span className="font-medium text-primary">Verdict:</span> {r.career.verdict}</p>
                    <p className="text-muted-foreground italic">{r.career.industryInsight}</p>
                  </div>
                </div>

                {/* Match percentage */}
                <div className="flex flex-col items-center justify-center min-w-[90px]">
                  <div className="relative w-20 h-20">
                    <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 80 80">
                      <circle cx="40" cy="40" r="35" fill="none" stroke="hsl(var(--secondary))" strokeWidth="6" />
                      <circle
                        cx="40" cy="40" r="35" fill="none"
                        stroke="hsl(var(--primary))"
                        strokeWidth="6"
                        strokeLinecap="round"
                        strokeDasharray={`${(r.percentage / 100) * 220} 220`}
                      />
                    </svg>
                    <span className="absolute inset-0 flex items-center justify-center text-lg font-bold font-display">
                      {r.percentage}%
                    </span>
                  </div>
                  <span className="text-xs text-muted-foreground mt-1">Match</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="glass-card glow-border p-6 mb-6"
        >
          <h2 className="text-xl font-display font-semibold mb-3 flex items-center gap-2">
            <Award className="h-5 w-5 text-primary" />
            Personalized Career Summary
          </h2>
          <p className="text-muted-foreground">
            Based on your skills, you are best suited for <span className="text-foreground font-medium">{topCareer.career.title}</span>.
            {topCareer.missingSkills.length > 0 || topCareer.weakSkills.length > 0
              ? ` Focus on improving ${[...topCareer.missingSkills, ...topCareer.weakSkills].slice(0, 3).join(" and ")} to maximize your potential.`
              : " Your skills align excellently with this career path!"}
          </p>
        </motion.div>

        <CareerInsightsDashboard skills={skills} results={results} />

        <div className="flex gap-3 mt-8">
          <Button variant="outline" onClick={() => navigate("/dashboard")}>
            Back to Dashboard
          </Button>
          <Button onClick={() => navigate("/dream-job")}>
            Analyze Dream Job
          </Button>
        </div>
      </div>
    </div>
  );
}
