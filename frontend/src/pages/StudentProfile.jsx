import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./StudentProfile.css";

function StudentProfile() {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await fetch(
        "http://localhost:5000/api/profile",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.message || "Unable to load profile");
        return;
      }

      setUser(data.user);
      localStorage.setItem("user", JSON.stringify(data.user));
    } catch (error) {
      console.error(error);
      setMessage("Unable to connect to server");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = async () => {
    try {
      setMessage("");

      const token = localStorage.getItem("token");

      const response = await fetch(
        "http://localhost:5000/api/profile",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(user),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.message || "Profile update failed");
        return;
      }

      setUser(data.user);
      localStorage.setItem("user", JSON.stringify(data.user));

      setEditing(false);
      setMessage("Profile updated successfully!");
    } catch (error) {
      console.error(error);
      setMessage("Unable to connect to server");
    }
  };

  if (loading) {
    return (
      <div className="profile-loading">
        Loading profile...
      </div>
    );
  }

  if (!user) {
    return (
      <div className="profile-loading">
        {message || "Profile not found"}
      </div>
    );
  }

  return (
    <div className="profile-container">
      <div className="profile-box">

        <button
          className="back-button"
          onClick={() => navigate("/student/dashboard")}
        >
          ← Back to Dashboard
        </button>

        <h1>Student Profile</h1>

        {message && (
          <p className="profile-message">
            {message}
          </p>
        )}

        {/* Personal Information */}

        <h2>Personal Information</h2>

        <div className="profile-details">

          <div className="profile-item">
            <strong>Full Name</strong>

            {editing ? (
              <input
                name="name"
                value={user.name || ""}
                onChange={handleChange}
              />
            ) : (
              <span>{user.name || "Not added"}</span>
            )}
          </div>

          <div className="profile-item">
            <strong>Email</strong>
            <span>{user.email}</span>
          </div>

          <div className="profile-item">
            <strong>Phone</strong>

            {editing ? (
              <input
                name="phone"
                value={user.phone || ""}
                onChange={handleChange}
              />
            ) : (
              <span>{user.phone || "Not added"}</span>
            )}
          </div>

          <div className="profile-item">
            <strong>Date of Birth</strong>

            {editing ? (
              <input
                type="date"
                name="dateOfBirth"
                value={user.dateOfBirth || ""}
                onChange={handleChange}
              />
            ) : (
              <span>{user.dateOfBirth || "Not added"}</span>
            )}
          </div>

          <div className="profile-item">
            <strong>Gender</strong>

            {editing ? (
              <select
                name="gender"
                value={user.gender || ""}
                onChange={handleChange}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            ) : (
              <span>{user.gender || "Not added"}</span>
            )}
          </div>

          <div className="profile-item">
            <strong>Address</strong>

            {editing ? (
              <textarea
                name="address"
                value={user.address || ""}
                onChange={handleChange}
              />
            ) : (
              <span>{user.address || "Not added"}</span>
            )}
          </div>

        </div>

        {/* Academic Information */}

        <h2>Academic Information</h2>

        <div className="profile-details">

          <div className="profile-item">
            <strong>College Name</strong>

            {editing ? (
              <input
                name="collegeName"
                value={user.collegeName || ""}
                onChange={handleChange}
              />
            ) : (
              <span>{user.collegeName || "Not added"}</span>
            )}
          </div>

          <div className="profile-item">
            <strong>University</strong>

            {editing ? (
              <input
                name="university"
                value={user.university || ""}
                onChange={handleChange}
              />
            ) : (
              <span>{user.university || "Not added"}</span>
            )}
          </div>

          <div className="profile-item">
            <strong>Course / Degree</strong>

            {editing ? (
              <input
                name="course"
                value={user.course || ""}
                onChange={handleChange}
              />
            ) : (
              <span>{user.course || "Not added"}</span>
            )}
          </div>

          <div className="profile-item">
            <strong>Department</strong>

            {editing ? (
              <input
                name="department"
                value={user.department || ""}
                onChange={handleChange}
              />
            ) : (
              <span>{user.department || "Not added"}</span>
            )}
          </div>

          <div className="profile-item">
            <strong>Current Year</strong>

            {editing ? (
              <input
                name="currentYear"
                value={user.currentYear || ""}
                onChange={handleChange}
              />
            ) : (
              <span>{user.currentYear || "Not added"}</span>
            )}
          </div>

          <div className="profile-item">
            <strong>Semester</strong>

            {editing ? (
              <input
                name="semester"
                value={user.semester || ""}
                onChange={handleChange}
              />
            ) : (
              <span>{user.semester || "Not added"}</span>
            )}
          </div>

          <div className="profile-item">
            <strong>USN / Registration Number</strong>

            {editing ? (
              <input
                name="usn"
                value={user.usn || ""}
                onChange={handleChange}
              />
            ) : (
              <span>{user.usn || "Not added"}</span>
            )}
          </div>

          <div className="profile-item">
            <strong>CGPA</strong>

            {editing ? (
              <input
                name="cgpa"
                value={user.cgpa || ""}
                onChange={handleChange}
              />
            ) : (
              <span>{user.cgpa || "Not added"}</span>
            )}
          </div>

          <div className="profile-item">
            <strong>10th Percentage</strong>

            {editing ? (
              <input
                name="tenthPercentage"
                value={user.tenthPercentage || ""}
                onChange={handleChange}
              />
            ) : (
              <span>
                {user.tenthPercentage
                  ? `${user.tenthPercentage}%`
                  : "Not added"}
              </span>
            )}
          </div>

          <div className="profile-item">
            <strong>PUC / 12th Percentage</strong>

            {editing ? (
              <input
                name="pucPercentage"
                value={user.pucPercentage || ""}
                onChange={handleChange}
              />
            ) : (
              <span>
                {user.pucPercentage
                  ? `${user.pucPercentage}%`
                  : "Not added"}
              </span>
            )}
          </div>

        </div>

        {/* Placement Information */}

<h2>Placement Information</h2>

<div className="profile-details">

  <div className="profile-item">
    <strong>Preferred Job Role</strong>

    {editing ? (
      <input
        name="preferredJobRole"
        value={user.preferredJobRole || ""}
        onChange={handleChange}
        placeholder="Example: Web Developer"
      />
    ) : (
      <span>
        {user.preferredJobRole || "Not added"}
      </span>
    )}
  </div>

  <div className="profile-item">
    <strong>Preferred Location</strong>

    {editing ? (
      <input
        name="preferredLocation"
        value={user.preferredLocation || ""}
        onChange={handleChange}
        placeholder="Example: Bangalore"
      />
    ) : (
      <span>
        {user.preferredLocation || "Not added"}
      </span>
    )}
  </div>

  <div className="profile-item">
    <strong>Expected Salary</strong>

    {editing ? (
      <input
        name="expectedSalary"
        value={user.expectedSalary || ""}
        onChange={handleChange}
        placeholder="Example: 6 LPA"
      />
    ) : (
      <span>
        {user.expectedSalary || "Not added"}
      </span>
    )}
  </div>

  <div className="profile-item">
    <strong>Placement Status</strong>

    {editing ? (
      <select
        name="placementStatus"
        value={user.placementStatus || "Not Placed"}
        onChange={handleChange}
      >
        <option value="Not Placed">Not Placed</option>
        <option value="Applied">Applied</option>
        <option value="Shortlisted">Shortlisted</option>
        <option value="Interview Scheduled">
          Interview Scheduled
        </option>
        <option value="Selected">Selected</option>
        <option value="Rejected">Rejected</option>
      </select>
    ) : (
      <span>
        {user.placementStatus || "Not Placed"}
      </span>
    )}
  </div>

  <div className="profile-item">
    <strong>Available for Placement</strong>

    {editing ? (
      <select
        name="availableForPlacement"
        value={user.availableForPlacement ? "Yes" : "No"}
        onChange={(e) =>
          setUser({
            ...user,
            availableForPlacement: e.target.value === "Yes",
          })
        }
      >
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
    ) : (
      <span>
        {user.availableForPlacement ? "Yes" : "No"}
      </span>
    )}
  </div>

  <div className="profile-item">
    <strong>LinkedIn</strong>

    {editing ? (
      <input
        name="linkedin"
        value={user.linkedin || ""}
        onChange={handleChange}
        placeholder="LinkedIn profile URL"
      />
    ) : (
      <span>
        {user.linkedin || "Not added"}
      </span>
    )}
  </div>

  <div className="profile-item">
    <strong>GitHub</strong>

    {editing ? (
      <input
        name="github"
        value={user.github || ""}
        onChange={handleChange}
        placeholder="GitHub profile URL"
      />
    ) : (
      <span>
        {user.github || "Not added"}
      </span>
    )}
  </div>

  <div className="profile-item">
    <strong>Portfolio</strong>

    {editing ? (
      <input
        name="portfolio"
        value={user.portfolio || ""}
        onChange={handleChange}
        placeholder="Portfolio website URL"
      />
    ) : (
      <span>
        {user.portfolio || "Not added"}
      </span>
    )}
  </div>

</div>

        {/* Buttons */}

        {!editing ? (
          <button
            className="edit-button"
            onClick={() => {
              setEditing(true);
              setMessage("");
            }}
          >
            Edit Profile
          </button>
        ) : (
          <div className="profile-actions">
            <button
              className="save-button"
              onClick={handleSave}
            >
              Save Profile
            </button>

            <button
              className="cancel-button"
              onClick={() => {
                setEditing(false);
                fetchProfile();
              }}
            >
              Cancel
            </button>
          </div>
        )}

      </div>
    </div>
  );
}

export default StudentProfile;