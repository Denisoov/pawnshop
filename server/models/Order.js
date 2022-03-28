import pkg from 'mongoose';
const { Schema, model } = pkg;

const Order = new Schema({
    articul: { type: Number, required: true },
    surName: { type: String, required: true },
    firstName: { type: String, required: true },
    patronymic: { type: String, required: true },
    series: { type: Number, required: true },
    number: { type: Number, required: true },
    company: { type: Boolean, required: true },
    rebuyDate: { type: String, required: true },
    image: { type: String }
}, { timestamps: true })

export default model('Order', Order)