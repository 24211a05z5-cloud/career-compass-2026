export interface CareerData {
  id: string;
  title: string;
  requiredSkills: Record<string, number>; // skill -> min level (1-10)
  demand: "High" | "Medium" | "Low";
  growthTrend: "Growing" | "Stable" | "Declining";
  aiImpact: "Low Risk" | "Medium Risk" | "High Risk";
  description: string;
  verdict: string;
  industryInsight: string;
}

export const PREDEFINED_SKILLS = [
  "Python", "Java", "JavaScript", "TypeScript", "C++",
  "DSA", "SQL", "Machine Learning", "Deep Learning", "Data Analysis",
  "Cloud Computing", "DevOps", "Cybersecurity", "Communication",
  "Leadership", "Design", "UI/UX", "Project Management",
  "React", "Node.js", "Mobile Development", "Blockchain",
  "NLP", "Computer Vision", "Statistics", "Excel",
];

export const CAREERS: CareerData[] = [
  {
    id: "data-scientist",
    title: "Data Scientist",
    requiredSkills: { Python: 7, "Machine Learning": 7, Statistics: 6, SQL: 6, "Data Analysis": 7, Communication: 5 },
    demand: "High",
    growthTrend: "Growing",
    aiImpact: "Low Risk",
    description: "Analyze complex data to extract insights and build predictive models.",
    verdict: "This career has high demand and low AI risk, making it a strong choice for 2026.",
    industryInsight: "Demand for data scientists is surging as companies invest heavily in AI-driven decision making.",
  },
  {
    id: "ml-engineer",
    title: "Machine Learning Engineer",
    requiredSkills: { Python: 8, "Machine Learning": 8, "Deep Learning": 7, "Cloud Computing": 5, DSA: 6, Statistics: 5 },
    demand: "High",
    growthTrend: "Growing",
    aiImpact: "Low Risk",
    description: "Design and deploy machine learning systems at scale.",
    verdict: "ML Engineering is one of the most in-demand roles with excellent growth trajectory for 2026.",
    industryInsight: "Every major tech company is scaling their ML infrastructure, creating unprecedented demand.",
  },
  {
    id: "frontend-dev",
    title: "Frontend Developer",
    requiredSkills: { JavaScript: 7, TypeScript: 6, React: 7, "UI/UX": 5, Design: 4, Communication: 4 },
    demand: "High",
    growthTrend: "Stable",
    aiImpact: "Medium Risk",
    description: "Build interactive user interfaces and web applications.",
    verdict: "Frontend development remains in demand but AI tools are changing the workflow significantly.",
    industryInsight: "AI-assisted coding is transforming frontend development — adaptability is key to staying relevant.",
  },
  {
    id: "backend-dev",
    title: "Backend Developer",
    requiredSkills: { Python: 6, Java: 6, SQL: 7, "Cloud Computing": 6, DSA: 6, DevOps: 4 },
    demand: "High",
    growthTrend: "Stable",
    aiImpact: "Medium Risk",
    description: "Build server-side logic, APIs, and database architectures.",
    verdict: "Backend development offers stable career prospects with moderate AI disruption risk.",
    industryInsight: "Serverless and cloud-native architectures are reshaping backend roles toward infrastructure expertise.",
  },
  {
    id: "cybersecurity-analyst",
    title: "Cybersecurity Analyst",
    requiredSkills: { Cybersecurity: 8, "Cloud Computing": 5, Python: 5, Communication: 5, DSA: 4, Leadership: 3 },
    demand: "High",
    growthTrend: "Growing",
    aiImpact: "Low Risk",
    description: "Protect organizations from cyber threats and vulnerabilities.",
    verdict: "Cybersecurity is a critical field with growing demand and strong job security for 2026.",
    industryInsight: "Rising cyber threats and regulatory requirements are driving explosive growth in security roles.",
  },
  {
    id: "cloud-architect",
    title: "Cloud Architect",
    requiredSkills: { "Cloud Computing": 8, DevOps: 7, Python: 5, Cybersecurity: 4, Leadership: 5, Communication: 5 },
    demand: "High",
    growthTrend: "Growing",
    aiImpact: "Low Risk",
    description: "Design and oversee cloud computing strategies and infrastructure.",
    verdict: "Cloud architecture is a high-demand, high-paying career with excellent 2026 prospects.",
    industryInsight: "Multi-cloud and hybrid strategies are making cloud architects indispensable to enterprises.",
  },
  {
    id: "product-manager",
    title: "Product Manager",
    requiredSkills: { Communication: 8, Leadership: 7, "Data Analysis": 5, "UI/UX": 4, "Project Management": 7, Design: 3 },
    demand: "Medium",
    growthTrend: "Stable",
    aiImpact: "Medium Risk",
    description: "Lead product strategy and coordinate cross-functional teams.",
    verdict: "Product management remains relevant but AI is automating parts of the analytical workflow.",
    industryInsight: "AI-native product management is an emerging specialty with strong growth potential.",
  },
  {
    id: "devops-engineer",
    title: "DevOps Engineer",
    requiredSkills: { DevOps: 8, "Cloud Computing": 7, Python: 5, Cybersecurity: 4, DSA: 3, Communication: 4 },
    demand: "High",
    growthTrend: "Growing",
    aiImpact: "Low Risk",
    description: "Bridge development and operations with automation and CI/CD pipelines.",
    verdict: "DevOps continues to grow as organizations prioritize deployment speed and reliability.",
    industryInsight: "Platform engineering is evolving from DevOps, creating new specialization opportunities.",
  },
  {
    id: "ux-designer",
    title: "UX Designer",
    requiredSkills: { "UI/UX": 8, Design: 7, Communication: 6, "Data Analysis": 4, "Project Management": 3 },
    demand: "Medium",
    growthTrend: "Stable",
    aiImpact: "Medium Risk",
    description: "Design intuitive and engaging user experiences for digital products.",
    verdict: "UX Design is evolving with AI tools — designers who leverage AI will thrive in 2026.",
    industryInsight: "AI-generated designs are augmenting UX workflows, shifting focus toward strategic thinking.",
  },
  {
    id: "blockchain-dev",
    title: "Blockchain Developer",
    requiredSkills: { Blockchain: 8, JavaScript: 6, Python: 5, Cybersecurity: 5, DSA: 6 },
    demand: "Medium",
    growthTrend: "Growing",
    aiImpact: "Low Risk",
    description: "Build decentralized applications and smart contracts.",
    verdict: "Blockchain is a niche but growing field — enterprise adoption is driving steady demand.",
    industryInsight: "Enterprise blockchain and DeFi applications are creating new specialized roles.",
  },
  {
    id: "nlp-engineer",
    title: "NLP Engineer",
    requiredSkills: { Python: 7, NLP: 8, "Machine Learning": 7, "Deep Learning": 6, Statistics: 5 },
    demand: "High",
    growthTrend: "Growing",
    aiImpact: "Low Risk",
    description: "Build systems that understand and generate human language.",
    verdict: "NLP Engineering is booming with the rise of large language models — a top career for 2026.",
    industryInsight: "The LLM revolution has made NLP engineers among the most sought-after professionals.",
  },
  {
    id: "mobile-dev",
    title: "Mobile App Developer",
    requiredSkills: { "Mobile Development": 8, JavaScript: 6, "UI/UX": 5, Design: 4, DSA: 4 },
    demand: "Medium",
    growthTrend: "Stable",
    aiImpact: "Medium Risk",
    description: "Create native and cross-platform mobile applications.",
    verdict: "Mobile development is stable but increasingly automated by cross-platform tools and AI.",
    industryInsight: "Cross-platform frameworks and AI code generation are reshaping mobile development roles.",
  },
  {
    id: "data-analyst",
    title: "Data Analyst",
    requiredSkills: { SQL: 7, Excel: 6, "Data Analysis": 7, Statistics: 5, Python: 4, Communication: 5 },
    demand: "Medium",
    growthTrend: "Stable",
    aiImpact: "High Risk",
    description: "Transform raw data into actionable business insights.",
    verdict: "Data analysis faces high AI disruption risk — consider upskilling toward data science.",
    industryInsight: "AI tools are rapidly automating routine analysis, pushing analysts toward specialized domains.",
  },
  {
    id: "fullstack-dev",
    title: "Full Stack Developer",
    requiredSkills: { JavaScript: 7, TypeScript: 6, React: 6, "Node.js": 6, SQL: 5, DevOps: 3 },
    demand: "High",
    growthTrend: "Stable",
    aiImpact: "Medium Risk",
    description: "Build complete web applications from frontend to backend.",
    verdict: "Full stack development offers versatility and strong demand, though AI is automating boilerplate.",
    industryInsight: "AI-augmented development is making full stack developers more productive than ever.",
  },
];

