import "./StudentDashboard.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./StudentDashboard.css";

function StudentDashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const studentName = user?.name || "Student";

  return (
    <div className="student-dashboard">

      {/* Sidebar */}
      <aside className="dashboard-sidebar">

        <div className="sidebar-logo">
          <div className="logo-icon">P</div>
          <div>
            <h2>Placement Cell</h2>
            <span>Student Portal</span>
          </div>
        </div>

        <nav className="sidebar-menu">

          <button
            className="menu-item active"
            onClick={() => navigate("/student/dashboard")}
          >
            <span>🏠</span>
            Dashboard
          </button>

          <button
            className="menu-item"
            onClick={() => navigate("/student/profile")}
          >
            <span>👤</span>
            My Profile
          </button>

          <button
            className="menu-item"
            onClick={() => navigate("/student/companies")}
          >
            <span>🏢</span>
            Companies
          </button>

          <button
            className="menu-item"
            onClick={() => navigate("/student/jobs")}
          >
            <span>💼</span>
            Jobs
          </button>

          <button
            className="menu-item"
            onClick={() => navigate("/student/applications")}
          >
            <span>📝</span>
            My Applications
          </button>

          <button
            className="menu-item"
            onClick={() => navigate("/student/application-status")}
          >
            <span>📊</span>
            Application Status
          </button>

        </nav>

        <button
          className="logout-button"
          onClick={handleLogout}
        >
          <span>🚪</span>
          Logout
        </button>

      </aside>

      {/* Main Content */}
      <main className="dashboard-main">

        {/* Top Bar */}
        <header className="dashboard-header">

          <div>
            <h1>Student Dashboard</h1>
            <p>Manage your placement activities from here.</p>
          </div>

          <button
            className="profile-shortcut"
            onClick={() => navigate("/student/profile")}
          >
            <div className="profile-avatar">
              {studentName.charAt(0).toUpperCase()}
            </div>

            <div className="profile-shortcut-text">
              <strong>{studentName}</strong>
              <span>Student</span>
            </div>
          </button>

        </header>

        {/* Welcome Card */}
        <section className="welcome-card">

          <div>
            <span className="welcome-label">WELCOME BACK 👋</span>

            <h2>
              Hello, {studentName}!
            </h2>

            <p>
              Stay updated with placement opportunities,
              applications and upcoming recruitment drives.
            </p>
          </div>

          <div className="welcome-icon">
            🎓
          </div>

        </section>

        {/* Statistics */}
        <section className="stats-grid">

          <div className="stat-card">
            <div className="stat-icon companies-icon">
              🏢
            </div>

            <div>
              <span>Companies</span>
              <strong>0</strong>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon jobs-icon">
              💼
            </div>

            <div>
              <span>Available Jobs</span>
              <strong>0</strong>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon applications-icon">
              📝
            </div>

            <div>
              <span>Applications</span>
              <strong>0</strong>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon status-icon">
              📊
            </div>

            <div>
              <span>Placement Status</span>
              <strong>
                {user?.placementStatus || "Not Placed"}
              </strong>
            </div>
          </div>

        </section>

        {/* Quick Actions */}
        <section className="dashboard-section">

          <div className="section-heading">
            <div>
              <h2>Quick Actions</h2>
              <p>Access important placement features quickly.</p>
            </div>
          </div>

          <div className="quick-actions">

            <button
              onClick={() => navigate("/student/profile")}
              className="action-card"
            >
              <span className="action-icon">👤</span>
              <strong>View Profile</strong>
              <small>View and update your profile</small>
            </button>

            <button
              onClick={() => navigate("/student/companies")}
              className="action-card"
            >
              <span className="action-icon">🏢</span>
              <strong>View Companies</strong>
              <small>Explore participating companies</small>
            </button>

            <button
              onClick={() => navigate("/student/jobs")}
              className="action-card"
            >
              <span className="action-icon">💼</span>
              <strong>View Jobs</strong>
              <small>Find available job opportunities</small>
            </button>

            <button
              onClick={() => navigate("/student/applications")}
              className="action-card"
            >
              <span className="action-icon">📝</span>
              <strong>My Applications</strong>
              <small>View your submitted applications</small>
            </button>

          </div>

        </section>

        {/* Placement Status */}
        <section className="dashboard-section">

          <div className="section-heading">
            <div>
              <h2>Placement Overview</h2>
              <p>Your current placement information.</p>
            </div>
          </div>

          <div className="placement-overview">

            <div className="placement-status-box">
              <span className="overview-label">
                Current Status
              </span>

              <strong>
                {user?.placementStatus || "Not Placed"}
              </strong>
            </div>

            <div className="placement-status-box">
              <span className="overview-label">
                Preferred Role
              </span>

              <strong>
                {user?.preferredJobRole || "Not Added"}
              </strong>
            </div>

            <div className="placement-status-box">
              <span className="overview-label">
                Preferred Location
              </span>

              <strong>
                {user?.preferredLocation || "Not Added"}
              </strong>
            </div>

            <div className="placement-status-box">
              <span className="overview-label">
                Available for Placement
              </span>

              <strong>
                {user?.availableForPlacement ? "Yes" : "No"}
              </strong>
            </div>

          </div>

        </section>

        {/* Recent Activity */}
        <section className="dashboard-section">

          <div className="section-heading">
            <div>
              <h2>Recent Activity</h2>
              <p>Your latest placement activities.</p>
            </div>
          </div>

          <div className="empty-activity">

            <div className="empty-icon">
              📋
            </div>

            <h3>No recent activity</h3>

            <p>
              Your applications and placement activities
              will appear here.
            </p>

            <button
              onClick={() => navigate("/student/jobs")}
              className="browse-jobs-button"
            >
              Browse Jobs
            </button>

          </div>

        </section>

      </main>

    </div>
  );
}

export default StudentDashboard;

