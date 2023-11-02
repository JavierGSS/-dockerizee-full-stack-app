var express = require("express")
var { graphqlHTTP } = require("express-graphql")
var { buildSchema } = require("graphql")

var contacts = [
    {
      id:1,
      name: "peter parker",
      age: 21,
      email: "peter@mit.edu",
      courses: [
        { number: "1.00", name: "engr comp" },
        { number: "3.00", name: "intro bio" }
      ]
    },
    {
      id:2,
      name: "bruce wayne",
      age: 32,
      email: "bruce@mit.edu",
      courses: [
        { number: "2.00", name: "intro ME" },
        { number: "3.00", name: "intro MS" }
      ]
    },
    {
      id:3,
      name: "diana prince",
      age: 25,
      email: "diana@mit.edu",
      courses: [
        { number: "2.00", name: "intro arch" },
        { number: "1.00", name: "intro chem" }
      ]
    },
  ];

// Construct a schema, using GraphQL schema language
/*var schema = buildSchema(`
  type Query {
    hello: String
  }
`);*/

var schema = buildSchema(`
  type Query {
    contact(id: Int): Contact
    contacts: [Contact]
  }
  type Contact {
    id: Int
    name: String
    age: Int
    email: String
    courses: [Course]
  }
  type Course {
    number: String
    name: String
  }
  input Classes {
    number: String
    name: String
  }
  input ContactInput {
    id: Int
    name: String
    age: Int
    email: String
    courses: [Classes]
  }
  type DeleteResponse {
    ok: Boolean!
  }
  type Mutation {
    setContact(input: ContactInput): Contact
    deleteContact(id: Int!): DeleteResponse
    editContact(id: Int!, age: Int!, email: String!): Contact
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
    contact: (arg) => contacts[arg.id],
    contacts: () => contacts,
    setContact: ({input}) => {
        contacts.push({id: input.id, name: input.name, age: input.age, email: input.email, courses: input.courses});
        return input;
    },
    deleteContact: ({id}) => {
        let check = contacts.filter((item) => item.id === id);
        const ok = Boolean(check.length !== 0);
        contacts = contacts.filter((item) => item.id !== id);
        console.log(JSON.stringify(check));
        return {ok};
    },
    editContact: ({id, ...contactInfo}) => {
        let check = contacts.filter((item) => item.id === id);
        if (check.length === 0) {
            throw new Error("Contact doesn't exist");
        }
        contacts[id-1] = {
            ...contacts[id-1], ...contactInfo
        }
        return contacts[id-1];
    }
};

var app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);
app.listen(4000, () => {
    console.log("Running a GraphQL API server at port 4000")
});
