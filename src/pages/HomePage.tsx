import { Link } from "react-router-dom";
import { useState } from "react";

type Topic = {
  id: string;
  label: string;
  color: string;
};

const topics: Topic[] = [
  { id: "react", label: "⚛️ React", color: "bg-indigo-400" },
  { id: "js", label: "📜 JavaScript", color: "bg-yellow-400" },
  { id: "css", label: "🎨 CSS", color: "bg-blue-400" },
  { id: "behavioral", label: "🧠 Behavioral", color: "bg-pink-400" },
];

export default function HomePage() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 flex flex-col items-center p-8 ">
      <button className="stake"> 
        test</button>
      <button onClick={()=>setCounter(counter +1)}>
        counter: {counter}
      </button>
      <h1 className="text-4xl font-bold mb-8">Interview Forge 🔥</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
        {topics.map((t) => (
          <Link
            key={t.id}
            to={`/topic/${t.id}`}
            className={`rounded-full w-32 h-32 flex items-center justify-center text-white text-lg font-semibold shadow-lg transform hover:scale-105 transition-all ${t.color}`}
          >
            {t.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
