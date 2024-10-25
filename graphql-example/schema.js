const {GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLList} = require('graphql');

const books = [
  { id: 1, title: '1984', author: 'George Orwell' },
  { id: 2, title: 'The Hobbit', author: 'J.R.R. Tolkien' },
]

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: {type: GraphQLString},
    title: {type: GraphQLString},
    author: {type: GraphQLString},
  }),
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args){
        return books;
      }
    },
    book: {
      type: BookType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        return books.find(book => book.id == args.id); // Find a book by ID
      },
    },
  }
})

const schema = new GraphQLSchema({
  query: RootQuery,
});

module.exports = schema;