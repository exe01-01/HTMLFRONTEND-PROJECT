import { BrowserRouter, Routes, Route } from "react-router-dom";
import Step1 from "../steps/Step1";
import Step2 from "../steps/Step2";
import Step3 from "../steps/Step3";
import Review from "../steps/Review";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Step1 />} />
        <Route path="/step-2" element={<Step2 />} />
        <Route path="/step-3" element={<Step3 />} />
        <Route path="/review" element={<Review />} />
      </Routes>
    </BrowserRouter>
  );
}