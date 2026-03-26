export interface LearningResource {
  platform: string;
  title: string;
  url: string;
}

export interface CompanyInfo {
  name: string;
  applyUrl: string;
}

export const SKILL_RESOURCES: Record<string, LearningResource[]> = {
  Python: [
    { platform: "Udemy", title: "Complete Python Bootcamp", url: "https://www.udemy.com/courses/search/?q=python+programming" },
    { platform: "Infosys Springboard", title: "Python Programming Foundation", url: "https://infyspringboard.onwingspan.com" },
    { platform: "IBM SkillsBuild", title: "Python for Data Science", url: "https://skillsbuild.org" },
    { platform: "YouTube", title: "Python Full Course", url: "https://www.youtube.com/results?search_query=python+tutorial+for+beginners" },
  ],
  Java: [
    { platform: "Udemy", title: "Java Programming Masterclass", url: "https://www.udemy.com/courses/search/?q=java+programming" },
    { platform: "Infosys Springboard", title: "Core Java Learning Path", url: "https://infyspringboard.onwingspan.com" },
    { platform: "IBM SkillsBuild", title: "Java Development Fundamentals", url: "https://skillsbuild.org" },
    { platform: "YouTube", title: "Java Tutorial for Beginners", url: "https://www.youtube.com/results?search_query=java+tutorial+for+beginners" },
  ],
  JavaScript: [
    { platform: "Udemy", title: "The Complete JavaScript Course", url: "https://www.udemy.com/courses/search/?q=javascript+complete+course" },
    { platform: "Infosys Springboard", title: "JavaScript Essentials", url: "https://infyspringboard.onwingspan.com" },
    { platform: "IBM SkillsBuild", title: "Web Development with JavaScript", url: "https://skillsbuild.org" },
    { platform: "YouTube", title: "JavaScript Crash Course", url: "https://www.youtube.com/results?search_query=javascript+tutorial+for+beginners" },
  ],
  TypeScript: [
    { platform: "Udemy", title: "Understanding TypeScript", url: "https://www.udemy.com/courses/search/?q=typescript" },
    { platform: "Infosys Springboard", title: "TypeScript for Developers", url: "https://infyspringboard.onwingspan.com" },
    { platform: "IBM SkillsBuild", title: "Modern Web Development", url: "https://skillsbuild.org" },
    { platform: "YouTube", title: "TypeScript Tutorial", url: "https://www.youtube.com/results?search_query=typescript+tutorial+for+beginners" },
  ],
  "C++": [
    { platform: "Udemy", title: "Beginning C++ Programming", url: "https://www.udemy.com/courses/search/?q=c%2B%2B+programming" },
    { platform: "Infosys Springboard", title: "C++ Fundamentals", url: "https://infyspringboard.onwingspan.com" },
    { platform: "IBM SkillsBuild", title: "Systems Programming with C++", url: "https://skillsbuild.org" },
    { platform: "YouTube", title: "C++ Full Course", url: "https://www.youtube.com/results?search_query=c%2B%2B+tutorial+for+beginners" },
  ],
  DSA: [
    { platform: "Udemy", title: "Data Structures & Algorithms Masterclass", url: "https://www.udemy.com/courses/search/?q=data+structures+and+algorithms" },
    { platform: "Infosys Springboard", title: "DSA Problem Solving Track", url: "https://infyspringboard.onwingspan.com" },
    { platform: "IBM SkillsBuild", title: "Algorithmic Thinking", url: "https://skillsbuild.org" },
    { platform: "YouTube", title: "DSA Full Course", url: "https://www.youtube.com/results?search_query=data+structures+and+algorithms+full+course" },
  ],
  SQL: [
    { platform: "Udemy", title: "The Complete SQL Bootcamp", url: "https://www.udemy.com/courses/search/?q=sql+for+beginners" },
    { platform: "Infosys Springboard", title: "Database Management with SQL", url: "https://infyspringboard.onwingspan.com" },
    { platform: "IBM SkillsBuild", title: "SQL and Relational Databases", url: "https://skillsbuild.org" },
    { platform: "YouTube", title: "SQL Tutorial for Beginners", url: "https://www.youtube.com/results?search_query=sql+for+beginners" },
  ],
  "Machine Learning": [
    { platform: "Udemy", title: "Machine Learning A-Z", url: "https://www.udemy.com/courses/search/?q=machine+learning" },
    { platform: "Infosys Springboard", title: "AI/ML Learning Path", url: "https://infyspringboard.onwingspan.com" },
    { platform: "IBM SkillsBuild", title: "Machine Learning with Python", url: "https://skillsbuild.org" },
    { platform: "YouTube", title: "Machine Learning Course", url: "https://www.youtube.com/results?search_query=machine+learning+basics" },
  ],
  "Deep Learning": [
    { platform: "Udemy", title: "Deep Learning A-Z", url: "https://www.udemy.com/courses/search/?q=deep+learning" },
    { platform: "Infosys Springboard", title: "Deep Learning Specialization", url: "https://infyspringboard.onwingspan.com" },
    { platform: "IBM SkillsBuild", title: "Neural Networks and Deep Learning", url: "https://skillsbuild.org" },
    { platform: "YouTube", title: "Deep Learning Crash Course", url: "https://www.youtube.com/results?search_query=deep+learning+tutorial" },
  ],
  "Data Analysis": [
    { platform: "Udemy", title: "Data Analysis with Python and Pandas", url: "https://www.udemy.com/courses/search/?q=data+analysis+python" },
    { platform: "Infosys Springboard", title: "Data Analytics Essentials", url: "https://infyspringboard.onwingspan.com" },
    { platform: "IBM SkillsBuild", title: "Data Analysis Foundations", url: "https://skillsbuild.org" },
    { platform: "YouTube", title: "Data Analysis Full Course", url: "https://www.youtube.com/results?search_query=data+analysis+tutorial" },
  ],
  "Cloud Computing": [
    { platform: "Udemy", title: "AWS Certified Cloud Practitioner", url: "https://www.udemy.com/courses/search/?q=cloud+computing" },
    { platform: "Infosys Springboard", title: "Cloud Computing Fundamentals", url: "https://infyspringboard.onwingspan.com" },
    { platform: "IBM SkillsBuild", title: "Cloud Computing Essentials", url: "https://skillsbuild.org" },
    { platform: "YouTube", title: "Cloud Computing Full Course", url: "https://www.youtube.com/results?search_query=cloud+computing+tutorial" },
  ],
  DevOps: [
    { platform: "Udemy", title: "DevOps Beginners to Advanced", url: "https://www.udemy.com/courses/search/?q=devops" },
    { platform: "Infosys Springboard", title: "DevOps Engineering Path", url: "https://infyspringboard.onwingspan.com" },
    { platform: "IBM SkillsBuild", title: "DevOps and CI/CD Pipelines", url: "https://skillsbuild.org" },
    { platform: "YouTube", title: "DevOps Tutorial", url: "https://www.youtube.com/results?search_query=devops+tutorial+for+beginners" },
  ],
  Cybersecurity: [
    { platform: "Udemy", title: "The Complete Cyber Security Course", url: "https://www.udemy.com/courses/search/?q=cybersecurity" },
    { platform: "Infosys Springboard", title: "Cybersecurity Fundamentals", url: "https://infyspringboard.onwingspan.com" },
    { platform: "IBM SkillsBuild", title: "Cybersecurity Analyst Professional", url: "https://skillsbuild.org" },
    { platform: "YouTube", title: "Cybersecurity Full Course", url: "https://www.youtube.com/results?search_query=cybersecurity+tutorial+for+beginners" },
  ],
  Communication: [
    { platform: "Udemy", title: "Communication Skills Masterclass", url: "https://www.udemy.com/courses/search/?q=communication+skills" },
    { platform: "Infosys Springboard", title: "Business Communication", url: "https://infyspringboard.onwingspan.com" },
    { platform: "IBM SkillsBuild", title: "Professional Communication", url: "https://skillsbuild.org" },
    { platform: "YouTube", title: "Communication Skills – TED Talks", url: "https://www.youtube.com/results?search_query=communication+skills+ted+talk" },
  ],
  Leadership: [
    { platform: "Udemy", title: "Leadership: Practical Skills", url: "https://www.udemy.com/courses/search/?q=leadership+skills" },
    { platform: "Infosys Springboard", title: "Leadership Development Program", url: "https://infyspringboard.onwingspan.com" },
    { platform: "IBM SkillsBuild", title: "Leadership and Management", url: "https://skillsbuild.org" },
    { platform: "YouTube", title: "Leadership Skills", url: "https://www.youtube.com/results?search_query=leadership+skills+tutorial" },
  ],
  Design: [
    { platform: "Udemy", title: "Graphic Design Masterclass", url: "https://www.udemy.com/courses/search/?q=graphic+design" },
    { platform: "Infosys Springboard", title: "Visual Design Principles", url: "https://infyspringboard.onwingspan.com" },
    { platform: "IBM SkillsBuild", title: "Design Thinking", url: "https://skillsbuild.org" },
    { platform: "YouTube", title: "Graphic Design Tutorial", url: "https://www.youtube.com/results?search_query=graphic+design+tutorial" },
  ],
  "UI/UX": [
    { platform: "Udemy", title: "Complete UI/UX Design Course", url: "https://www.udemy.com/courses/search/?q=ui+ux+design" },
    { platform: "Infosys Springboard", title: "UX Design Fundamentals", url: "https://infyspringboard.onwingspan.com" },
    { platform: "IBM SkillsBuild", title: "User Experience Design", url: "https://skillsbuild.org" },
    { platform: "YouTube", title: "UX Design Course", url: "https://www.youtube.com/results?search_query=ui+ux+design+tutorial" },
  ],
  "Project Management": [
    { platform: "Udemy", title: "PMP Exam Prep Seminar", url: "https://www.udemy.com/courses/search/?q=project+management" },
    { platform: "Infosys Springboard", title: "Project Management Essentials", url: "https://infyspringboard.onwingspan.com" },
    { platform: "IBM SkillsBuild", title: "Project Management Fundamentals", url: "https://skillsbuild.org" },
    { platform: "YouTube", title: "Project Management Full Course", url: "https://www.youtube.com/results?search_query=project+management+tutorial" },
  ],
  React: [
    { platform: "Udemy", title: "React – The Complete Guide", url: "https://www.udemy.com/courses/search/?q=react+js" },
    { platform: "Infosys Springboard", title: "React.js Development", url: "https://infyspringboard.onwingspan.com" },
    { platform: "IBM SkillsBuild", title: "Frontend Development with React", url: "https://skillsbuild.org" },
    { platform: "YouTube", title: "React JS Full Course", url: "https://www.youtube.com/results?search_query=react+js+tutorial+for+beginners" },
  ],
  "Node.js": [
    { platform: "Udemy", title: "The Complete Node.js Developer Course", url: "https://www.udemy.com/courses/search/?q=node+js" },
    { platform: "Infosys Springboard", title: "Node.js Backend Development", url: "https://infyspringboard.onwingspan.com" },
    { platform: "IBM SkillsBuild", title: "Server-side JavaScript", url: "https://skillsbuild.org" },
    { platform: "YouTube", title: "Node.js Crash Course", url: "https://www.youtube.com/results?search_query=node+js+tutorial+for+beginners" },
  ],
  "Mobile Development": [
    { platform: "Udemy", title: "Flutter & Dart Complete Guide", url: "https://www.udemy.com/courses/search/?q=mobile+app+development" },
    { platform: "Infosys Springboard", title: "Mobile App Development Path", url: "https://infyspringboard.onwingspan.com" },
    { platform: "IBM SkillsBuild", title: "Mobile Application Development", url: "https://skillsbuild.org" },
    { platform: "YouTube", title: "Mobile Development Tutorial", url: "https://www.youtube.com/results?search_query=mobile+app+development+tutorial" },
  ],
  Blockchain: [
    { platform: "Udemy", title: "Blockchain and Bitcoin Fundamentals", url: "https://www.udemy.com/courses/search/?q=blockchain" },
    { platform: "Infosys Springboard", title: "Blockchain Technology", url: "https://infyspringboard.onwingspan.com" },
    { platform: "IBM SkillsBuild", title: "Blockchain Essentials", url: "https://skillsbuild.org" },
    { platform: "YouTube", title: "Blockchain Full Course", url: "https://www.youtube.com/results?search_query=blockchain+tutorial+for+beginners" },
  ],
  NLP: [
    { platform: "Udemy", title: "NLP – Natural Language Processing with Python", url: "https://www.udemy.com/courses/search/?q=natural+language+processing" },
    { platform: "Infosys Springboard", title: "NLP and Text Analytics", url: "https://infyspringboard.onwingspan.com" },
    { platform: "IBM SkillsBuild", title: "Natural Language Processing", url: "https://skillsbuild.org" },
    { platform: "YouTube", title: "NLP Full Course", url: "https://www.youtube.com/results?search_query=natural+language+processing+tutorial" },
  ],
  "Computer Vision": [
    { platform: "Udemy", title: "Computer Vision with OpenCV and Python", url: "https://www.udemy.com/courses/search/?q=computer+vision" },
    { platform: "Infosys Springboard", title: "Computer Vision Fundamentals", url: "https://infyspringboard.onwingspan.com" },
    { platform: "IBM SkillsBuild", title: "Image Recognition and CV", url: "https://skillsbuild.org" },
    { platform: "YouTube", title: "Computer Vision Course", url: "https://www.youtube.com/results?search_query=computer+vision+tutorial" },
  ],
  Statistics: [
    { platform: "Udemy", title: "Statistics for Data Science", url: "https://www.udemy.com/courses/search/?q=statistics+for+data+science" },
    { platform: "Infosys Springboard", title: "Applied Statistics", url: "https://infyspringboard.onwingspan.com" },
    { platform: "IBM SkillsBuild", title: "Statistics Foundations", url: "https://skillsbuild.org" },
    { platform: "YouTube", title: "Statistics Full Course", url: "https://www.youtube.com/results?search_query=statistics+for+beginners" },
  ],
  Excel: [
    { platform: "Udemy", title: "Microsoft Excel – From Beginner to Advanced", url: "https://www.udemy.com/courses/search/?q=microsoft+excel" },
    { platform: "Infosys Springboard", title: "Excel for Business Analytics", url: "https://infyspringboard.onwingspan.com" },
    { platform: "IBM SkillsBuild", title: "Data Analysis with Excel", url: "https://skillsbuild.org" },
    { platform: "YouTube", title: "Excel Full Course", url: "https://www.youtube.com/results?search_query=excel+tutorial+for+beginners" },
  ],
};

