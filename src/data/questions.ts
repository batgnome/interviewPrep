type Question = {
  id: number;
  question: string;
  answer: string;
};

export const questions: Record<string, Question[]> = {
  react: [
    {
      id: 1,
      question: "What does useEffect do?",
      answer: "It allows function components to perform side effects.",
    },
  ],
  js: [
    {
      id: 1,
      question: "What is a closure?",
      answer: "A closure is a function that remembers its lexical scope.",
    },
  ],
  css: [],
  behavioral: [],
};
