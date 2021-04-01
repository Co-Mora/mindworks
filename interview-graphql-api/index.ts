const { GraphQLServer } = require("graphql-yoga");
import fetch from 'node-fetch';

const typeDefs = `
  type Query {
    getAllPosts(pge: Int!): [Post]
    getSinglePost(id: Int!): SinglePost
    getCommentBySearch(value: String): [Comment]
  }
  type Post {
    userId: Int
    id: Int
    title: String
    body: String
  }
  type Comment {
    postId: Int
    id: Int
    name: String
    email: String
    body: String
  }
  type SinglePost {
    userId: Int
    id: Int
    title: String
    body: String
    comments: [Comment]
  }
`;

const resolvers = {
    Post: {

    },
    SinglePost: {
        comments: async parent => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${parent.id}`);
            return response.json();
        },
    },
    Query: {
        getAllPosts: async (_, { pge }) => {
            let items = [];
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
            const data = await response.json();
            for(let i = 0; i < pge; i++) items.push(data[i])
            
            return items;
        },
        getSinglePost: async (_, { id }) => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
            return response.json();
        },
        getCommentBySearch: async (_, { value }) => {
            let items = [];
            var myPattern = new RegExp('(\\w*' + value + '\\w*)', 'gi');

            const response = await fetch(`https://jsonplaceholder.typicode.com/comments`);
            const data = await response.json();
            const searchKeys = ["name", "email", "body"]
            data.map((el) => {
                for (let i = 0; i < searchKeys.length; i++) {
                    var matches = el[searchKeys[i]].match(myPattern);
                    if (matches) items.push(el)
                }
            })
            return items;
        },
    }
};

const server = new GraphQLServer({ typeDefs, resolvers });

const options = {
    port: 4000,
    endpoint: '/graphql',
}

server.start(options, ({ port }) =>
    console.log(
        `Server started, listening on port ${port} for incoming requests.`,
    ),
)