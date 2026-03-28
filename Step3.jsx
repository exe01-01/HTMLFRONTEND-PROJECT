import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import { useForm } from "../context/FormContext";

export default function Step3() {
  const { updateForm } = useForm();
  const navigate = useNavigate();

  const [selectedCourse, setSelectedCourse] = useState("");

  const courseList = [
    "B.Tech CSE",
    "B.Tech ECE",
    "B.Tech Mechanical",
    "B.Tech Civil",
    "B.Sc Mathematics",
    "B.Sc Physics",
    "B.Com",
    "BBA",
    "MBA",
    "MCA",
    "M.Tech",
    "Pharmacy"
  ];

  const handleSelect = (course) => {
    if (selectedCourse && selectedCourse !== course) {
      alert("Only one course can be selected");
      return;
    }
    setSelectedCourse(course);
  };

  const handleNext = () => {
    if (!selectedCourse) {
      alert("Please select a course");
      return;
    }

    updateForm({ courses: [selectedCourse] });
    navigate("/review");
  };

  return (
    <Layout>
      <h2>Select Course</h2>

      <div className="course-grid">
        {courseList.map((c) => (
          <div
            key={c}
            className={`course-card ${
              selectedCourse === c ? "active-course" : ""
            }`}
            onClick={() => handleSelect(c)}
          >
            {c}
          </div>
        ))}
      </div>

      <button className="btn" onClick={() => navigate("/step-2")}>
        Back
      </button>

      <button className="btn" onClick={handleNext}>
        Next
      </button>
    </Layout>
  );
}