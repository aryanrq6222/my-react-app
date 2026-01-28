function StepThree({ formData, prevStep }) {
  return (
    <div className="step">
      <h3>Review Details</h3>
      <p><strong>Name:</strong> {formData.name}</p>
      <p><strong>Email:</strong> {formData.email}</p>
      <p><strong>Age:</strong> {formData.age}</p>

      <button onClick={prevStep}>Back</button>
      <button onClick={() => alert("Form Submitted!")}>Submit</button>
    </div>
  );
}

export default StepThree;
