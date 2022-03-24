import pkg from 'mongoose';
const { Schema, model } = pkg;

const Order = new Schema({
    secondName: { type: String, required: true },
    firstName: { type: String, required: true },
    patronymic: { type: String, required: true },
    date: { type: String, date: Date.now }
})

export default model('Order', Order)