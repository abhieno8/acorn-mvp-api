const graphql = require("graphql");
const _ = require("lodash");
const Profile = require("../models/profile");
const User = require("../models/user");
const Message = require("../models/message");
const { ObjectId } = require('mongodb');

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

// Mesage
const MessageType = require("./MessageType").MessageType(GraphQLObjectType, GraphQLString, UserType, GraphQLList);
const MessageQuery = require("./MessageType").MessageQuery(GraphQLObjectType, User, UserType, Message, MessageType, GraphQLList, GraphQLString, GraphQLID, GraphQLInt);
const AddMessage = require("./MessageType").AddMessage(Message, MessageType, GraphQLString);

//Common Drop Down Listing
const CommonDropDownType = require("./CommonDropDown").CommonDropDownListing(GraphQLObjectType, GraphQLList, GraphQLString);

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    ...UserQuery,
    ...ProfileQuery,
    ...MessageQuery,
    ...CommonDropDownType
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    ...AddUser,
    ...AddProfile,
    ...AddMessage
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
