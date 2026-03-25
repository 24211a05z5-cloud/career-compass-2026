import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Sparkles, Target, Briefcase, LogOut } from "lucide-react";

export default function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="min-h-screen p-6">
      <header className="flex items-center justify-between mb-12 max-w-4xl mx-auto">
        <div className="flex items-center gap-2">
          <Sparkles className="h-6 w-6 text-primary" />
          <span className="font-display font-bold text-lg text-gradient">AI Career 2026</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-muted-foreground">
            Welcome, <span className="text-foreground font-medium">{user?.name}</span>
          </span>
          <Button variant="ghost" size="sm" onClick={handleLogout}>
            <LogOut className="h-4 w-4" />
          </Button>
        </div>
      </header>

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-display font-bold mb-3">
            Your <span className="text-gradient">Career Navigator</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Discover your ideal career path powered by AI-driven insights for 2026
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.button
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            onClick={() => navigate("/skills")}
            className="glass-card p-8 text-left hover:glow-border transition-all duration-300 group cursor-pointer"
          >
            <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
              <Target className="h-7 w-7 text-primary" />
            </div>
            <h2 className="text-xl font-display font-semibold mb-2">Enter My Skills</h2>
            <p className="text-muted-foreground text-sm">
              Add your skills and proficiency levels to get personalized career recommendations.
            </p>
          </motion.button>

          <motion.button
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            onClick={() => navigate("/dream-job")}
            className="glass-card p-8 text-left hover:glow-border transition-all duration-300 group cursor-pointer"
          >
            <div className="bg-accent/10 w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
              <Briefcase className="h-7 w-7 text-accent" />
            </div>
            <h2 className="text-xl font-display font-semibold mb-2">Analyze My Dream Job</h2>
            <p className="text-muted-foreground text-sm">
              Enter your dream career and discover if it's the right choice for 2026.
            </p>
          </motion.button>
        </div>
      </div>
    </div>
  );
}
