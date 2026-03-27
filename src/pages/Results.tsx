import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useSkills } from "@/context/SkillsContext";
import { useAuth } from "@/context/AuthContext";
import { getTopCareers } from "@/data/careers";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, TrendingUp, Shield, Zap, Sparkles, LogOut, Award, Trophy } from "lucide-react";
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

const loadingMessages = [
  "Analyzing your profile...",
  "Evaluating your skills and interests...",
  "Generating career recommendations...",
  "Calculating future insights for 2026...",
];

function buildExplanation(career: { title: string }, matchedSkills: string[]): string {
  if (matchedSkills.length >= 3) {
    return `Based on your strong ${matchedSkills.slice(0, 3).join(", ")} skills, ${career.title} is a highly suitable career path for you.`;
  }
  if (matchedSkills.length > 0) {
    return `Your proficiency in ${matchedSkills.join(" and ")} positions you well for a career in ${career.title}.`;
  }
  return `Your foundational skill set shows strong potential for a career in ${career.title}.`;
}

function LoadingScreen() {
  const [msgIndex, setMsgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMsgIndex((prev) => (prev + 1) % loadingMessages.length);
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center">
        <div className="animate-pulse-glow inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
          <Zap className="h-10 w-10 text-primary" />
        </div>
        <AnimatePresence mode="wait">
          <motion.p
            key={msgIndex}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="text-lg text-muted-foreground"
          >
            {loadingMessages[msgIndex]}
          </motion.p>
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

function TopCareerHighlight({ career, percentage }: { career: { title: string; description: string }; percentage: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.1 }}
      className="glass-card glow-border p-6 mb-8"
    >
      <div className="flex items-center gap-3 mb-3">
        <Trophy className="h-6 w-6 text-primary" />
        <h2 className="text-xl font-display font-bold">
          🏆 Top Recommendation: <span className="text-gradient">{career.title}</span>
        </h2>
        <span className="ml-auto text-lg font-bold text-primary">{percentage}% Match</span>
      </div>
      <p className="text-muted-foreground leading-relaxed">
        This role best matches your skills and shows strong future potential. {career.description}
      </p>
    </motion.div>
  );
}

function CareerCard({ r, i, navigate }: { r: ReturnType<typeof getTopCareers>[number]; i: number; navigate: (path: string) => void }) {
  return (
    <motion.div
      key={r.career.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.1 }}
      className="glass-card p-6 cursor-pointer hover:ring-1 hover:ring-primary/50 transition-all"
      onClick={() => navigate(`/career/${r.career.id}`)}
    >
      <div className="flex flex-col md:flex-row md:items-start gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h2 className="text-xl font-display font-semibold">{r.career.title}</h2>
          </div>

          <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
            {buildExplanation(r.career, r.matchedSkills)}
          </p>

          {(r.missingSkills.length > 0 || r.weakSkills.length > 0) && (
            <div className="mb-3">
              <p className="text-sm font-medium text-warning mb-1">📊 Skills to improve:</p>
              <div className="flex flex-wrap gap-1.5">
                {[...r.missingSkills, ...r.weakSkills].map((s) => (
                  <Badge key={s} variant="outline" className="text-xs border-warning/30 text-warning">{s}</Badge>
                ))}
              </div>
            </div>
          )}

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

          <div className="bg-secondary/50 rounded-lg p-3 text-sm space-y-1">
            <p><span className="font-medium text-primary">🎯 Verdict:</span> {r.career.verdict}</p>
            <p className="text-muted-foreground italic">{r.career.industryInsight}</p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center min-w-[90px]">
          <div className="relative w-20 h-20">
            <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 80 80">
              <circle cx="40" cy="40" r="35" fill="none" stroke="hsl(var(--secondary))" strokeWidth="6" />
              <circle cx="40" cy="40" r="35" fill="none" stroke="hsl(var(--primary))" strokeWidth="6" strokeLinecap="round" strokeDasharray={`${(r.percentage / 100) * 220} 220`} />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-lg font-bold font-display">{r.percentage}%</span>
          </div>
          <span className="text-xs text-muted-foreground mt-1">Match</span>
        </div>
      </div>
    </motion.div>
  );
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
    }, 3200);
    return () => clearTimeout(timer);
  }, [skills, navigate]);

  if (loading) return <LoadingScreen />;

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
            🎯 Your <span className="text-gradient">Career Matches</span>
          </h1>
          <p className="text-muted-foreground mb-8">Personalized recommendations based on your unique skill profile</p>
        </motion.div>

        {/* Top Career Highlight */}
        <TopCareerHighlight career={topCareer.career} percentage={topCareer.percentage} />

        {/* Career Cards */}
        <h2 className="text-xl font-display font-semibold mb-4 flex items-center gap-2">
          <Award className="h-5 w-5 text-primary" /> All Career Matches
        </h2>
        <div className="space-y-6 mb-12">
          {results.map((r, i) => (
            <CareerCard key={r.career.id} r={r} i={i} navigate={navigate} />
          ))}
        </div>

        {/* Skill Gap Analysis */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
          <h2 className="text-xl font-display font-semibold mb-4">📊 Skill Gap Analysis</h2>
          <div className="glass-card p-6 mb-12">
            <p className="text-muted-foreground mb-4">
              Based on your skills, you are best suited for <span className="text-foreground font-medium">{topCareer.career.title}</span>.
              {topCareer.missingSkills.length > 0 || topCareer.weakSkills.length > 0
                ? ` To maximize your potential, focus on strengthening ${[...topCareer.missingSkills, ...topCareer.weakSkills].slice(0, 3).join(", ")}.`
                : " Your skills align excellently with this career path — keep building on your strengths!"}
            </p>
          </div>
        </motion.div>

        {/* Career Insights Dashboard */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
          <h2 className="text-xl font-display font-semibold mb-4">🌍 Your Future Outlook (2026)</h2>
        </motion.div>
        <CareerInsightsDashboard skills={skills} results={results} />

        <div className="flex gap-3 mt-10 mb-8">
          <Button variant="outline" onClick={() => navigate("/dashboard")}>
            Back to Dashboard
          </Button>
          <Button onClick={() => navigate("/dream-job")}>
            🚀 Analyze Dream Job
          </Button>
        </div>
      </div>
    </div>
  );
}
