import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Sparkles, Target, Briefcase, LogOut, Brain, ClipboardCheck, Rocket, TrendingUp, Bot } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Discover My Interests",
    emoji: "🧠",
    description: "Find your natural interests using a quick psychometric test",
    route: "/discover-interests",
    colorClass: "bg-primary/10 group-hover:bg-primary/20",
    iconClass: "text-primary",
    delay: 0.2,
  },
  {
    icon: ClipboardCheck,
    title: "Assess My Skills",
    emoji: "📊",
    description: "Evaluate your skill level through simple tests",
    route: "/skill-assessment",
    colorClass: "bg-accent/10 group-hover:bg-accent/20",
    iconClass: "text-accent",
    delay: 0.3,
  },
  {
    icon: Target,
    title: "Enter My Skills",
    emoji: "🎯",
    description: "Manually add and rate your skills for personalized recommendations",
    route: "/skills",
    colorClass: "bg-primary/10 group-hover:bg-primary/20",
    iconClass: "text-primary",
    delay: 0.4,
  },
  {
    icon: Rocket,
    title: "Analyze My Dream Job",
    emoji: "🚀",
    description: "Check if your dream career is right for you in 2026",
    route: "/dream-job",
    colorClass: "bg-accent/10 group-hover:bg-accent/20",
    iconClass: "text-accent",
    delay: 0.5,
  },
  {
    icon: TrendingUp,
    title: "Trending Careers",
    emoji: "📈",
    description: "Explore the most in-demand careers and skills for 2026",
    route: "/trending-careers",
    colorClass: "bg-primary/10 group-hover:bg-primary/20",
    iconClass: "text-primary",
    delay: 0.6,
  },
  {
    icon: Bot,
    title: "AI Assistant",
    emoji: "🤖",
    description: "Chat with our AI to get career advice and skill recommendations",
    route: "/ai-assistant",
    colorClass: "bg-accent/10 group-hover:bg-accent/20",
    iconClass: "text-accent",
    delay: 0.7,
  },
];

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
          <Button variant="ghost" size="sm" onClick={handleLogout}>
            <LogOut className="h-4 w-4 mr-1" /> Logout
          </Button>
        </div>
      </header>

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-14"
        >
          <h1 className="text-4xl font-display font-bold mb-3">
            Welcome, <span className="text-gradient">{user?.name}</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Discover your ideal career path with AI-powered insights for 2026 and beyond
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((f) => (
            <motion.button
              key={f.route}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: f.delay }}
              onClick={() => navigate(f.route)}
              className="glass-card p-8 text-left hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group cursor-pointer"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center transition-colors ${f.colorClass}`}>
                  <f.icon className={`h-7 w-7 ${f.iconClass}`} />
                </div>
                <span className="text-2xl">{f.emoji}</span>
              </div>
              <h2 className="text-xl font-display font-semibold mb-2">{f.title}</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.description}</p>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}
