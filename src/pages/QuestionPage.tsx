import { useParams } from "react-router-dom";
import { questions } from "../data/questions";

export default function QuestionPage() {
  const { id } = useParams<{ id: string }>();
  const topicQuestions = questions[id ?? ""] || [];

  return (
    <div className="min-h-screen p-8">
      <h2 className="text-2xl font-bold mb-4 capitalize">{id} Questions</h2>
      {topicQuestions.length === 0 ? (
        <p>No questions found for this topic.</p>
      ) : (
        <ul className="space-y-4">
          {topicQuestions.map((q) => (
            <li key={q.id} className="p-4 bg-white border rounded shadow">
              <div className="font-semibold">{q.question}</div>
              <details className="mt-2">
                <summary className="cursor-pointer text-blue-600 underline">
                  Show Answer
                </summary>
                <p className="mt-1">{q.answer}</p>
              </details>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
