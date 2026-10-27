const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    // Basic account information
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      enum: ["student", "company", "admin"],
      required: true,
    },

    phone: {
      type: String,
      default: "",
    },

    // Personal Information
    dateOfBirth: {
      type: String,
      default: "",
    },

    gender: {
      type: String,
      default: "",
    },

    address: {
      type: String,
      default: "",
    },

    // Academic Information
    collegeName: {
      type: String,
      default: "",
    },

    university: {
      type: String,
      default: "",
    },

    course: {
      type: String,
      default: "",
    },

    department: {
      type: String,
      default: "",
    },

    currentYear: {
      type: String,
      default: "",
    },

    semester: {
      type: String,
      default: "",
    },

    usn: {
      type: String,
      default: "",
    },

    cgpa: {
      type: String,
      default: "",
    },

    tenthPercentage: {
      type: String,
      default: "",
    },

    pucPercentage: {
      type: String,
      default: "",
    },

    // Placement Information
preferredJobRole: {
  type: String,
  default: "",
},

preferredLocation: {
  type: String,
  default: "",
},

expectedSalary: {
  type: String,
  default: "",
},

placementStatus: {
  type: String,
  default: "Not Placed",
},

availableForPlacement: {
  type: Boolean,
  default: true,
},

linkedin: {
  type: String,
  default: "",
},

github: {
  type: String,
  default: "",
},

portfolio: {
  type: String,
  default: "",
},
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);