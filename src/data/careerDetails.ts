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
    { platform: "Udemy", title: "Complete Python Bootcamp", url: "https://www.udemy.com/course/complete-python-bootcamp/" },
    { platform: "Infosys Springboard", title: "Python Programming Foundation", url: "https://infyspringboard.onwingspan.com" },
    { platform: "IBM SkillsBuild", title: "Python for Data Science", url: "https://skillsbuild.org" },
    { platform: "YouTube", title: "Python Full Course – freeCodeCamp", url: "https://www.youtube.com/watch?v=rfscVS0vtbw" },
  ],
  Java: [
    { platform: "Udemy", title: "Java Programming Masterclass", url: "https://www.udemy.com/course/java-the-complete-java-developer-course/" },
    { platform: "Infosys Springboard", title: "Core Java Learning Path", url: "https://infyspringboard.onwingspan.com" },
    { platform: "IBM SkillsBuild", title: "Java Development Fundamentals", url: "https://skillsbuild.org" },
    { platform: "YouTube", title: "Java Tutorial for Beginners – Programming with Mosh", url: "https://www.youtube.com/watch?v=eIrMbAQSU34" },
  ],
  JavaScript: [
    { platform: "Udemy", title: "The Complete JavaScript Course", url: "https://www.udemy.com/course/the-complete-javascript-course/" },
    { platform: "Infosys Springboard", title: "JavaScript Essentials", url: "https://infyspringboard.onwingspan.com" },
    { platform: "IBM SkillsBuild", title: "Web Development with JavaScript", url: "https://skillsbuild.org" },
    { platform: "YouTube", title: "JavaScript Crash Course – Traversy Media", url: "https://www.youtube.com/watch?v=hdI2bqOjy3c" },
  ],
  TypeScript: [
    { platform: "Udemy", title: "Understanding TypeScript", url: "https://www.udemy.com/course/understanding-typescript/" },
    { platform: "Infosys Springboard", title: "TypeScript for Developers", url: "https://infyspringboard.onwingspan.com" },
    { platform: "IBM SkillsBuild", title: "Modern Web Development", url: "https://skillsbuild.org" },
    { platform: "YouTube", title: "TypeScript Tutorial – The Net Ninja", url: "https://www.youtube.com/watch?v=2pZmKW9-I_k" },
  ],
  "C++": [
    { platform: "Udemy", title: "Beginning C++ Programming", url: "https://www.udemy.com/course/beginning-c-plus-plus-programming/" },
    { platform: "Infosys Springboard", title: "C++ Fundamentals", url: "https://infyspringboard.onwingspan.com" },
    { platform: "IBM SkillsBuild", title: "Systems Programming with C++", url: "https://skillsbuild.org" },
    { platform: "YouTube", title: "C++ Full Course – freeCodeCamp", url: "https://www.youtube.com/watch?v=vLnPwxZdW4Y" },
  ],
  DSA: [
    { platform: "Udemy", title: "Data Structures & Algorithms Masterclass", url: "https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/" },
    { platform: "Infosys Springboard", title: "DSA Problem Solving Track", url: "https://infyspringboard.onwingspan.com" },
    { platform: "IBM SkillsBuild", title: "Algorithmic Thinking", url: "https://skillsbuild.org" },
    { platform: "YouTube", title: "DSA Full Course – Abdul Bari", url: "https://www.youtube.com/watch?v=RBSGKlAvoiM" },
  ],
  SQL: [
    { platform: "Udemy", title: "The Complete SQL Bootcamp", url: "https://www.udemy.com/course/the-complete-sql-bootcamp/" },
    { platform: "Infosys Springboard", title: "Database Management with SQL", url: "https://infyspringboard.onwingspan.com" },
    { platform: "IBM SkillsBuild", title: "SQL and Relational Databases", url: "https://skillsbuild.org" },
    { platform: "YouTube", title: "SQL Tutorial – freeCodeCamp", url: "https://www.youtube.com/watch?v=HXV3zeQKqGY" },
  ],
  "Machine Learning": [
    { platform: "Udemy", title: "Machine Learning A-Z", url: "https://www.udemy.com/course/machinelearning/" },
    { platform: "Infosys Springboard", title: "AI/ML Learning Path", url: "https://infyspringboard.onwingspan.com" },
    { platform: "IBM SkillsBuild", title: "Machine Learning with Python", url: "https://skillsbuild.org" },
    { platform: "YouTube", title: "Machine Learning Course – Stanford (Andrew Ng)", url: "https://www.youtube.com/watch?v=jGwO_UgTS7I" },
  ],
  "Deep Learning": [
    { platform: "Udemy", title: "Deep Learning A-Z", url: "https://www.udemy.com/course/deeplearning/" },
    { platform: "Infosys Springboard", title: "Deep Learning Specialization", url: "https://infyspringboard.onwingspan.com" },
    { platform: "IBM SkillsBuild", title: "Neural Networks and Deep Learning", url: "https://skillsbuild.org" },
    { platform: "YouTube", title: "Deep Learning Crash Course – freeCodeCamp", url: "https://www.youtube.com/watch?v=VyWAvY2CF9c" },
  ],
  "Data Analysis": [
    { platform: "Udemy", title: "Data Analysis with Python and Pandas", url: "https://www.udemy.com/course/data-analysis-with-pandas/" },
    { platform: "Infosys Springboard", title: "Data Analytics Essentials", url: "https://infyspringboard.onwingspan.com" },
    { platform: "IBM SkillsBuild", title: "Data Analysis Foundations", url: "https://skillsbuild.org" },
    { platform: "YouTube", title: "Data Analysis with Python – freeCodeCamp", url: "https://www.youtube.com/watch?v=r-uOLxNrNk8" },
  ],
  "Cloud Computing": [
    { platform: "Udemy", title: "AWS Certified Cloud Practitioner", url: "https://www.udemy.com/course/aws-certified-cloud-practitioner-new/" },
    { platform: "Infosys Springboard", title: "Cloud Computing Fundamentals", url: "https://infyspringboard.onwingspan.com" },
    { platform: "IBM SkillsBuild", title: "Cloud Computing Essentials", url: "https://skillsbuild.org" },
    { platform: "YouTube", title: "Cloud Computing Full Course – Edureka", url: "https://www.youtube.com/watch?v=2LaAJq1lB1Q" },
  ],
  DevOps: [
    { platform: "Udemy", title: "DevOps Beginners to Advanced", url: "https://www.udemy.com/course/decodingdevops/" },
    { platform: "Infosys Springboard", title: "DevOps Engineering Path", url: "https://infyspringboard.onwingspan.com" },
    { platform: "IBM SkillsBuild", title: "DevOps and CI/CD Pipelines", url: "https://skillsbuild.org" },
    { platform: "YouTube", title: "DevOps Tutorial – TechWorld with Nana", url: "https://www.youtube.com/watch?v=0yWAtQ6wYNM" },
  ],
  Cybersecurity: [
    { platform: "Udemy", title: "The Complete Cyber Security Course", url: "https://www.udemy.com/course/the-complete-internet-security-privacy-course-volume-1/" },
    { platform: "Infosys Springboard", title: "Cybersecurity Fundamentals", url: "https://infyspringboard.onwingspan.com" },
    { platform: "IBM SkillsBuild", title: "Cybersecurity Analyst Professional", url: "https://skillsbuild.org" },
    { platform: "YouTube", title: "Cybersecurity Full Course – edureka!", url: "https://www.youtube.com/watch?v=lpa8uy4DyMo" },
  ],
  Communication: [
    { platform: "Udemy", title: "Communication Skills Masterclass", url: "https://www.udemy.com/course/communication-skills-masterclass/" },
    { platform: "Infosys Springboard", title: "Business Communication", url: "https://infyspringboard.onwingspan.com" },
    { platform: "IBM SkillsBuild", title: "Professional Communication", url: "https://skillsbuild.org" },
    { platform: "YouTube", title: "Communication Skills – TED Talks Playlist", url: "https://www.youtube.com/results?search_query=communication+skills+ted+talk" },
  ],
  Leadership: [
    { platform: "Udemy", title: "Leadership: Practical Skills", url: "https://www.udemy.com/course/leadership-practical-skills/" },
    { platform: "Infosys Springboard", title: "Leadership Development Program", url: "https://infyspringboard.onwingspan.com" },
    { platform: "IBM SkillsBuild", title: "Leadership and Management", url: "https://skillsbuild.org" },
    { platform: "YouTube", title: "Leadership Skills – Simon Sinek", url: "https://www.youtube.com/watch?v=qp0HIF3SfI4" },
  ],
  Design: [
    { platform: "Udemy", title: "Graphic Design Masterclass", url: "https://www.udemy.com/course/graphic-design-masterclass-everything-you-need-to-know/" },
    { platform: "Infosys Springboard", title: "Visual Design Principles", url: "https://infyspringboard.onwingspan.com" },
    { platform: "IBM SkillsBuild", title: "Design Thinking", url: "https://skillsbuild.org" },
    { platform: "YouTube", title: "Graphic Design Tutorial – Envato Tuts+", url: "https://www.youtube.com/watch?v=YqQx75OPRa0" },
  ],
  "UI/UX": [
    { platform: "Udemy", title: "Complete UI/UX Design Course", url: "https://www.udemy.com/course/ux-web-design-master-course/" },
    { platform: "Infosys Springboard", title: "UX Design Fundamentals", url: "https://infyspringboard.onwingspan.com" },
    { platform: "IBM SkillsBuild", title: "User Experience Design", url: "https://skillsbuild.org" },
    { platform: "YouTube", title: "UX Design Course – Google", url: "https://www.youtube.com/watch?v=uL2ZB7XXIgg" },
  ],
  "Project Management": [
    { platform: "Udemy", title: "PMP Exam Prep Seminar", url: "https://www.udemy.com/course/pmp-pmbok6-35-pdus/" },
    { platform: "Infosys Springboard", title: "Project Management Essentials", url: "https://infyspringboard.onwingspan.com" },
    { platform: "IBM SkillsBuild", title: "Project Management Fundamentals", url: "https://skillsbuild.org" },
    { platform: "YouTube", title: "Project Management Full Course – Simplilearn", url: "https://www.youtube.com/watch?v=uWPIsaYpY7U" },
  ],
  React: [
    { platform: "Udemy", title: "React – The Complete Guide", url: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/" },
    { platform: "Infosys Springboard", title: "React.js Development", url: "https://infyspringboard.onwingspan.com" },
    { platform: "IBM SkillsBuild", title: "Frontend Development with React", url: "https://skillsbuild.org" },
    { platform: "YouTube", title: "React JS Full Course – freeCodeCamp", url: "https://www.youtube.com/watch?v=bMknfKXIFA8" },
  ],
  "Node.js": [
    { platform: "Udemy", title: "The Complete Node.js Developer Course", url: "https://www.udemy.com/course/the-complete-nodejs-developer-course-2/" },
    { platform: "Infosys Springboard", title: "Node.js Backend Development", url: "https://infyspringboard.onwingspan.com" },
    { platform: "IBM SkillsBuild", title: "Server-side JavaScript", url: "https://skillsbuild.org" },
    { platform: "YouTube", title: "Node.js Crash Course – Traversy Media", url: "https://www.youtube.com/watch?v=fBNz5xF-Kx4" },
  ],
  "Mobile Development": [
    { platform: "Udemy", title: "Flutter & Dart Complete Guide", url: "https://www.udemy.com/course/learn-flutter-dart-to-build-ios-android-apps/" },
    { platform: "Infosys Springboard", title: "Mobile App Development Path", url: "https://infyspringboard.onwingspan.com" },
    { platform: "IBM SkillsBuild", title: "Mobile Application Development", url: "https://skillsbuild.org" },
    { platform: "YouTube", title: "React Native Tutorial – Programming with Mosh", url: "https://www.youtube.com/watch?v=0-S5a0eXPoc" },
  ],
  Blockchain: [
    { platform: "Udemy", title: "Blockchain and Bitcoin Fundamentals", url: "https://www.udemy.com/course/blockchain-and-bitcoin-fundamentals/" },
    { platform: "Infosys Springboard", title: "Blockchain Technology", url: "https://infyspringboard.onwingspan.com" },
    { platform: "IBM SkillsBuild", title: "Blockchain Essentials", url: "https://skillsbuild.org" },
    { platform: "YouTube", title: "Blockchain Full Course – Simplilearn", url: "https://www.youtube.com/watch?v=QCvL-DWcojc" },
  ],
  NLP: [
    { platform: "Udemy", title: "NLP – Natural Language Processing with Python", url: "https://www.udemy.com/course/nlp-natural-language-processing-with-python/" },
    { platform: "Infosys Springboard", title: "NLP and Text Analytics", url: "https://infyspringboard.onwingspan.com" },
    { platform: "IBM SkillsBuild", title: "Natural Language Processing", url: "https://skillsbuild.org" },
    { platform: "YouTube", title: "NLP Full Course – freeCodeCamp", url: "https://www.youtube.com/watch?v=fOvTtapxa9c" },
  ],
  "Computer Vision": [
    { platform: "Udemy", title: "Computer Vision with OpenCV and Python", url: "https://www.udemy.com/course/python-for-computer-vision-with-opencv-and-deep-learning/" },
    { platform: "Infosys Springboard", title: "Computer Vision Fundamentals", url: "https://infyspringboard.onwingspan.com" },
    { platform: "IBM SkillsBuild", title: "Image Recognition and CV", url: "https://skillsbuild.org" },
    { platform: "YouTube", title: "Computer Vision Course – freeCodeCamp", url: "https://www.youtube.com/watch?v=oXlwWbU8l2o" },
  ],
  Statistics: [
    { platform: "Udemy", title: "Statistics for Data Science", url: "https://www.udemy.com/course/statistics-for-data-science-and-business-analysis/" },
    { platform: "Infosys Springboard", title: "Applied Statistics", url: "https://infyspringboard.onwingspan.com" },
    { platform: "IBM SkillsBuild", title: "Statistics Foundations", url: "https://skillsbuild.org" },
    { platform: "YouTube", title: "Statistics Full Course – freeCodeCamp", url: "https://www.youtube.com/watch?v=xxpc-HPKN28" },
  ],
  Excel: [
    { platform: "Udemy", title: "Microsoft Excel – From Beginner to Advanced", url: "https://www.udemy.com/course/microsoft-excel-2013-from-beginner-to-advanced-and-beyond/" },
    { platform: "Infosys Springboard", title: "Excel for Business Analytics", url: "https://infyspringboard.onwingspan.com" },
    { platform: "IBM SkillsBuild", title: "Data Analysis with Excel", url: "https://skillsbuild.org" },
    { platform: "YouTube", title: "Excel Full Course – freeCodeCamp", url: "https://www.youtube.com/watch?v=Vl0H-qTclOg" },
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
