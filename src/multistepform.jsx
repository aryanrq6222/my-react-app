import { useState } from "react";
import StepOne from "./steps/StepOne";
import StepTwo from "./steps/StepTwo";
import StepThree from "./steps/StepThree";
import "./form.css";

function MultiStepForm() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: ""
  });

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const updateField = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="form-container">
      <h2>Multi Step Form</h2>

      {step === 1 && (
        <StepOne formData={formData} updateField={updateField} nextStep={nextStep} />
      )}

      {step === 2 && (
        <StepTwo formData={formData} updateField={updateField} nextStep={nextStep} prevStep={prevStep} />
      )}

      {step === 3 && (
        <StepThree formData={formData} prevStep={prevStep} />
      )}
    </div>
  );
}

export default MultiStepForm;
