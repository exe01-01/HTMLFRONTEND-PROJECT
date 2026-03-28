import { useForm } from "../context/FormContext";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";

export default function Review() {
  const { formData, resetForm } = useForm();
  const navigate = useNavigate();

  return (
    <Layout>
      <h2>Review Application</h2>

      <div className="review-box">
        <p><b>Name:</b> {formData.name}</p>
        <p><b>Age:</b> {formData.age}</p>
        <p><b>Gender:</b> {formData.gender}</p>
        <p><b>Email:</b> {formData.email}</p>
        <p><b>Phone:</b> {formData.phone}</p>

        <hr />

        <p><b>10th:</b> {formData.tenth}</p>
        <p><b>12th:</b> {formData.inter}</p>
        <p><b>School:</b> {formData.school}</p>
        <p><b>College:</b> {formData.college}</p>

        <hr />

        <p><b>Courses:</b> {formData.courses?.join(", ")}</p>
      </div>

      <button className="btn" onClick={()=>{
        alert("Submitted!");
        resetForm();
        navigate("/");
      }}>
        Submit
      </button>
    </Layout>
  );
}