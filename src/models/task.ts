import {Schema, model} from 'mongoose'

const TaskSchema = new Schema({
    title: {
        type: String,
        required: true,
        lowercase: true,
    },
    description: {
        type: String,
        required: true,
        lowercase: true,
    }

})

const TaskModel = model('Task', TaskSchema);

export default TaskModel;