import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Companies.css";

function Companies() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const companies = [
    {
      id: 1,
      name: "Infosys",
      location: "Bangalore",
      industry: "Information Technology",
      role: "Software Engineer",
      package: "₹6 LPA",
      qualification: "B.E / B.Tech / MCA",
      eligibility: "Minimum 7.0 CGPA",
      skills: "Java, Python, SQL, HTML, CSS, JavaScript",
      about:
        "Infosys is a global information technology company providing digital services, consulting and business solutions to organizations worldwide.",
      description:
        "The Software Engineer will design, develop, test and maintain software applications. The candidate will work with development teams to build reliable and scalable solutions.",
      responsibilities: [
        "Develop and maintain software applications",
        "Write clean and efficient code",
        "Work with development and testing teams",
        "Identify and fix software issues",
        "Participate in project discussions and technical activities",
      ],
      benefits: [
        "Competitive salary",
        "Training and development programs",
        "Career growth opportunities",
        "Professional work environment",
      ],
      deadline: "30 September 2026",
    },

    {
      id: 2,
      name: "TCS",
      location: "Bangalore",
      industry: "Information Technology",
      role: "Graduate Engineer Trainee",
      package: "₹5 LPA",
      qualification: "B.E / B.Tech / MCA / M.Sc",
      eligibility: "Minimum 6.5 CGPA",
      skills: "Java, Python, SQL, C++, Communication",
      about:
        "Tata Consultancy Services is a global IT services, consulting and business solutions organization serving clients across multiple industries.",
      description:
        "The Graduate Engineer Trainee will work on software development, application support and technology projects while learning industry practices and development methodologies.",
      responsibilities: [
        "Assist in application development",
        "Write and test program code",
        "Understand project requirements",
        "Collaborate with team members",
        "Prepare technical documentation",
      ],
      benefits: [
        "Structured training",
        "Learning opportunities",
        "Career development",
        "Employee benefits",
      ],
      deadline: "5 October 2026",
    },

    {
      id: 3,
      name: "Wipro",
      location: "Hyderabad",
      industry: "Information Technology",
      role: "Project Engineer",
      package: "₹4.5 LPA",
      qualification: "B.E / B.Tech / MCA",
      eligibility: "Minimum 6.0 CGPA",
      skills: "Java, Python, SQL, Web Technologies",
      about:
        "Wipro is a global technology services and consulting company helping organizations with digital transformation and technology solutions.",
      description:
        "The Project Engineer will contribute to software projects by developing applications, testing solutions and working with teams to deliver quality technology products.",
      responsibilities: [
        "Develop software components",
        "Perform application testing",
        "Debug and resolve technical issues",
        "Work with project teams",
        "Follow software development practices",
      ],
      benefits: [
        "Technical training",
        "Career growth",
        "Learning programs",
        "Professional development",
      ],
      deadline: "10 October 2026",
    },

    {
      id: 4,
      name: "Accenture",
      location: "Bangalore",
      industry: "Technology & Consulting",
      role: "Associate Software Engineer",
      package: "₹5.5 LPA",
      qualification: "B.E / B.Tech / MCA",
      eligibility: "Minimum 7.0 CGPA",
      skills: "Java, Python, SQL, JavaScript, Problem Solving",
      about:
        "Accenture is a global professional services company providing technology, consulting and digital transformation services to organizations around the world.",
      description:
        "The Associate Software Engineer will work on technology projects, develop software solutions, participate in testing and collaborate with experienced development teams.",
      responsibilities: [
        "Develop and maintain software applications",
        "Analyze technical requirements",
        "Write and test code",
        "Work with project teams",
        "Troubleshoot application issues",
      ],
      benefits: [
        "Learning and development programs",
        "Career opportunities",
        "Technology training",
        "Professional work environment",
      ],
      deadline: "15 October 2026",
    },
  ];

  const filteredCompanies = companies.filter((company) =>
    company.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="companies-page">

      <header className="companies-header">
        <div>
          <h1>Companies</h1>
          <p>Explore companies participating in campus placements.</p>
        </div>

        <button
          className="back-dashboard-button"
          onClick={() => navigate("/student/dashboard")}
        >
          ← Dashboard
        </button>
      </header>

      <div className="company-search">
        <input
          type="text"
          placeholder="Search companies..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="companies-grid">

        {filteredCompanies.map((company) => (

          <div className="company-card" key={company.id}>

            <div className="company-card-top">

              <div className="company-logo-box">
                {company.name.charAt(0)}
              </div>

              <div>
                <h2>{company.name}</h2>
                <p>📍 {company.location}</p>
              </div>

            </div>

            <div className="company-details">

              <div>
                <span>Job Role</span>
                <strong>{company.role}</strong>
              </div>

              <div>
                <span>Package</span>
                <strong>{company.package}</strong>
              </div>

              <div>
                <span>Eligibility</span>
                <strong>{company.eligibility}</strong>
              </div>

            </div>

            <button
              className="view-company-button"
              onClick={() =>
                navigate(`/student/companies/${company.id}`)
              }
            >
              View Company
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Companies;