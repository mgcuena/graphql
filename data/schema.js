import { buildSchema } from "graphql";

const schema = buildSchema(`
    type Test {
        id: ID
        question: String
        options: [Option]!
        answer: String
    }

    type Option {
        option: String
    }

    type Query {
        getTest(id: ID) : Test
        getTests : [Test]
    }

    input OptionInput {
        option: String
    }

    input TestInput {
        id: ID
        question: String
        options: [OptionInput]!
        answer: String
    } 

    type Mutation {
        createTest(input: TestInput) : Test 
        updateTest(input: TestInput) : Test
        deleteTest(id: ID) : String
    }
`);

export default schema;