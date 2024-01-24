const {Schema, model} = require('mongoose');

const transacademiaSchema = new Schema({
    phoneWhatsapp: { type: String, required: true },
    phonePayment: { type: String, required: true },
    phoneAccount: { type: String, required: true },
    stdTac: { type: String, required: true},
    createdAt: { type: Date, default: Date.now, expires: 240000 }
},{timestamps: true, versionKey: false });

module.exports.Transacademia = model('Transacademia', transacademiaSchema);