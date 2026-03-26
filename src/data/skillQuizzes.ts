export interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
}

export const skillQuizzes: Record<string, QuizQuestion[]> = {
  Python: [
    { question: "What is the output of `print(type([]))`?", options: ["<class 'list'>", "<class 'array'>", "<class 'tuple'>", "<class 'dict'>"], correctIndex: 0 },
    { question: "Which keyword is used to define a function in Python?", options: ["func", "function", "def", "define"], correctIndex: 2 },
    { question: "What does `len('hello')` return?", options: ["4", "5", "6", "Error"], correctIndex: 1 },
    { question: "Which of these is a mutable data type?", options: ["tuple", "string", "list", "int"], correctIndex: 2 },
    { question: "How do you start a comment in Python?", options: ["//", "/*", "#", "--"], correctIndex: 2 },
  ],
  Java: [
    { question: "Which keyword is used to create a class in Java?", options: ["struct", "class", "object", "type"], correctIndex: 1 },
    { question: "What is the entry point of a Java application?", options: ["start()", "main()", "run()", "init()"], correctIndex: 1 },
    { question: "Which of these is NOT a primitive type in Java?", options: ["int", "boolean", "String", "char"], correctIndex: 2 },
    { question: "What does JVM stand for?", options: ["Java Virtual Machine", "Java Variable Method", "Java Visual Machine", "Java Version Manager"], correctIndex: 0 },
    { question: "Which symbol is used for single-line comments?", options: ["#", "//", "--", "/*"], correctIndex: 1 },
  ],
  DSA: [
    { question: "What is the time complexity of binary search?", options: ["O(n)", "O(log n)", "O(n²)", "O(1)"], correctIndex: 1 },
    { question: "Which data structure uses FIFO?", options: ["Stack", "Queue", "Tree", "Graph"], correctIndex: 1 },
    { question: "A stack follows which principle?", options: ["FIFO", "LIFO", "LILO", "Random"], correctIndex: 1 },
    { question: "Which sorting algorithm has the best average-case complexity?", options: ["Bubble Sort", "Selection Sort", "Merge Sort", "Insertion Sort"], correctIndex: 2 },
    { question: "What is the worst-case time complexity of quicksort?", options: ["O(n log n)", "O(n)", "O(n²)", "O(log n)"], correctIndex: 2 },
  ],
  Communication: [
    { question: "What is active listening?", options: ["Hearing without responding", "Fully concentrating on the speaker", "Multitasking while listening", "Interrupting to share opinions"], correctIndex: 1 },
    { question: "Which is a key element of effective communication?", options: ["Using jargon", "Clarity and conciseness", "Speaking fast", "Avoiding eye contact"], correctIndex: 1 },
    { question: "Non-verbal communication includes:", options: ["Emails", "Body language", "Text messages", "Reports"], correctIndex: 1 },
    { question: "What is the best way to handle feedback?", options: ["Ignore it", "Get defensive", "Listen and reflect", "Argue back"], correctIndex: 2 },
  ],
  Design: [
    { question: "What does UI stand for?", options: ["User Integration", "User Interface", "Universal Interface", "Unified Input"], correctIndex: 1 },
    { question: "Which principle focuses on visual hierarchy?", options: ["Proximity", "Contrast", "Repetition", "All of the above"], correctIndex: 3 },
    { question: "What is whitespace in design?", options: ["A bug", "Empty space used intentionally", "Background color", "Text area"], correctIndex: 1 },
    { question: "Which color model is used for screens?", options: ["CMYK", "RGB", "Pantone", "HSL only"], correctIndex: 1 },
  ],
  SQL: [
    { question: "Which SQL keyword retrieves data?", options: ["GET", "FETCH", "SELECT", "PULL"], correctIndex: 2 },
    { question: "What does JOIN do?", options: ["Deletes tables", "Combines rows from tables", "Creates indexes", "Sorts data"], correctIndex: 1 },
    { question: "Which clause filters results?", options: ["ORDER BY", "GROUP BY", "WHERE", "HAVING"], correctIndex: 2 },
    { question: "What is a primary key?", options: ["Any column", "A unique identifier for rows", "A foreign reference", "An index"], correctIndex: 1 },
  ],
  "Machine Learning": [
    { question: "What type of learning uses labeled data?", options: ["Unsupervised", "Supervised", "Reinforcement", "Transfer"], correctIndex: 1 },
    { question: "Which algorithm is used for classification?", options: ["Linear Regression", "K-Means", "Decision Tree", "PCA"], correctIndex: 2 },
    { question: "What is overfitting?", options: ["Model performs well on all data", "Model is too simple", "Model memorizes training data", "Model underfits"], correctIndex: 2 },
    { question: "What does CNN stand for?", options: ["Central Neural Network", "Convolutional Neural Network", "Connected Node Network", "Computed Neural Net"], correctIndex: 1 },
  ],
};
