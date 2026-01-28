function StepTwo({ formData, updateField, nextStep, prevStep }) {
  return (
    <div className="step">
      <label>Email</label>
      <input
        type="email"
        value={formData.email}
        onChange={(e) => updateField("email", e.target.value)}
      />

      <div className="buttons">
        <button onClick={prevStep}>Back</button>
        <button onClick={nextStep}>Next</button>
      </div>
    </div>
  );
}

export default StepTwo;
