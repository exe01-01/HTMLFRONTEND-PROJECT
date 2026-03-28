import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import { useForm } from "../context/FormContext";

export default function Step2() {
  const { updateForm } = useForm();
  const navigate = useNavigate();

  const [data, setData] = useState({
    tenth: "",
    inter: "",
    school: "",
    college: "",
  });

  const handleNext = () => {
    if (!data.tenth || !data.inter || !data.school || !data.college) {
      alert("Fill all fields");
      return;
    }

    updateForm(data);
    navigate("/step-3");
  };

  return (
    <Layout>
      <h2>Academic Details</h2>

      <input className="input" placeholder="10th Marks"
        onChange={(e)=>setData({...data, tenth:e.target.value})} />

      <input className="input" placeholder="12th Marks"
        onChange={(e)=>setData({...data, inter:e.target.value})} />

      <input className="input" placeholder="School Name"
        onChange={(e)=>setData({...data, school:e.target.value})} />

      <input className="input" placeholder="College Name"
        onChange={(e)=>setData({...data, college:e.target.value})} />

      <button className="btn" onClick={()=>navigate("/")}>Back</button>
      <button className="btn" onClick={handleNext}>Next</button>
    </Layout>
  );
}