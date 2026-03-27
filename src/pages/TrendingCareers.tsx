import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, TrendingUp, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const trendingCareers = [
  {
    title: "AI Engineer",
    demand: 95,
    skills: ["Python", "Machine Learning", "Deep Learning", "Mathematics", "TensorFlow"],
    companies: ["Google", "Microsoft", "Amazon", "Infosys", "OpenAI"],
  },
  {
    title: "Data Scientist",
    demand: 90,
    skills: ["Python", "SQL", "Statistics", "Machine Learning", "Data Visualization"],
    companies: ["Google", "Amazon", "Meta", "Infosys", "IBM"],
  },
  {
    title: "Cloud Engineer",
    demand: 88,
    skills: ["AWS", "Azure", "Docker", "Kubernetes", "Linux"],
    companies: ["Amazon", "Microsoft", "Google", "Infosys", "Accenture"],
  },
  {
    title: "Cybersecurity Analyst",
    demand: 85,
    skills: ["Network Security", "Ethical Hacking", "SIEM", "Linux", "Risk Assessment"],
    companies: ["IBM", "Cisco", "Palo Alto Networks", "Infosys", "Deloitte"],
  },
  {
    title: "Product Manager",
    demand: 80,
    skills: ["Product Strategy", "Data Analysis", "UX Design", "Agile", "Communication"],
    companies: ["Google", "Microsoft", "Amazon", "Flipkart", "Swiggy"],
  },
];

const resources = [
  { name: "Udemy", url: "https://www.udemy.com/courses/search/?q=" },
  { name: "YouTube", url: "https://www.youtube.com/results?search_query=" },
  { name: "Infosys Springboard", url: "https://infyspringboard.onwingspan.com" },
  { name: "IBM SkillsBuild", url: "https://skillsbuild.org" },
];

function DemandBar({ value }: { value: number }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex-1 h-3 rounded-full bg-secondary overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-primary"
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
      <span className="text-sm font-semibold text-primary min-w-[40px] text-right">{value}%</span>
    </div>
  );
}

export default function TrendingCareers() {
  const navigate = useNavigate();

  const openResource = (resourceUrl: string, query: string) => {
    const url = resourceUrl.includes("?") ? `${resourceUrl}${encodeURIComponent(query)}` : resourceUrl;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <Button variant="ghost" size="icon" onClick={() => navigate("/dashboard")}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div className="flex items-center gap-2">
            <TrendingUp className="h-6 w-6 text-primary" />
            <h1 className="text-3xl font-display font-bold">Trending Careers <span className="text-gradient">2026</span></h1>
          </div>
        </div>

        {/* Market Demand Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-6 mb-8"
        >
          <h2 className="text-xl font-display font-semibold mb-6 flex items-center gap-2">
            📊 Market Demand in 2026
          </h2>
          <div className="space-y-4">
            {trendingCareers.map((career) => (
              <div key={career.title}>
                <p className="text-sm font-medium mb-1">{career.title}</p>
                <DemandBar value={career.demand} />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Career Detail Cards */}
        <div className="space-y-6">
          {trendingCareers.map((career, i) => (
            <motion.div
              key={career.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-display font-semibold">{career.title}</h3>
                <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary">
                  {career.demand}% demand
                </span>
              </div>

              {/* Skills */}
              <div className="mb-4">
                <p className="text-sm text-muted-foreground mb-2">🎯 Key Skills</p>
                <div className="flex flex-wrap gap-2">
                  {career.skills.map((skill) => (
                    <span key={skill} className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Resources */}
              <div className="mb-4">
                <p className="text-sm text-muted-foreground mb-2">📚 Learning Resources</p>
                <div className="flex flex-wrap gap-2">
                  {resources.map((r) => (
                    <Button
                      key={r.name}
                      variant="outline"
                      size="sm"
                      className="text-xs"
                      onClick={() => openResource(r.url, career.title)}
                    >
                      {r.name} <ExternalLink className="h-3 w-3 ml-1" />
                    </Button>
                  ))}
                </div>
              </div>

              {/* Companies */}
              <div>
                <p className="text-sm text-muted-foreground mb-2">🏢 Companies Hiring</p>
                <div className="flex flex-wrap gap-2">
                  {career.companies.map((c) => (
                    <span key={c} className="text-xs px-2.5 py-1 rounded-full bg-accent/10 text-accent-foreground">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
