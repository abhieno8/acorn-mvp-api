exports.UserType = function (GraphQLObjectType, GraphQLString) {
  return new GraphQLObjectType({
    name: "User",
    fields: () => ({
      id: { type: GraphQLString },
      userName: { type: GraphQLString },
      email: { type: GraphQLString },
      status: { type: GraphQLString },
      lastLogin: { type: GraphQLString },
      createdAt: { type: GraphQLString },
      createdBy: { type: GraphQLString },
      updatedAt: { type: GraphQLString },
      updatedBy: { type: GraphQLString },
      deletedAt: { type: GraphQLString },
      deletedBy: { type: GraphQLString },
    }),
  });
};

exports.UserQuery = function (
  User,
  UserType,
  GraphQLList,
  GraphQLString,
  GraphQLID
) {
  return {
    user: {
      type: UserType,
      args: {
        id: { type: GraphQLString },
        userName: { type: GraphQLString },
        email: { type: GraphQLString },
      },
      resolve(parent, args) {
        if (args.id) return User.findById(args.id);
        else if (args.userName)
          return User.findOne({ userName: args.userName });
        else if (args.email) return User.findOne({ email: args.email });
      },
    },
    users: {
      type: new GraphQLList(UserType),
      resolve(parent, args) {
        return User.find();
      },
    },
    updateUser: {
      type: UserType,
      args: {
        id: { type: GraphQLString },
        userName: { type: GraphQLString },
        email: { type: GraphQLString },
        status: { type: GraphQLString },
        lastLogin: { type: GraphQLString },
        deletedAt: { type: GraphQLString },
        createdBy: { type: GraphQLString },
        updatedBy: { type: GraphQLString },
        deletedBy: { type: GraphQLString },
      },
      resolve(parent, args) {
        return User.findByIdAndUpdate(
          args.id,
          {
            userName: args.userName,
            email: args.email,
            status: args.status,
            lastLogin: args.lastLogin,
            deletedAt: args.deletedAt,
            createdBy: args.createdBy,
            updatedBy: args.updatedBy,
            deletedBy: args.deletedBy,
          },
          {
            new: true,
          }
        );
      },
    },
    removeUser: {
      type: UserType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        return User.findByIdAndRemove(args.id);
      },
    },
  };
};

exports.AddUser = function (User, UserType, GraphQLString) {
  return {
    addUser: {
      type: UserType,
      args: {
        userName: { type: GraphQLString },
        email: { type: GraphQLString },
        status: { type: GraphQLString },
        lastLogin: { type: GraphQLString },
        deletedAt: { type: GraphQLString },
        createdBy: { type: GraphQLString },
        updatedBy: { type: GraphQLString },
        deletedBy: { type: GraphQLString },
      },
      async resolve(parent, args) {
        let is_exist_by_username = await User.findOne({ userName: args.userName });
        let is_exist_by_email = await User.findOne({ email: args.email });
        if (
          (is_exist_by_username && is_exist_by_username._id) ||
          (is_exist_by_email && is_exist_by_email._id)
        ) {
          return null;
        } else {
          let user = new User({
            userName: args.userName,
            email: args.email,
            status: args.status,
            lastLogin: args.lastLogin,
            deletedAt: args.deletedAt,
            createdBy: args.createdBy,
            updatedBy: args.updatedBy,
            deletedBy: args.deletedBy,
          });
          return user.save();
        }
      },
    },
  };
};
