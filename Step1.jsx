import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import { useForm } from "../context/FormContext";

export default function Step1() {
  const { updateForm } = useForm();
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    age: "",
    gender: "",
    email: "",
    phone: "",
  });

  const handleNext = () => {
    if (!data.name || !data.age || !data.gender || !data.email || !data.phone) {
      alert("Fill all fields");
      return;
    }

    updateForm(data);
    navigate("/step-2");
  };

  return (
    <Layout>
      <h2>Personal Details</h2>

      <input className="input" placeholder="Name"
        onChange={(e)=>setData({...data, name:e.target.value})} />

      <input className="input" placeholder="Age"
        onChange={(e)=>setData({...data, age:e.target.value})} />

      <select className="input"
        onChange={(e)=>setData({...data, gender:e.target.value})}>
        <option value="">Select Gender</option>
        <option>Male</option>
        <option>Female</option>
      </select>

      <input className="input" placeholder="Email"
        onChange={(e)=>setData({...data, email:e.target.value})} />

      <input className="input" placeholder="Phone"
        onChange={(e)=>setData({...data, phone:e.target.value})} />

      <button className="btn" onClick={handleNext}>
        Next
      </button>
    </Layout>
  );
}