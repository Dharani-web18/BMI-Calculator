import './App.css';
import { useState } from "react";

function App() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [bmiStatus, setBmiStatus] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  const calculateBmi = () => {
    const isValidHeight = /^\d+$/.test(height)
    const isValidWeight = /^\d+$/.test(weight)
    if (isValidHeight && isValidWeight) {
      const heightInMeters = height / 100;
      const bmiValue = weight / (heightInMeters * heightInMeters);
      setBmi(bmiValue.toFixed(2));
      if (bmiValue < 18.5){
        setBmiStatus("Underweight");
      } else if (bmiValue >= 18.5 && bmiValue < 24.4) {
        setBmiStatus("Normal Weight")
      } else if (bmiValue >=24.4  && bmiValue < 29.9) {
        setBmiStatus("Over Weight")
      } else {
        setBmiStatus("Obese");
      }
      setErrorMessage("")
      } else {
      setBmi(null);
      setBmiStatus("")
      setErrorMessage("Please Enter valid numeric value for height and weight")
    }
  }
  
  const clearAll = () => {
    setHeight("")
    setWeight("")
    setBmi(null)
    setBmiStatus("")
  }

  return (
  <>
    <div className='bmi-calculator'>
      <div className='box'></div>
        <div className='data'>
          <h1>BMI CALCULATOR</h1>
          {errorMessage && <p className='error'>{errorMessage}</p>}
          <div className='input-container'>
            <label htmlFor='height'>Height(cm):</label>
            <input type='text' value={height} id="height" onChange={(e) => setHeight(e.target.value)}></input>
          </div>
          <div className='input-container'>
            <label htmlFor='weight'>Weight(kg):</label>
            <input type='text' value={weight} id="weight" onChange={(e) => setWeight(e.target.value)}></input>
          </div>
          <button onClick={calculateBmi}>Calculate BMi</button>
          <button className='b2' onClick={clearAll}>Clear</button>
          {bmi!==null && (
            <div className='result'>
              <p>You BMI is : {bmi}</p>
              <p>Status:{bmiStatus}</p>
           </div>
          )}
        </div>
    </div>
    </>
  );
}

export default App;
