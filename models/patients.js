const mongoose = require('mongoose');
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;
const Schema = mongoose.Schema;

const tableSchema = new Schema({
    count: {
        type: String
    },
    acknowledgement: {
        type: Number,
        min: 0,
        max: 1
    }
});

const appointmentSchema = new Schema({
    doctorName: {
        type: String,
        required: true
    },
    diagnosis: {
        type: String,
        required: true
    },
    medicines: [tableSchema],
    tests: [tableSchema],
    xrays: [tableSchema],
    physiotherapy: [tableSchema]
}, {
    timestamp: true
});

const patientSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    pid: {
        type: Number,
        required: true,
        unique: true
    },
    appointments: [appointmentSchema]
}, {
    timestamp: true
});

var Patients = mongoose.model('Patient', patientSchema);

module.exports = Patients;