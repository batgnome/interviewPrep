import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import QuestionPage from "./pages/QuestionPage";
import LessonPlan from "./pages/LessonPlan";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/topic/:id" element={<QuestionPage />} />
      <Route path="/lessonPlan" element={<LessonPlan/>} />
    </Routes>
  );
}

export default App;
