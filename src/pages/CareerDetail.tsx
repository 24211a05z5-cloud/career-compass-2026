import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useSkills } from "@/context/SkillsContext";
import { useAuth } from "@/context/AuthContext";
import { CAREERS, calculateMatch } from "@/data/careers";
import { SKILL_RESOURCES, CAREER_COMPANIES } from "@/data/careerDetails";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft, Sparkles, LogOut, Award, TrendingUp, Shield,
  BookOpen, Building2, ExternalLink, ChevronDown, ChevronUp,
} from "lucide-react";

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

export default function CareerDetail() {
  const { careerId } = useParams<{ careerId: string }>();
  const { skills } = useSkills();
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [expandedSkill, setExpandedSkill] = useState<string | null>(null);

  const career = CAREERS.find((c) => c.id === careerId);
  if (!career) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-4">Career not found</p>
          <Button onClick={() => navigate("/results")}>Back to Results</Button>
        </div>
      </div>
    );
  }

  const match = calculateMatch(skills, career);
  const companies = CAREER_COMPANIES[career.id] || [];
  const gapSkills = [...match.missingSkills, ...match.weakSkills];

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
        <Button variant="ghost" size="sm" onClick={() => navigate("/results")} className="mb-4">
          <ArrowLeft className="h-4 w-4 mr-1" /> Back to Results
        </Button>

        {/* SECTION 1: Career Overview */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-card glow-border p-6 mb-6">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <Award className="h-6 w-6 text-primary" />
                <h1 className="text-2xl font-display font-bold">{career.title}</h1>
              </div>
              <p className="text-muted-foreground mb-3">{career.description}</p>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-1.5 text-xs">
                  <span className="text-muted-foreground">Demand:</span> <DemandBadge demand={career.demand} />
                </div>
                <div className="flex items-center gap-1.5 text-xs">
                  <span className="text-muted-foreground">Growth:</span> <GrowthBadge trend={career.growthTrend} />
                </div>
                <div className="flex items-center gap-1.5 text-xs">
                  <span className="text-muted-foreground">AI Impact:</span> <AiRiskBadge risk={career.aiImpact} />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center min-w-[100px]">
              <div className="relative w-24 h-24">
                <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 80 80">
                  <circle cx="40" cy="40" r="35" fill="none" stroke="hsl(var(--secondary))" strokeWidth="6" />
                  <circle cx="40" cy="40" r="35" fill="none" stroke="hsl(var(--primary))" strokeWidth="6" strokeLinecap="round" strokeDasharray={`${(match.percentage / 100) * 220} 220`} />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-xl font-bold font-display">{match.percentage}%</span>
              </div>
              <span className="text-xs text-muted-foreground mt-1">Match</span>
            </div>
          </div>
          <div className="bg-secondary/50 rounded-lg p-3 text-sm mt-4 space-y-1">
            <p><span className="font-medium text-primary">Verdict:</span> {career.verdict}</p>
            <p className="text-muted-foreground italic">{career.industryInsight}</p>
          </div>
        </motion.div>

        {/* SECTION 2: Skill Gap */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="glass-card p-6 mb-6">
          <h2 className="text-xl font-display font-semibold mb-4 flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-primary" />
            Skill Gap Analysis
          </h2>
          {gapSkills.length === 0 ? (
            <p className="text-sm text-success">Your skills align perfectly with this career! No gaps found.</p>
          ) : (
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground mb-3">Click a skill to view learning resources:</p>
              {gapSkills.map((skill) => (
                <div key={skill}>
                  <button
                    onClick={() => setExpandedSkill(expandedSkill === skill ? null : skill)}
                    className="w-full flex items-center justify-between p-3 rounded-lg bg-secondary/50 hover:bg-secondary/80 transition-colors text-left"
                  >
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="border-warning/30 text-warning text-xs">
                        {match.missingSkills.includes(skill) ? "Missing" : "Weak"}
                      </Badge>
                      <span className="text-sm font-medium">{skill}</span>
                    </div>
                    {expandedSkill === skill ? <ChevronUp className="h-4 w-4 text-muted-foreground" /> : <ChevronDown className="h-4 w-4 text-muted-foreground" />}
                  </button>

                  {/* SECTION 3: Learning Resources (inline) */}
                  <AnimatePresence>
                    {expandedSkill === skill && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="p-4 ml-4 mt-1 border-l-2 border-primary/30 space-y-2">
                          {(SKILL_RESOURCES[skill] || []).map((res) => (
                            <a
                              key={res.platform}
                              href={res.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-between p-3 rounded-lg bg-secondary/30 hover:bg-secondary/60 transition-colors group"
                            >
                              <div>
                                <span className="text-xs text-primary font-semibold">{res.platform}</span>
                                <p className="text-sm">{res.title}</p>
                              </div>
                              <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                            </a>
                          ))}
                          {(!SKILL_RESOURCES[skill] || SKILL_RESOURCES[skill].length === 0) && (
                            <p className="text-sm text-muted-foreground">No resources available for this skill yet.</p>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          )}
        </motion.div>

        {/* SECTION 4: Companies Hiring */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="glass-card p-6 mb-6">
          <h2 className="text-xl font-display font-semibold mb-4 flex items-center gap-2">
            <Building2 className="h-5 w-5 text-primary" />
            Companies Hiring
          </h2>
          {companies.length === 0 ? (
            <p className="text-sm text-muted-foreground">Company data not available for this career.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {companies.map((company) => (
                <div key={company.name} className="flex items-center justify-between p-4 rounded-lg bg-secondary/50">
                  <span className="font-medium text-sm">{company.name}</span>
                  <a href={company.applyUrl} target="_blank" rel="noopener noreferrer">
                    <Button size="sm" variant="default" className="text-xs">
                      Apply Now <ExternalLink className="h-3 w-3 ml-1" />
                    </Button>
                  </a>
                </div>
              ))}
            </div>
          )}
        </motion.div>

        <Button variant="outline" onClick={() => navigate("/results")}>
          Back to Results
        </Button>
      </div>
    </div>
  );
}