export function calculateMatch(
  userSkills: Record<string, number>,
  career: CareerData
): { percentage: number; matchedSkills: string[]; missingSkills: string[]; weakSkills: string[] } {
  const required = Object.entries(career.requiredSkills);
  let totalWeight = 0;
  let matchScore = 0;
  const matchedSkills: string[] = [];
  const missingSkills: string[] = [];
  const weakSkills: string[] = [];

  for (const [skill, minLevel] of required) {
    totalWeight += minLevel;
    const userLevel = userSkills[skill] || 0;
    if (userLevel === 0) {
      missingSkills.push(skill);
    } else if (userLevel < minLevel) {
      weakSkills.push(skill);
      matchScore += (userLevel / minLevel) * minLevel;
    } else {
      matchedSkills.push(skill);
      matchScore += minLevel;
    }
  }

  const percentage = totalWeight > 0 ? Math.round((matchScore / totalWeight) * 100) : 0;
  return { percentage, matchedSkills, missingSkills, weakSkills };
}

export function getTopCareers(userSkills: Record<string, number>, count = 5) {
  return CAREERS.map((career) => ({
    career,
    ...calculateMatch(userSkills, career),
  }))
    .sort((a, b) => b.percentage - a.percentage)
    .slice(0, count);
}

export function analyzeDreamJob(jobTitle: string, userSkills: Record<string, number>) {
  const normalized = jobTitle.toLowerCase().trim();
  const career = CAREERS.find(
    (c) =>
      c.title.toLowerCase().includes(normalized) ||
      normalized.includes(c.title.toLowerCase()) ||
      c.id.includes(normalized.replace(/\s+/g, "-"))
  );

  if (!career) {
    // Find closest match
    const closest = CAREERS.reduce((best, c) => {
      const words = normalized.split(/\s+/);
      const matches = words.filter(
        (w) => c.title.toLowerCase().includes(w) || c.id.includes(w)
      ).length;
      return matches > best.score ? { career: c, score: matches } : best;
    }, { career: CAREERS[0], score: 0 });
    
    if (closest.score > 0) {
      const match = calculateMatch(userSkills, closest.career);
      return { found: true, career: closest.career, ...match };
    }
    return null;
  }

  const match = calculateMatch(userSkills, career);
  return { found: true, career, ...match };
}

export function getAlternativeCareer(career: CareerData): CareerData | null {
  if (career.aiImpact !== "High Risk" && career.demand !== "Low") return null;
  return CAREERS.find(
    (c) =>
      c.id !== career.id &&
      c.aiImpact === "Low Risk" &&
      c.demand === "High" &&
      c.growthTrend === "Growing"
  ) || null;
}
