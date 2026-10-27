import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Jobs.css";

function Jobs() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const jobs = [
    {
      id: 1,
      company: "Infosys",
      role: "Software Engineer",
      location: "Bangalore",
      package: "₹6 LPA",
      eligibility: "7.0 CGPA+",
      skills: "Java, Python, SQL, JavaScript",
      deadline: "30 September 2026",
      type: "Full Time",
    },
    {
      id: 2,
      company: "TCS",
      role: "Graduate Engineer Trainee",
      location: "Bangalore",
      package: "₹5 LPA",
      eligibility: "6.5 CGPA+",
      skills: "Java, Python, SQL, C++",
      deadline: "5 October 2026",
      type: "Full Time",
    },
    {
      id: 3,
      company: "Wipro",
      role: "Project Engineer",
      location: "Hyderabad",
      package: "₹4.5 LPA",
      eligibility: "6.0 CGPA+",
      skills: "Java, Python, SQL, Web Technologies",
      deadline: "10 October 2026",
      type: "Full Time",
    },
    {
      id: 4,
      company: "Accenture",
      role: "Associate Software Engineer",
      location: "Bangalore",
      package: "₹5.5 LPA",
      eligibility: "7.0 CGPA+",
      skills: "Java, Python, SQL, JavaScript",
      deadline: "15 October 2026",
      type: "Full Time",
    },
  ];

  const filteredJobs = jobs.filter(
    (job) =>
      job.company.toLowerCase().includes(search.toLowerCase()) ||
      job.role.toLowerCase().includes(search.toLowerCase()) ||
      job.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="jobs-page">

      {/* Header */}
      <header className="jobs-header">
        <div>
          <h1>Available Jobs</h1>
          <p>
            Find and apply for placement opportunities.
          </p>
        </div>

        <button
          className="jobs-back-button"
          onClick={() => navigate("/student/dashboard")}
        >
          ← Dashboard
        </button>
      </header>

      {/* Search */}
      <div className="jobs-search">
        <input
          type="text"
          placeholder="Search by company, job role or location..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Job Count */}
      <div className="job-count">
        Showing <strong>{filteredJobs.length}</strong> job
        {filteredJobs.length !== 1 ? "s" : ""}
      </div>

      {/* Jobs */}
      <div className="jobs-grid">

        {filteredJobs.map((job) => (

          <div className="job-card" key={job.id}>

            {/* Top */}
            <div className="job-card-top">

              <div className="job-company-logo">
                {job.company.charAt(0)}
              </div>

              <div>
                <h2>{job.role}</h2>
                <p>{job.company}</p>
              </div>

            </div>

            {/* Basic Information */}
            <div className="job-info">

              <div>
                <span>📍 Location</span>
                <strong>{job.location}</strong>
              </div>

              <div>
                <span>💰 Package</span>
                <strong>{job.package}</strong>
              </div>

              <div>
                <span>🎓 Eligibility</span>
                <strong>{job.eligibility}</strong>
              </div>

              <div>
                <span>🕐 Job Type</span>
                <strong>{job.type}</strong>
              </div>

            </div>

            {/* Skills */}
            <div className="job-skills">
              <span>Required Skills</span>
              <p>{job.skills}</p>
            </div>

            {/* Deadline */}
            <div className="job-deadline">
              <span>Application Deadline</span>
              <strong>{job.deadline}</strong>
            </div>

            {/* Buttons */}
            <div className="job-buttons">

              <button
                className="view-job-button"
                onClick={() =>
                  navigate(`/student/jobs/${job.id}`)
                }
              >
                View Job
              </button>

              <button
                className="apply-job-button"
                onClick={() =>
                  alert(
                    `Application started for ${job.role} at ${job.company}`
                  )
                }
              >
                Apply Now
              </button>

            </div>

          </div>

        ))}

      </div>

      {/* No Jobs */}
      {filteredJobs.length === 0 && (
        <div className="no-jobs">
          <div>🔍</div>
          <h2>No jobs found</h2>
          <p>Try searching for another company, role or location.</p>
        </div>
      )}

    </div>
  );
}

export default Jobs;