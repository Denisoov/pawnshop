import pkg from 'mongoose';

const { Schema, model } = pkg;

const Statistic = new Schema({
    costAmount: { type: Number },
    commissionAmount: { type: Number },
    profitAmount: { type: Number },
})

export default model('Statistic', Statistic)