export const CAREER_COMPANIES: Record<string, CompanyInfo[]> = {
  "data-scientist": [
    { name: "Google", applyUrl: "https://careers.google.com" },
    { name: "Microsoft", applyUrl: "https://careers.microsoft.com" },
    { name: "Amazon", applyUrl: "https://www.amazon.jobs" },
    { name: "TCS", applyUrl: "https://www.tcs.com/careers" },
    { name: "IBM", applyUrl: "https://www.ibm.com/careers" },
  ],
  "ml-engineer": [
    { name: "Google DeepMind", applyUrl: "https://careers.google.com" },
    { name: "Meta AI", applyUrl: "https://www.metacareers.com" },
    { name: "NVIDIA", applyUrl: "https://www.nvidia.com/en-us/about-nvidia/careers/" },
    { name: "Amazon AWS", applyUrl: "https://www.amazon.jobs" },
    { name: "OpenAI", applyUrl: "https://openai.com/careers" },
  ],
  "frontend-dev": [
    { name: "Google", applyUrl: "https://careers.google.com" },
    { name: "Airbnb", applyUrl: "https://careers.airbnb.com" },
    { name: "Shopify", applyUrl: "https://www.shopify.com/careers" },
    { name: "Flipkart", applyUrl: "https://www.flipkartcareers.com" },
    { name: "Infosys", applyUrl: "https://www.infosys.com/careers" },
  ],
  "backend-dev": [
    { name: "Amazon", applyUrl: "https://www.amazon.jobs" },
    { name: "Microsoft", applyUrl: "https://careers.microsoft.com" },
    { name: "Stripe", applyUrl: "https://stripe.com/jobs" },
    { name: "Wipro", applyUrl: "https://careers.wipro.com" },
    { name: "Oracle", applyUrl: "https://www.oracle.com/careers/" },
  ],
  "cybersecurity-analyst": [
    { name: "Palo Alto Networks", applyUrl: "https://jobs.paloaltonetworks.com" },
    { name: "CrowdStrike", applyUrl: "https://www.crowdstrike.com/careers/" },
    { name: "IBM Security", applyUrl: "https://www.ibm.com/careers" },
    { name: "Deloitte", applyUrl: "https://www2.deloitte.com/careers" },
    { name: "TCS", applyUrl: "https://www.tcs.com/careers" },
  ],
  "cloud-architect": [
    { name: "AWS", applyUrl: "https://www.amazon.jobs" },
    { name: "Microsoft Azure", applyUrl: "https://careers.microsoft.com" },
    { name: "Google Cloud", applyUrl: "https://careers.google.com" },
    { name: "Accenture", applyUrl: "https://www.accenture.com/careers" },
    { name: "HCL Technologies", applyUrl: "https://www.hcltech.com/careers" },
  ],
  "product-manager": [
    { name: "Google", applyUrl: "https://careers.google.com" },
    { name: "Meta", applyUrl: "https://www.metacareers.com" },
    { name: "Atlassian", applyUrl: "https://www.atlassian.com/company/careers" },
    { name: "Swiggy", applyUrl: "https://careers.swiggy.com" },
    { name: "Razorpay", applyUrl: "https://razorpay.com/jobs/" },
  ],
  "devops-engineer": [
    { name: "Netflix", applyUrl: "https://jobs.netflix.com" },
    { name: "GitHub", applyUrl: "https://github.com/about/careers" },
    { name: "HashiCorp", applyUrl: "https://www.hashicorp.com/careers" },
    { name: "Infosys", applyUrl: "https://www.infosys.com/careers" },
    { name: "Red Hat", applyUrl: "https://www.redhat.com/en/jobs" },
  ],
  "ux-designer": [
    { name: "Apple", applyUrl: "https://www.apple.com/careers" },
    { name: "Google", applyUrl: "https://careers.google.com" },
    { name: "Figma", applyUrl: "https://www.figma.com/careers/" },
    { name: "Adobe", applyUrl: "https://www.adobe.com/careers.html" },
    { name: "Zoho", applyUrl: "https://www.zoho.com/careers.html" },
  ],
  "blockchain-dev": [
    { name: "Coinbase", applyUrl: "https://www.coinbase.com/careers" },
    { name: "Polygon", applyUrl: "https://polygon.technology/careers" },
    { name: "ConsenSys", applyUrl: "https://consensys.io/careers" },
    { name: "Binance", applyUrl: "https://www.binance.com/en/careers" },
    { name: "Ripple", applyUrl: "https://ripple.com/careers/" },
  ],
  "nlp-engineer": [
    { name: "OpenAI", applyUrl: "https://openai.com/careers" },
    { name: "Google DeepMind", applyUrl: "https://careers.google.com" },
    { name: "Anthropic", applyUrl: "https://www.anthropic.com/careers" },
    { name: "Hugging Face", applyUrl: "https://huggingface.co/jobs" },
    { name: "Microsoft", applyUrl: "https://careers.microsoft.com" },
  ],
  "mobile-dev": [
    { name: "Apple", applyUrl: "https://www.apple.com/careers" },
    { name: "Google", applyUrl: "https://careers.google.com" },
    { name: "Samsung", applyUrl: "https://www.samsung.com/global/careers/" },
    { name: "PhonePe", applyUrl: "https://www.phonepe.com/careers/" },
    { name: "Paytm", applyUrl: "https://paytm.com/careers" },
  ],
  "data-analyst": [
    { name: "Accenture", applyUrl: "https://www.accenture.com/careers" },
    { name: "Deloitte", applyUrl: "https://www2.deloitte.com/careers" },
    { name: "EY", applyUrl: "https://www.ey.com/en_in/careers" },
    { name: "Mu Sigma", applyUrl: "https://www.mu-sigma.com/careers" },
    { name: "Capgemini", applyUrl: "https://www.capgemini.com/careers/" },
  ],
  "fullstack-dev": [
    { name: "Microsoft", applyUrl: "https://careers.microsoft.com" },
    { name: "Amazon", applyUrl: "https://www.amazon.jobs" },
    { name: "Thoughtworks", applyUrl: "https://www.thoughtworks.com/careers" },
    { name: "Freshworks", applyUrl: "https://www.freshworks.com/company/careers/" },
    { name: "Zomato", applyUrl: "https://www.zomato.com/careers" },
  ],
};
