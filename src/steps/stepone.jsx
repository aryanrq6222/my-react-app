function StepOne({ formData, updateField, nextStep }) {
  return (
    <div className="step">
      <label>Name</label>
      <input
        type="text"
        value={formData.name}
        onChange={(e) => updateField("name", e.target.value)}
      />

      <button onClick={nextStep}>Next</button>
    </div>
  );
}

export default StepOne;
