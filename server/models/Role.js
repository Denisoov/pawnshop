import pkg from 'mongoose';

const { Schema, model } = pkg;

const Role = new Schema({
    role: { 
        type: String, 
        unique: true, 
        required: true, 
        default: 'WORKER' 
    }
})

export default model('Role', Role)