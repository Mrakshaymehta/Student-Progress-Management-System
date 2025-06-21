// backend/routes/students.js
const express = require("express");
const router = express.Router();
const Student = require("../models/Student");

// Get a student by ID
router.get("/:id", async (req, res) => {
  const student = await Student.findById(req.params.id);
  res.json(student);
});

// GET all students
router.get("/", async (req, res) => {
  const students = await Student.find();
  res.json(students);
});

// ADD student
router.post("/", async (req, res) => {
  const newStudent = new Student(req.body);
  await newStudent.save();
  res.status(201).json(newStudent);
});

// UPDATE student
router.put("/:id", async (req, res) => {
  const updated = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

// DELETE student
router.delete("/:id", async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.status(204).end();
});

module.exports = router;