const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    jobTitle: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
    },

    vacancies: {
      type: Number,
      required: true,
      min: 1,
    },

    location: {
      type: String,
      required: true,
      trim: true,
    },

    package: {
      type: String,
      required: true,
      trim: true,
    },

    jobType: {
      type: String,
      enum: ["Full Time", "Part Time", "Internship"],
      default: "Full Time",
    },

    qualification: {
      type: String,
      required: true,
    },

    minimumCGPA: {
      type: Number,
      required: true,
    },

    skills: {
      type: String,
      required: true,
    },

    experience: {
      type: String,
      default: "Fresher",
    },

    responsibilities: {
      type: String,
      default: "",
    },

    benefits: {
      type: String,
      default: "",
    },

    applicationDeadline: {
      type: Date,
      required: true,
    },

    status: {
      type: String,
      enum: ["pending", "approved", "rejected", "closed"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Job", jobSchema);
