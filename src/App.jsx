import { Route, Routes } from "react-router-dom";
import Tools from "./pages/Tools.jsx";
import Pricing from "./pages/Pricing.jsx";
import Home from "./pages/Home.jsx";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </div>
  )
}