'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskSchema = new Schema({
    sensorType: {
        type: [{
          type: String,
          enum: ['humidity', 'temperature']
        }],
        required: 'Please select sensor type: [humidity] [temperature]'
    },
    sensorValue: {
        type: Number,
        required: 'Kindly enter the name of the task'
    },
    createDate: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('Tasks', TaskSchema);