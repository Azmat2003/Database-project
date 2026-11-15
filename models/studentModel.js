import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        maxlength: 50
    },
    studentId: {
        type: Number,
        required: true,
        unique: true,
    },
    age: {
        type: Number,
    },
    course: {
        type: String,
        required: true,
        enum: {
            values: ['MERN', 'JAVA', 'DA', 'PYTHON'],
        }
    },
    marks: {
        type: Number,
        required: true,
        min : 0,
        max: 100
    }
}, { 
    timestamps: true // Automatically adds createdAt and updatedAt fields
});

const Student = mongoose.model('Student', studentSchema); // an object refering to Student collection

export default Student;