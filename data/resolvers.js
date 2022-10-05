import { reject } from 'lodash';
import { Tests } from './dbConnectors';


const resolvers = {
    getTest: ({id}) => {
        return new Promise((resolve) => {
            Tests.findById({_id: id}, (err, test) => {
                if (err) reject(err)
                else resolve(test)
            })
        });
    },
    getTests: () => {
        return Tests.find({});
    },
    createTest: ({input}) => {
        const newTest = new Tests({
            question: input.question,
            options: input.options,
            answer: input.answer
        });

        newTest.id = newTest._id;

        return new Promise((resolve) => {
            newTest.save((err) => {
                if (err) reject(err)
                else resolve(newTest)
            });
        });
    },
    updateTest: ({input}) => {
        return new Promise((resolve) => {
            Tests.findOneAndUpdate({ _id: input.id }, input, { new: true }, (err, test) => {
                if (err) reject(err)
                else resolve(test) 
            });
        })
    },
    deleteTest: ({id}) => {
        return new Promise((resolve) => {
            Tests.remove({_id: id}, (err) => {
                if (err) reject(err)
                else resolve('Test successfully deleted')
            });
        })
    }
};

export default resolvers;

