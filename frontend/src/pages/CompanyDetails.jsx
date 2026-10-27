import { useNavigate, useParams } from "react-router-dom";
import "./CompanyDetails.css";

function CompanyDetails() {
  const navigate = useNavigate();
  const { id } = useParams();

  const companies = {
    1: {
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

    2: {
      name: "TCS",
      location: "Bangalore",
      industry: "Information Technology",
      role: "Graduate Engineer Trainee",
      package: "₹5 LPA",
      qualification: "B.E / B.Tech / MCA / M.Sc",
      eligibility: "Minimum 6.5 CGPA",
      skills: "Java, Python, SQL, C++, Communication",
      about:
        "Tata Consultancy Services is a global IT services, consulting and business solutions organization.",
      description:
        "The Graduate Engineer Trainee will work on software development, application support and technology projects while learning industry practices.",
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

    3: {
      name: "Wipro",
      location: "Hyderabad",
      industry: "Information Technology",
      role: "Project Engineer",
      package: "₹4.5 LPA",
      qualification: "B.E / B.Tech / MCA",
      eligibility: "Minimum 6.0 CGPA",
      skills: "Java, Python, SQL, Web Technologies",
      about:
        "Wipro is a global technology services and consulting company providing digital transformation and technology solutions.",
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

    4: {
      name: "Accenture",
      location: "Bangalore",
      industry: "Technology & Consulting",
      role: "Associate Software Engineer",
      package: "₹5.5 LPA",
      qualification: "B.E / B.Tech / MCA",
      eligibility: "Minimum 7.0 CGPA",
      skills: "Java, Python, SQL, JavaScript, Problem Solving",
      about:
        "Accenture is a global professional services company providing technology, consulting and digital transformation services.",
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
  };

  const company = companies[id];

  if (!company) {
    return (
      <div className="company-not-found">
        <h2>Company not found</h2>
        <button onClick={() => navigate("/student/companies")}>
          Back to Companies
        </button>
      </div>
    );
  }

  return (
    <div className="company-details-page">

      <button
        className="details-back-button"
        onClick={() => navigate("/student/companies")}
      >
        ← Back to Companies
      </button>

      {/* Company Header */}
      <section className="details-header">

        <div className="details-logo">
          {company.name.charAt(0)}
        </div>

        <div>
          <h1>{company.name}</h1>
          <p>📍 {company.location} &nbsp; | &nbsp; {company.industry}</p>
        </div>

      </section>

      {/* Job Summary */}
      <section className="job-summary">

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

        <div>
          <span>Application Deadline</span>
          <strong>{company.deadline}</strong>
        </div>

      </section>

      {/* About */}
      <section className="details-section">
        <h2>About the Company</h2>
        <p>{company.about}</p>
      </section>

      {/* Job Description */}
      <section className="details-section">
        <h2>Job Description</h2>
        <p>{company.description}</p>
      </section>

      {/* Requirements */}
      <section className="details-section">

        <h2>Requirements</h2>

        <div className="requirements-grid">

          <div>
            <span>🎓 Qualification</span>
            <strong>{company.qualification}</strong>
          </div>

          <div>
            <span>📊 Eligibility</span>
            <strong>{company.eligibility}</strong>
          </div>

          <div>
            <span>🛠️ Required Skills</span>
            <strong>{company.skills}</strong>
          </div>

        </div>

      </section>

      {/* Responsibilities */}
      <section className="details-section">

        <h2>Job Responsibilities</h2>

        <ul>
          {company.responsibilities.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

      </section>

      {/* Benefits */}
      <section className="details-section">

        <h2>Benefits</h2>

        <ul>
          {company.benefits.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

      </section>

      {/* Apply */}
      <section className="apply-section">

        <div>
          <h2>Interested in this opportunity?</h2>
          <p>Apply for the {company.role} position.</p>
        </div>

        <button
          className="apply-button"
          onClick={() =>
            alert(`Application started for ${company.name}`)
          }
        >
          Apply Now
        </button>

      </section>

    </div>
  );
}

export default CompanyDetails;