const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

// Middleware to verify JWT
const authenticate = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        message: "Authentication required",
      });
    }

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.userId).select("-password");

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    req.user = user;

    next();
  } catch (error) {
    return res.status(401).json({
      message: "Invalid or expired token",
    });
  }
};

// GET student profile
router.get("/", authenticate, async (req, res) => {
  try {
    res.json({
      user: req.user,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error fetching profile",
    });
  }
});

// UPDATE student profile
router.put("/", authenticate, async (req, res) => {
  try {
       const {
  name,
  phone,
  dateOfBirth,
  gender,
  address,
  collegeName,
  university,
  course,
  department,
  currentYear,
  semester,
  usn,
  cgpa,
  tenthPercentage,
  pucPercentage,

  // Placement Information
  preferredJobRole,
  preferredLocation,
  expectedSalary,
  placementStatus,
  availableForPlacement,
  linkedin,
  github,
  portfolio,
} = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      req.user._id,
      {
        name,
        phone,
        dateOfBirth,
        gender,
        address,
        collegeName,
        university,
        course,
        department,
        currentYear,
        semester,
        usn,
        cgpa,
        tenthPercentage,
        pucPercentage,

        // Placement Information
        preferredJobRole,
        preferredLocation,
        expectedSalary,
        placementStatus,
        availableForPlacement,
        linkedin,
        github,
         portfolio,
      },
      {
        new: true,
        runValidators: true,
      }
    ).select("-password");

    res.json({
      message: "Profile updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    console.error("Profile update error:", error);

    res.status(500).json({
      message: "Error updating profile",
    });
  }
});

module.exports = router;