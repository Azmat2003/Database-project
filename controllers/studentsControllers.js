import Student from '../models/studentModel.js'

const createStudent = async (req, res)=>{
    try{
        const data = req.body;
        const db_res = await Student.insertOne(data);

        return res.status(200).json({
            "message" : "Student created"
        })
    }
    catch(err){
        return res.status(500).json({
            "message" : "Internal Server Error"
        })
    }
}

const getAllStudents = async (req, res)=>{
    try{
        const db_res = await Student.find();
        console.log(db_res);
        return res.status(200).json({
            "message" : "All students data",
            "students" : db_res
        })
    }
    catch(err){
        return res.status(500).json({
            "message" : "Internal Server Error"
        })
    }
}

const getStudentById = async (req, res)=>{

}

const updateMarksById = async (req, res)=>{
    try{
        const {studentId} = req.params;
        const {marks} = req.body;

        const db_data = await Student.findOne({studentId});
        db_data.marks = marks;

        await Student.updateOne(db_data);

        return res.status(200).json({
            "message" : "Marks updated",
        })

    }
    catch(err){
        return res.status(500).json({
            "message" : "Internal Server Errro",
        })
    }
}

const deleteStudentById = async (req, res)=>{

}
export {createStudent, getAllStudents, getStudentById, updateMarksById, deleteStudentById};