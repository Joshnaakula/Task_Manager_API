const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  status: {
    type: String,
    enum: ['Pending', 'InProgress', 'Completed'], 
    default: 'Pending',
  },
  dueDate: Date,
}, { timestamps: true });


const Task= mongoose.model('Task', taskSchema);
module.exports=Task;