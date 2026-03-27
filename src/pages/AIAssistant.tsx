import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Bot, Send, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const qaDataset: { q: string[]; a: string }[] = [
  {
    q: ["what is data science", "data science"],
    a: "Data Science involves analyzing data using programming, statistics, and machine learning to extract meaningful insights and drive decision-making.",
  },
  {
    q: ["skills required for ai engineer", "ai engineer skills", "skills for ai"],
    a: "Key skills for an AI Engineer include Python, Machine Learning, Deep Learning, Mathematics, and frameworks like TensorFlow and PyTorch.",
  },
  {
    q: ["best platforms to learn python", "learn python", "python courses"],
    a: "You can learn Python on Udemy, Infosys Springboard, IBM SkillsBuild, and YouTube. Each platform offers beginner to advanced courses.",
  },
  {
    q: ["top companies for software jobs", "software companies", "companies hiring"],
    a: "Top companies for software jobs include Google, Microsoft, Amazon, Infosys, IBM, Meta, and Accenture.",
  },
  {
    q: ["high demand jobs in 2026", "trending jobs", "top jobs 2026", "demand jobs"],
    a: "High-demand jobs in 2026 include AI Engineer, Data Scientist, Cybersecurity Analyst, Cloud Engineer, and Product Manager.",
  },
  {
    q: ["what is machine learning", "machine learning"],
    a: "Machine Learning is a subset of AI that enables systems to learn and improve from experience without being explicitly programmed.",
  },
  {
    q: ["what is cybersecurity", "cybersecurity"],
    a: "Cybersecurity involves protecting systems, networks, and data from digital attacks, unauthorized access, and damage.",
  },
  {
    q: ["what is cloud computing", "cloud computing"],
    a: "Cloud Computing delivers computing services like storage, servers, databases, and software over the internet, enabling scalable and flexible IT infrastructure.",
  },
  {
    q: ["how to become a data scientist", "become data scientist"],
    a: "To become a Data Scientist, learn Python, SQL, Statistics, and Machine Learning. Build projects, earn certifications, and practice on platforms like Kaggle.",
  },
  {
    q: ["what is product management", "product manager role"],
    a: "Product Management involves guiding the development of a product from concept to launch, balancing user needs, business goals, and technical feasibility.",
  },
];

const suggestedQuestions = [
  "What is Data Science?",
  "Skills required for AI Engineer?",
  "Best platforms to learn Python?",
  "Top companies for software jobs?",
  "High demand jobs in 2026?",
];

function findAnswer(input: string): string {
  const normalized = input.toLowerCase().replace(/[?.,!]/g, "").trim();
  for (const entry of qaDataset) {
    for (const q of entry.q) {
      if (normalized.includes(q)) return entry.a;
    }
  }
  return "I can help with career, skills, and job-related queries. Please try one of the suggested questions or ask about careers, skills, or job trends.";
}

export default function AIAssistant() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hi! I'm your Career AI Assistant. Ask me about careers, skills, or job trends for 2026. 🚀" },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSend = (text?: string) => {
    const msg = (text ?? input).trim();
    if (!msg) return;
    setInput("");

    const userMsg: Message = { role: "user", content: msg };
    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      const answer = findAnswer(msg);
      setMessages((prev) => [...prev, { role: "assistant", content: answer }]);
      setIsTyping(false);
    }, 800);
  };

  return (
    <div className="min-h-screen flex flex-col p-6">
      <div className="max-w-3xl mx-auto w-full flex flex-col flex-1">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <Button variant="ghost" size="icon" onClick={() => navigate("/dashboard")}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div className="flex items-center gap-2">
            <Bot className="h-6 w-6 text-primary" />
            <h1 className="text-2xl font-display font-bold">Career <span className="text-gradient">AI Assistant</span></h1>
          </div>
        </div>

        {/* Suggested Questions */}
        <div className="flex flex-wrap gap-2 mb-4">
          {suggestedQuestions.map((q) => (
            <button
              key={q}
              onClick={() => handleSend(q)}
              className="text-xs px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
            >
              {q}
            </button>
          ))}
        </div>

        {/* Chat Area */}
        <ScrollArea className="flex-1 glass-card p-4 mb-4 min-h-[400px] max-h-[500px]">
          <div className="space-y-4">
            {messages.map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex gap-3 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                {msg.role === "assistant" && (
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Bot className="h-4 w-4 text-primary" />
                  </div>
                )}
                <div
                  className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-primary text-primary-foreground rounded-br-md"
                      : "bg-secondary text-secondary-foreground rounded-bl-md"
                  }`}
                >
                  {msg.content}
                </div>
                {msg.role === "user" && (
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <User className="h-4 w-4 text-accent-foreground" />
                  </div>
                )}
              </motion.div>
            ))}
            {isTyping && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Bot className="h-4 w-4 text-primary" />
                </div>
                <div className="bg-secondary text-secondary-foreground px-4 py-2.5 rounded-2xl rounded-bl-md text-sm">
                  <span className="animate-pulse">Thinking...</span>
                </div>
              </motion.div>
            )}
            <div ref={scrollRef} />
          </div>
        </ScrollArea>

        {/* Input */}
        <div className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Ask about careers, skills, or trends..."
            className="flex-1"
          />
          <Button onClick={() => handleSend()} disabled={!input.trim()}>
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
