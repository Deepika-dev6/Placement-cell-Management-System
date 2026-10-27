import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CompanyDashboard.css";

function CompanyDashboard() {
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

  const companyName = user?.name || "Company";

  return (
    <div className="company-dashboard">

      {/* Sidebar */}
      <aside className="company-sidebar">

        <div className="company-logo">
          <div className="company-logo-icon">P</div>

          <div>
            <h2>Placement Cell</h2>
            <span>Company Portal</span>
          </div>
        </div>

        <nav className="company-menu">

          <button
            className="company-menu-item active"
            onClick={() => navigate("/company/dashboard")}
          >
            <span>🏠</span>
            Dashboard
          </button>

          <button
            className="company-menu-item"
            onClick={() => navigate("/company/profile")}
          >
            <span>🏢</span>
            Company Profile
          </button>

          <button
            className="company-menu-item"
            onClick={() => navigate("/company/jobs")}
          >
            <span>💼</span>
            Jobs
          </button>

          <button
            className="company-menu-item"
            onClick={() => navigate("/company/applications")}
          >
            <span>📝</span>
            Applications
          </button>

          <button
            className="company-menu-item"
            onClick={() => navigate("/company/students")}
          >
            <span>👨‍🎓</span>
            Students
          </button>

        </nav>

        <button
          className="company-logout"
          onClick={handleLogout}
        >
          <span>🚪</span>
          Logout
        </button>

      </aside>

      {/* Main Content */}
      <main className="company-main">

        {/* Header */}
        <header className="company-header">

          <div>
            <h1>Company Dashboard</h1>
            <p>Manage your recruitment activities from here.</p>
          </div>

          <button
            className="company-profile-shortcut"
            onClick={() => navigate("/company/profile")}
          >
            <div className="company-avatar">
              {companyName.charAt(0).toUpperCase()}
            </div>

            <div>
              <strong>{companyName}</strong>
              <span>Company</span>
            </div>
          </button>

        </header>

        {/* Welcome */}
        <section className="company-welcome">

          <div>
            <span>WELCOME BACK 👋</span>

            <h2>Hello, {companyName}!</h2>

            <p>
              Manage job opportunities, applications and
              student recruitment from your company portal.
            </p>
          </div>

          <div className="company-welcome-icon">
            🏢
          </div>

        </section>

        {/* Statistics */}
        <section className="company-stats">

          <div className="company-stat-card">
            <div className="company-stat-icon">💼</div>

            <div>
              <span>Posted Jobs</span>
              <strong>0</strong>
            </div>
          </div>

          <div className="company-stat-card">
            <div className="company-stat-icon">📝</div>

            <div>
              <span>Applications</span>
              <strong>0</strong>
            </div>
          </div>

          <div className="company-stat-card">
            <div className="company-stat-icon">👨‍🎓</div>

            <div>
              <span>Students</span>
              <strong>0</strong>
            </div>
          </div>

          <div className="company-stat-card">
            <div className="company-stat-icon">✅</div>

            <div>
              <span>Selected</span>
              <strong>0</strong>
            </div>
          </div>

        </section>

        {/* Quick Actions */}
        <section className="company-section">

          <div className="company-section-heading">
            <h2>Quick Actions</h2>
            <p>Access important recruitment features quickly.</p>
          </div>

          <div className="company-actions">

            <button
              onClick={() => navigate("/company/profile")}
              className="company-action-card"
            >
              <span>🏢</span>
              <strong>Company Profile</strong>
              <small>View and update company information</small>
            </button>

            <button
              onClick={() => navigate("/company/jobs")}
              className="company-action-card"
            >
              <span>💼</span>
              <strong>Manage Jobs</strong>
              <small>Post and manage job opportunities</small>
            </button>

            <button
              onClick={() => navigate("/company/applications")}
              className="company-action-card"
            >
              <span>📝</span>
              <strong>Applications</strong>
              <small>Review student applications</small>
            </button>

            <button
              onClick={() => navigate("/company/students")}
              className="company-action-card"
            >
              <span>👨‍🎓</span>
              <strong>View Students</strong>
              <small>Explore eligible students</small>
            </button>

          </div>

        </section>

        {/* Recruitment Information */}
        <section className="company-section">

          <div className="company-section-heading">
            <h2>Recruitment Information</h2>
            <p>Your current recruitment activity.</p>
          </div>

          <div className="recruitment-box">

            <div>
              <span>Active Job Posts</span>
              <strong>0</strong>
            </div>

            <div>
              <span>Applications Received</span>
              <strong>0</strong>
            </div>

            <div>
              <span>Students Shortlisted</span>
              <strong>0</strong>
            </div>

            <div>
              <span>Students Selected</span>
              <strong>0</strong>
            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default CompanyDashboard;