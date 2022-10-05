import mongoose from "mongoose";

// Mongo connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/tests', {
    useNewUrlParser: true
});

const testSchema = new mongoose.Schema({
    question: {
        type: String
    },
    options: {
        type: Array
    },
    answer: {
        type: String
    }
});

const Tests = mongoose.model('test', testSchema);

export { Tests };