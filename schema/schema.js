const graphql = require("graphql");
const _ = require("lodash");
const Profile = require("../models/profile");
const User = require("../models/user");

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLBoolean,
  GraphQLInputObjectType,
} = graphql;


// User
const UserType = require("./UserType").UserType(GraphQLObjectType, GraphQLString);
const UserQuery = require("./UserType").UserQuery(User, UserType, GraphQLList, GraphQLString, GraphQLID);
const AddUser = require("./UserType").AddUser(User, UserType, GraphQLString);
// Profile
const AddProfile = require("./ProfileType").AddProfile();
const ProfileQuery = require("./ProfileType").ProfileQuery();


const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    ...UserQuery,
    ...ProfileQuery
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    ...AddUser,
    ...AddProfile
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
