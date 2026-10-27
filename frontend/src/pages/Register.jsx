import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

function Register() {
  const navigate = useNavigate();

  const [role, setRole] = useState("student");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    setMessage("");

    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            role,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.message || "Registration failed");
        return;
      }

      setMessage("Registration successful!");

      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } catch (error) {
      console.error("Registration error:", error);
      setMessage("Unable to connect to server");
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h1>Create Account</h1>

        <div className="role-selection">
          <button
            type="button"
            className={role === "student" ? "active" : ""}
            onClick={() => setRole("student")}
          >
            Student
          </button>

          <button
            type="button"
            className={role === "company" ? "active" : ""}
            onClick={() => setRole("company")}
          >
            Company
          </button>
        </div>

        <form onSubmit={handleRegister}>
          <input
            type="text"
            name="name"
            placeholder={
              role === "student"
                ? "Enter your full name"
                : "Enter company name"
            }
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Enter phone number"
            value={formData.phone}
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Create password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button type="submit" className="register-button">
            Register as {role === "student" ? "Student" : "Company"}
          </button>
        </form>

        {message && (
          <p className="register-message">
            {message}
          </p>
        )}

        <p className="login-link">
          Already have an account?{" "}
          <span onClick={() => navigate("/login")}>
            Login
          </span>
        </p>
      </div>
    </div>
  );
}

export default Register;