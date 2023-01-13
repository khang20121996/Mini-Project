import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import BMICalculator from "./Components/BMI-Calculator";
import Calculator from "./Components/Calculator";
import Layout from "./Components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="calculator" element={<Calculator />} />
          <Route path="BMICalculator" element={<BMICalculator />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
