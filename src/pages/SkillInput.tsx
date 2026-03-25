import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useSkills } from "@/context/SkillsContext";
import { useAuth } from "@/context/AuthContext";
import { PREDEFINED_SKILLS } from "@/data/careers";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Plus, X, ArrowRight, ArrowLeft, Sparkles, LogOut } from "lucide-react";

export default function SkillInput() {
  const { skills, addSkill, removeSkill, updateSkill } = useSkills();
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [customSkill, setCustomSkill] = useState("");
  const [search, setSearch] = useState("");

  const suggestions = PREDEFINED_SKILLS.filter(
    (s) => !skills[s] && s.toLowerCase().includes(search.toLowerCase())
  );

  const handleAddSkill = (name: string) => {
    addSkill(name, 5);
    setSearch("");
    setCustomSkill("");
  };

  const handleAddCustom = () => {
    const name = customSkill.trim();
    if (name && !skills[name]) {
      handleAddSkill(name);
    }
  };

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
            Your <span className="text-gradient">Skills</span>
          </h1>
          <p className="text-muted-foreground mb-8">Add skills and rate your proficiency from 1 to 10</p>
        </motion.div>

        {/* Add skills */}
        <div className="glass-card p-6 mb-6">
          <h3 className="font-display font-semibold mb-4">Add Skills</h3>
          
          <div className="flex gap-2 mb-4">
            <Input
              placeholder="Search or type a custom skill..."
              value={search || customSkill}
              onChange={(e) => {
                setSearch(e.target.value);
                setCustomSkill(e.target.value);
              }}
              onKeyDown={(e) => e.key === "Enter" && handleAddCustom()}
            />
            <Button onClick={handleAddCustom} disabled={!customSkill.trim()}>
              <Plus className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex flex-wrap gap-2">
            {suggestions.slice(0, 12).map((skill) => (
              <Badge
                key={skill}
                variant="secondary"
                className="cursor-pointer hover:bg-primary/20 hover:border-primary/30 transition-colors"
                onClick={() => handleAddSkill(skill)}
              >
                <Plus className="h-3 w-3 mr-1" /> {skill}
              </Badge>
            ))}
          </div>
        </div>

        {/* Current skills */}
        <div className="space-y-3 mb-8">
          <AnimatePresence>
            {Object.entries(skills).map(([name, level]) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="glass-card p-4"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">{name}</span>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-primary font-mono font-bold">{level}/10</span>
                    <button onClick={() => removeSkill(name)} className="text-muted-foreground hover:text-destructive transition-colors">
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                <Slider
                  value={[level]}
                  onValueChange={([v]) => updateSkill(name, v)}
                  min={1}
                  max={10}
                  step={1}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {Object.keys(skills).length > 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Button size="lg" onClick={() => navigate("/results")} className="w-full">
              Analyze My Career Path <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
