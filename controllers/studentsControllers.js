import Student from '../models/studentModel.js'

const createStudent = async (req, res)=>{
    try{
        // 1. require data
        const data = req.body;

        // 2. check wheather that user is already created or not
        const user = await Student.findOne({studentId : data.studentId});
        if(!user){
            return res.status(400).json({
                message : "Student Already Exist"
            })
        }

        // 3. Operation => Create
        const db_res = await Student.insertOne(data);

        // 4. Collect result and return
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
    try{
        // 1. get studentId
        const {studentId} = req.params;

        // 2. Check student in db
        const db_data = await Student.findOne({studentId});
        if(!db_data){
            return res.status(404).json({
                message : "student not found"
            })
        }

        // 3. return data
        return res.status(200).json({
            message : "Success",
            student : db_data
        })
    }
    catch(err){
        return res.status(500).json({
            "message" : "Internal Server Errro",
        })
    }
}

const updateMarksById = async (req, res)=>{
    try{
        // 1. studentId, data are required
        const {studentId} = req.params;
        const {marks} = req.body;

        // 2. Check user/student/employee exist or not
        const db_data = await Student.findOne({studentId});
        if(!db_data){
            return res.status(404).json({
                message : "User not found"
            })
        }

        // await Student.updateOne(db_data);
        // only for update
        // const newUser = await Student.updateOne(
        //     {studentId},
        //     {$set : {marks}},
        //     { new: true }
        // );

        // 3. Do all your necessary operations

        // update + find
        const newUser = await Student.findOneAndUpdate(
            {studentId},
            {$set : {marks}},
            { new: true }
        );

        // 4. collect data and return
        return res.status(200).json({
            "message" : "Marks updated",
            student : newUser
        })

    }
    catch(err){
        return res.status(500).json({
            "message" : "Internal Server Errro",
        })
    }
}

const deleteStudentById = async (req, res)=>{
    try{
        // 1. data 
        const {studentId} = req.params;

        // 2. Check user exist or not
        const user = await Student.findOne({studentId});
        if(!user){
            return res.status(404).json({
                message : "User does not exist"
            })
        }

        // 3. Operation => delete
        const result = await Student.deleteOne({studentId});

        // 4. return 
        return res.status(200).json(
            {
                message : "User deleted"
            }
        )
    }
    catch(err){

    }

}
export {createStudent, getAllStudents, getStudentById, updateMarksById, deleteStudentById};