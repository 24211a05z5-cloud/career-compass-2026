import React, { createContext, useContext, useState, ReactNode } from "react";

interface SkillsContextType {
  skills: Record<string, number>;
  addSkill: (name: string, level: number) => void;
  removeSkill: (name: string) => void;
  updateSkill: (name: string, level: number) => void;
  clearSkills: () => void;
}

const SkillsContext = createContext<SkillsContextType | null>(null);

export function SkillsProvider({ children }: { children: ReactNode }) {
  const [skills, setSkills] = useState<Record<string, number>>({});

  const addSkill = (name: string, level: number) =>
    setSkills((prev) => ({ ...prev, [name]: level }));

  const removeSkill = (name: string) =>
    setSkills((prev) => {
      const next = { ...prev };
      delete next[name];
      return next;
    });

  const updateSkill = (name: string, level: number) =>
    setSkills((prev) => ({ ...prev, [name]: level }));

  const clearSkills = () => setSkills({});

  return (
    <SkillsContext.Provider value={{ skills, addSkill, removeSkill, updateSkill, clearSkills }}>
      {children}
    </SkillsContext.Provider>
  );
}

export function useSkills() {
  const ctx = useContext(SkillsContext);
  if (!ctx) throw new Error("useSkills must be used within SkillsProvider");
  return ctx;
}
