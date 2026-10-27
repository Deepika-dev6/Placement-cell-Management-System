import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import StudentDashboard from "./pages/StudentDashboard";
import CompanyDashboard from "./pages/CompanyDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from "./pages/NotFound";
import StudentProfile from "./pages/StudentProfile";
import Companies from "./pages/Companies";
import CompanyDetails from "./pages/CompanyDetails";
import Jobs from "./pages/Jobs";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
        path="/student/dashboard"
        element={<StudentDashboard />}
      />

      <Route
        path="/student/profile"
        element={<StudentProfile />}
      />

      <Route
        path="/company/dashboard"
        element={<CompanyDashboard />}
      />

      <Route
       path="/student/companies"
       element={<Companies />}
      />

      <Route
       path="/student/companies/:id"
       element={<CompanyDetails />}
     />
       <Route
        path="/student/jobs"
        element={<Jobs />}
     />


      <Route 
        path="/admin/dashboard"
        element={<AdminDashboard />}
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;