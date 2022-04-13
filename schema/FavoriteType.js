const { ObjectId } = require('mongodb');
exports.FavoriteType = function (GraphQLObjectType, GraphQLString) {
    return new GraphQLObjectType({
        name: "Favorite",
        fields: () => ({
            id: { type: GraphQLString },
            donorId: { type: GraphQLString },
            userId: { type: GraphQLString }
        }),
    });
};

exports.AddFavorite = function (Favorite, FavoriteType, GraphQLString) {
    return {
        AddFavorite: {
            type: FavoriteType,
            args: {
                donorId: { type: GraphQLString },
                userId: { type: GraphQLString }
            },
            async resolve(parent, args) {
                let is_exist_fav = await Favorite.findOne(
                    {
                        donorId: new ObjectId(args.donorId),
                        userId: new ObjectId(args.userId)
                    });
                if (
                    (is_exist_fav && is_exist_fav._id)
                ) {
                    return Favorite.remove({  
                        donorId: new ObjectId(args.donorId),
                        userId: new ObjectId(args.userId)
                    });
                } else {
                    let fav = new Favorite({
                        donorId: new ObjectId(args.donorId),
                        userId: new ObjectId(args.userId),
                        createdAt: new Date().getTime()
                    });
                    return fav.save();
                }
            },
        },
    };
};
