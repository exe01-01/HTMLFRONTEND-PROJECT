import { createContext, useContext, useState } from "react";

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    email: "",
    phone: "",
    tenth: "",
    inter: "",
    school: "",
    college: "",
    courses: []
  });

  const updateForm = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const resetForm = () => {
    setFormData({
      name: "",
      age: "",
      gender: "",
      email: "",
      phone: "",
      tenth: "",
      inter: "",
      school: "",
      college: "",
      courses: []
    });
  };

  return (
    <FormContext.Provider value={{ formData, updateForm, resetForm }}>
      {children}
    </FormContext.Provider>
  );
};

export const useForm = () => useContext(FormContext);