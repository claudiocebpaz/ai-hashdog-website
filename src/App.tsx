import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Landing from "./pages/Landing";
import HowItWorks from "./pages/HowItWorks";
import Platform from "./pages/Platform";
import Consultation from "./pages/Consultation";
import "./index.css";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/how" element={<HowItWorks />} />
          <Route path="/platform" element={<Platform />} />
          <Route path="/consultation" element={<Consultation />} />
        </Routes>
      </Layout>
    </Router>
  );
}
