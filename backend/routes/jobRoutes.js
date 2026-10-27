const express = require("express");
const router = express.Router();

const Job = require("../models/Job");
const User = require("../models/User");

// ===============================
// POST A NEW JOB
// ===============================
router.post("/create", async (req, res) => {
  try {
    const {
      company,
      jobTitle,
      description,
      vacancies,
      location,
      package,
      jobType,
      qualification,
      minimumCGPA,
      skills,
      experience,
      responsibilities,
      benefits,
      applicationDeadline,
    } = req.body;

    // Check company
    const companyUser = await User.findById(company);

    if (!companyUser) {
      return res.status(404).json({
        message: "Company not found",
      });
    }

    if (companyUser.role !== "company") {
      return res.status(400).json({
        message: "Only company accounts can post jobs",
      });
    }

    const job = new Job({
      company,
      jobTitle,
      description,
      vacancies,
      location,
      package,
      jobType,
      qualification,
      minimumCGPA,
      skills,
      experience,
      responsibilities,
      benefits,
      applicationDeadline,
      status: "pending",
    });

    await job.save();

    res.status(201).json({
      message: "Job posted successfully. Waiting for admin approval.",
      job,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to create job",
      error: error.message,
    });
  }
});

// ===============================
// GET ALL APPROVED JOBS
// ===============================
router.get("/", async (req, res) => {
  try {
    const jobs = await Job.find({ status: "approved" })
      .populate("company", "name email phone");

    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch jobs",
      error: error.message,
    });
  }
});

// ===============================
// GET ALL JOBS FOR ADMIN
// ===============================
router.get("/all", async (req, res) => {
  try {
    const jobs = await Job.find()
      .populate("company", "name email");

    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch all jobs",
      error: error.message,
    });
  }
});

// ===============================
// GET ONE JOB
// ===============================
router.get("/:id", async (req, res) => {
  try {
    const job = await Job.findById(req.params.id)
      .populate("company", "name email phone");

    if (!job) {
      return res.status(404).json({
        message: "Job not found",
      });
    }

    res.status(200).json(job);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch job",
      error: error.message,
    });
  }
});

module.exports = router;