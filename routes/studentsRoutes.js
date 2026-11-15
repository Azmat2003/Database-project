import { Router } from "express";
import { createStudent, deleteStudentById, getAllStudents, getStudentById, updateMarksById } from "../controllers/studentsControllers.js";
import { get } from "mongoose";
const router = Router();

// api/students/

// /- post
// /- get
// /:id - get - specific student
// /marks/:id - put - specific update 
// /:id - delete - delete the student

// enter student into db
router.post('/', createStudent);

// get all students
router.get('/', getAllStudents);

router.get('/:id', getStudentById);

router.put('/marks/:studentId', updateMarksById);

router.delete('/:id', deleteStudentById);


export default router;