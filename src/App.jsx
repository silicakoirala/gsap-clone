import Header from "./components/Header.jsx";
import { Route, Routes } from "react-router-dom";
import Tools from "./pages/Tools.jsx";
import Pricing from "./pages/Pricing.jsx";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/tools" element={<Tools />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
     </div>
  )
}