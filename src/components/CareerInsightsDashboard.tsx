import { motion } from "framer-motion";
import { BarChart3, Target, Rocket } from "lucide-react";

interface CareerResult {
  career: {
    title: string;
    demand: string;
    growthTrend: string;
    aiImpact: string;
  };
  percentage: number;
}

interface CareerInsightsDashboardProps {
  skills: Record<string, number>;
  results: CareerResult[];
}

function computeFutureScore(career: CareerResult["career"]): number {
  let score = 5;
  if (career.demand === "High") score += 2;
  else if (career.demand === "Medium") score += 1;
  if (career.growthTrend === "Growing") score += 2;
  else if (career.growthTrend === "Stable") score += 1;
  if (career.aiImpact === "Low Risk") score += 1;
  else if (career.aiImpact === "High Risk") score -= 1;
  return Math.min(10, Math.max(1, score));
}

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-sm font-medium w-28 truncate text-foreground">{name}</span>
      <div className="flex-1 h-3 rounded-full bg-secondary overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-primary"
          initial={{ width: 0 }}
          animate={{ width: `${(level / 10) * 100}%` }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </div>
      <span className="text-xs font-semibold text-muted-foreground w-10 text-right">{level}/10</span>
    </div>
  );
}

function MatchBar({ title, percentage }: { title: string; percentage: number }) {
  const color =
    percentage >= 80 ? "bg-success" : percentage >= 60 ? "bg-primary" : "bg-warning";
  return (
    <div className="flex items-center gap-3">
      <span className="text-sm font-medium w-36 truncate text-foreground">{title}</span>
      <div className="flex-1 h-3 rounded-full bg-secondary overflow-hidden">
        <motion.div
          className={`h-full rounded-full ${color}`}
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </div>
      <span className="text-xs font-semibold text-muted-foreground w-10 text-right">{percentage}%</span>
    </div>
  );
}

function FutureScoreCard({ title, score }: { title: string; score: number }) {
  const color = score >= 8 ? "text-success" : score >= 5 ? "text-primary" : "text-warning";
  return (
    <div className="glass-card p-4 flex items-center justify-between">
      <span className="text-sm font-medium text-foreground truncate flex-1">{title}</span>
      <div className="flex items-center gap-2">
        <div className="flex gap-0.5">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className={`w-2 h-4 rounded-sm ${i < score ? (score >= 8 ? "bg-success" : score >= 5 ? "bg-primary" : "bg-warning") : "bg-secondary"}`}
            />
          ))}
        </div>
        <span className={`text-sm font-bold ${color} w-10 text-right`}>{score}/10</span>
      </div>
    </div>
  );
}

export default function CareerInsightsDashboard({ skills, results }: CareerInsightsDashboardProps) {
  const top3 = results.slice(0, 3);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7 }}
      className="mt-10 space-y-6"
    >
      <h2 className="text-2xl font-display font-bold flex items-center gap-2">
        <BarChart3 className="h-6 w-6 text-primary" />
        Career Insights <span className="text-gradient">Dashboard</span>
      </h2>

      {/* Section 1: Skill Strength */}
      <div className="glass-card p-6">
        <h3 className="text-lg font-display font-semibold mb-4 flex items-center gap-2">
          <Target className="h-5 w-5 text-primary" />
          Skill Strength Visualization
        </h3>
        <div className="space-y-3">
          {Object.entries(skills)
            .sort(([, a], [, b]) => b - a)
            .map(([name, level]) => (
              <SkillBar key={name} name={name} level={level} />
            ))}
        </div>
      </div>

      {/* Section 2: Career Match Comparison */}
      <div className="glass-card p-6">
        <h3 className="text-lg font-display font-semibold mb-4 flex items-center gap-2">
          <BarChart3 className="h-5 w-5 text-primary" />
          Career Match Comparison
        </h3>
        <div className="space-y-3">
          {top3.map((r) => (
            <MatchBar key={r.career.title} title={r.career.title} percentage={r.percentage} />
          ))}
        </div>
      </div>

      {/* Section 3: Future Score */}
      <div className="glass-card p-6">
        <h3 className="text-lg font-display font-semibold mb-4 flex items-center gap-2">
          <Rocket className="h-5 w-5 text-primary" />
          Future Score
        </h3>
        <div className="space-y-3">
          {top3.map((r) => (
            <FutureScoreCard
              key={r.career.title}
              title={r.career.title}
              score={computeFutureScore(r.career)}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
