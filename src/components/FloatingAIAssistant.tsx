import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Send, User, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useAuth } from "@/context/AuthContext";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const qaDataset: { q: string[]; a: string }[] = [
  { q: ["what is data science", "data science"], a: "Data Science involves analyzing data using programming, statistics, and machine learning to extract meaningful insights and drive decision-making." },
  { q: ["skills required for ai engineer", "ai engineer skills", "skills for ai"], a: "Key skills for an AI Engineer include Python, Machine Learning, Deep Learning, Mathematics, and frameworks like TensorFlow and PyTorch." },
  { q: ["best platforms to learn python", "learn python", "python courses"], a: "You can learn Python on Udemy, Infosys Springboard, IBM SkillsBuild, and YouTube. Each platform offers beginner to advanced courses." },
  { q: ["top companies for software jobs", "software companies", "companies hiring"], a: "Top companies for software jobs include Google, Microsoft, Amazon, Infosys, IBM, Meta, and Accenture." },
  { q: ["high demand jobs in 2026", "trending jobs", "top jobs 2026", "demand jobs"], a: "High-demand jobs in 2026 include AI Engineer, Data Scientist, Cybersecurity Analyst, Cloud Engineer, and Product Manager." },
  { q: ["what is machine learning", "machine learning"], a: "Machine Learning is a subset of AI that enables systems to learn and improve from experience without being explicitly programmed." },
  { q: ["what is cybersecurity", "cybersecurity"], a: "Cybersecurity involves protecting systems, networks, and data from digital attacks, unauthorized access, and damage." },
  { q: ["what is cloud computing", "cloud computing"], a: "Cloud Computing delivers computing services like storage, servers, databases, and software over the internet, enabling scalable and flexible IT infrastructure." },
  { q: ["how to become a data scientist", "become data scientist"], a: "To become a Data Scientist, learn Python, SQL, Statistics, and Machine Learning. Build projects, earn certifications, and practice on platforms like Kaggle." },
  { q: ["what is product management", "product manager role"], a: "Product Management involves guiding the development of a product from concept to launch, balancing user needs, business goals, and technical feasibility." },
];

const suggestedQuestions = [
  "What is Data Science?",
  "Skills for AI Engineer?",
  "Learn Python?",
  "Top companies?",
  "Jobs in 2026?",
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

export default function FloatingAIAssistant() {
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hi! I'm your Career AI Assistant. Ask me about careers, skills, or job trends for 2026. 🚀" },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  if (!user) return null;

  const handleSend = (text?: string) => {
    const msg = (text ?? input).trim();
    if (!msg) return;
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: msg }]);
    setIsTyping(true);
    setTimeout(() => {
      setMessages((prev) => [...prev, { role: "assistant", content: findAnswer(msg) }]);
      setIsTyping(false);
    }, 800);
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen((o) => !o)}
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center hover:bg-primary/90 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Bot className="h-6 w-6" />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-[360px] max-h-[500px] flex flex-col rounded-2xl border border-border bg-background shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-card">
              <Bot className="h-5 w-5 text-primary" />
              <span className="font-semibold text-sm text-foreground">Career AI Assistant</span>
            </div>

            {/* Suggested Questions */}
            <div className="flex flex-wrap gap-1.5 px-3 py-2 border-b border-border">
              {suggestedQuestions.map((q) => (
                <button
                  key={q}
                  onClick={() => handleSend(q)}
                  className="text-[10px] px-2 py-1 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Messages */}
            <ScrollArea className="flex-1 px-3 py-3 min-h-0 max-h-[300px]">
              <div className="space-y-3">
                {messages.map((msg, i) => (
                  <div key={i} className={`flex gap-2 ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                    {msg.role === "assistant" && (
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Bot className="h-3 w-3 text-primary" />
                      </div>
                    )}
                    <div
                      className={`max-w-[80%] px-3 py-2 rounded-xl text-xs leading-relaxed ${
                        msg.role === "user"
                          ? "bg-primary text-primary-foreground rounded-br-sm"
                          : "bg-secondary text-secondary-foreground rounded-bl-sm"
                      }`}
                    >
                      {msg.content}
                    </div>
                    {msg.role === "user" && (
                      <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                        <User className="h-3 w-3 text-accent-foreground" />
                      </div>
                    )}
                  </div>
                ))}
                {isTyping && (
                  <div className="flex gap-2">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Bot className="h-3 w-3 text-primary" />
                    </div>
                    <div className="bg-secondary text-secondary-foreground px-3 py-2 rounded-xl rounded-bl-sm text-xs">
                      <span className="animate-pulse">Thinking...</span>
                    </div>
                  </div>
                )}
                <div ref={scrollRef} />
              </div>
            </ScrollArea>

            {/* Input */}
            <div className="flex gap-2 p-3 border-t border-border">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask about careers..."
                className="flex-1 h-8 text-xs"
              />
              <Button onClick={() => handleSend()} disabled={!input.trim()} size="icon" className="h-8 w-8">
                <Send className="h-3.5 w-3.5" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
