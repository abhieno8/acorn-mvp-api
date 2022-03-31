const { ObjectId } = require('mongodb');
exports.MessageType = function (GraphQLObjectType, GraphQLString, UserType, GraphQLList) {
    return new GraphQLObjectType({
        name: "Message",
        fields: () => ({
            id: { type: GraphQLString },
            fromUserId: { type: GraphQLString },
            toUserId: { type: GraphQLString },
            message: { type: GraphQLString },
            messageFile: { type: GraphQLString },
            messageDate: { type: GraphQLString },
            status: { type: GraphQLString },
            messageType: { type: GraphQLString },
            lastSeen: { type: GraphQLString },
            createdAt: { type: GraphQLString },
            createdBy: { type: GraphQLString },
            updatedAt: { type: GraphQLString },
            updatedBy: { type: GraphQLString },
            deletedAt: { type: GraphQLString },
            deletedBy: { type: GraphQLString },
            fromUserObj: { type: new GraphQLList(UserType) },
            toUserObj: { type: new GraphQLList(UserType) }
        }),
    });
};

exports.MessageQuery = function (GraphQLObjectType, User, UserType, Message, MessageType, GraphQLList, GraphQLString, GraphQLID, GraphQLInt) {

    const MessageUserData = new GraphQLObjectType({
        name: "MessageData",
        fields: () => ({
            fromUser: { type: UserType },
            toUser: { type: UserType },
            offset: { type: GraphQLInt },
            limit: { type: GraphQLInt },
            total: { type: GraphQLInt },
            messageObject: { type: new GraphQLList(MessageType) },
        })
    });
    return {
        message: {
            type: MessageType,
            args: { id: { type: GraphQLString } },
            resolve(parent, args) {
                return Message.findById(args.id)
            },
        },
        messages: {
            type: new GraphQLList(MessageType),
            resolve(parent, args) {
                return Message.find()
            }
        },
        updateMessage: {
            type: MessageType,
            args: {
                id: { type: GraphQLID },
                fromUserId: { type: GraphQLString },
                toUserId: { type: GraphQLString },
                message: { type: GraphQLString },
                messageFile: { type: GraphQLString },
                messageDate: { type: GraphQLString },
                status: { type: GraphQLString },
                messageType: { type: GraphQLString },
                lastSeen: { type: GraphQLString },
                createdAt: { type: GraphQLString },
                createdBy: { type: GraphQLString },
                updatedAt: { type: GraphQLString },
                updatedBy: { type: GraphQLString },
                deletedAt: { type: GraphQLString },
                deletedBy: { type: GraphQLString }
            },
            resolve(parent, args) {
                return Message.findByIdAndUpdate(args.id, {
                    fromUserId: new ObjectId(args.fromUserId),
                    toUserId: new ObjectId(args.toUserId),
                    message: args.message,
                    messageFile: args.messageFile,
                    messageDate: args.messageDate,
                    status: args.status,
                    messageType: args.messageType,
                    lastSeen: args.lastSeen,
                    createdAt: args.createdAt ? new Date(args.createdAt).getTime() : null,
                    createdBy: args.createdBy ? new ObjectId(args.createdBy) : null,
                    updatedAt: args.updatedAt ? new Date(args.updatedAt).getTime() : new Date().getTime(),
                    updatedBy: args.updatedBy ? new ObjectId(args.updatedBy) : null,
                    deletedAt: args.deletedAt ? new Date(args.deletedAt).getTime() : null,
                    deletedBy: args.deletedBy ? new ObjectId(args.deletedBy) : null
                }, {
                    new: true
                })
            }
        },
        removeMessage: {
            type: MessageType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return Message.findByIdAndRemove(args.id)
            }
        },
        getMessagesList: {
            type: MessageUserData,
            args: {
                toUserId: { type: GraphQLString },
                fromUserId: { type: GraphQLString },
                offset: { type: GraphQLID },
                limit: { type: GraphQLID }
            },
            async resolve(parent, args) {

                let toUserId = args.toUserId;
                let fromUserId = args.fromUserId;
                let offset = args.offset ? args.offset : 0;
                if (offset < 0) {
                    offset = 0;
                }
                let limit = args.limit ? args.limit : 25;
                if (limit < 0) {
                    limit = 25;
                }

                if (toUserId && fromUserId) {

                    let total_records = await Message.count({
                        $or: [
                            { $and: [{ toUserId: new ObjectId(toUserId) }, { fromUserId: new ObjectId(fromUserId) }] },
                            { $and: [{ toUserId: new ObjectId(fromUserId) }, { fromUserId: new ObjectId(toUserId) }] }
                        ]
                    });

                    let list = await Message.find({
                        $or: [
                            { $and: [{ toUserId: new ObjectId(toUserId) }, { fromUserId: new ObjectId(fromUserId) }] },
                            { $and: [{ toUserId: new ObjectId(fromUserId) }, { fromUserId: new ObjectId(toUserId) }] }
                        ]
                    }).sort("-messageDate").skip(offset).limit(limit);

                    let to_obj = await User.findById(toUserId);
                    let from_obj = await User.findById(fromUserId);

                    return {
                        offset: offset,
                        limit: limit,
                        total: total_records,
                        fromUser: from_obj,
                        toUser: to_obj,
                        messageObject: list,
                    }
                }
                else if (toUserId) {

                    let total_records = await Message.aggregate([
                        { "$match": { toUserId: new ObjectId(toUserId) } },
                        {
                            "$group": {
                                "_id": {
                                    "toUserId": "$toUserId",
                                    "fromUserId": "$fromUserId",
                                },
                                "message": { "$last": "$message" },
                                "messageFile": { "$last": "$messageFile" },
                                "messageDate": { "$last": "$messageDate" },
                                "status": { "$last": "$status" },
                                "messageType": { "$last": "$messageType" }
                            }
                        },
                        {
                            "$project": {
                                "_id": 0,
                                "toUserId": "$_id.toUserId",
                                "fromUserId": "$_id.fromUserId",
                                "message": "$message",
                                "messageFile": "$messageFile",
                                "messageDate": "$messageDate",
                                "status": "$status",
                                "messageType": "$messageType"
                            }
                        }
                    ]);

                    total_records = total_records.length;

                    let list = await Message.aggregate([
                        { "$match": { toUserId: new ObjectId(toUserId) } },
                        {
                            $lookup: {
                                from: "users",
                                localField: "toUserId",
                                foreignField: "_id",
                                as: "toUserObj"
                            }
                        },
                        {
                            $lookup: {
                                from: "users",
                                localField: "fromUserId",
                                foreignField: "_id",
                                as: "fromUserObj"
                            }
                        },
                        {
                            "$group": {
                                "_id": {
                                    "toUserId": "$toUserId",
                                    "fromUserId": "$fromUserId"
                                },
                                "message": { "$last": "$message" },
                                "messageFile": { "$last": "$messageFile" },
                                "messageDate": { "$last": "$messageDate" },
                                "status": { "$last": "$status" },
                                "messageType": { "$last": "$messageType" },
                                "fromUserObj": { "$first": "$fromUserObj" },
                                "toUserObj": { "$first": "$toUserObj" }
                            }
                        },
                        {
                            "$project": {
                                "toUserId": "$_id.toUserId",
                                "fromUserId": "$_id.fromUserId",
                                "message": "$message",
                                "messageFile": "$messageFile",
                                "messageDate": "$messageDate",
                                "status": "$status",
                                "messageType": "$messageType",
                                "fromUserObj": "$fromUserObj",
                                "toUserObj": "$toUserObj"
                            }
                        },
                        {
                            "$skip": parseInt(offset)
                        },
                        {
                            "$limit": parseInt(limit)
                        },
                        {
                            "$sort": { "messageDate": -1 }
                        }
                    ]);

                    return {
                        offset: offset,
                        limit: limit,
                        total: total_records,
                        fromUser: null,
                        toUser: null,
                        messageObject: list,
                    }
                }
            }
        }
    }
};

exports.AddMessage = function (Message, MessageType, GraphQLString) {
    return {
        addMessage: {
            type: MessageType,
            args: {
                fromUserId: { type: GraphQLString },
                toUserId: { type: GraphQLString },
                message: { type: GraphQLString },
                messageFile: { type: GraphQLString },
                messageDate: { type: GraphQLString },
                status: { type: GraphQLString },
                messageType: { type: GraphQLString },
                lastSeen: { type: GraphQLString },
                createdAt: { type: GraphQLString },
                createdBy: { type: GraphQLString },
                updatedAt: { type: GraphQLString },
                updatedBy: { type: GraphQLString },
                deletedAt: { type: GraphQLString },
                deletedBy: { type: GraphQLString }
            },
            resolve(parent, args) {
                let message = new Message({
                    fromUserId: new ObjectId(args.fromUserId),
                    toUserId: new ObjectId(args.toUserId),
                    message: args.message,
                    messageFile: args.messageFile,
                    messageDate: args.messageDate ? new Date(args.messageDate).getTime() : new Date().getTime(),
                    status: args.status,
                    messageType: args.messageType,
                    lastSeen: args.lastSeen,
                    createdAt: args.createdAt ? new Date(args.createdAt).getTime() : new Date().getTime(),
                    createdBy: args.createdBy ? new ObjectId(args.createdBy) : args.createdBy,
                    updatedAt: args.updatedAt ? new Date(args.updatedAt).getTime() : null,
                    updatedBy: args.updatedBy ? new ObjectId(args.updatedBy) : args.updatedBy,
                    deletedAt: args.deletedAt ? new Date(args.deletedAt).getTime() : null,
                    deletedBy: args.deletedBy ? new ObjectId(args.deletedBy) : args.deletedBy
                });
                return message.save();
            },
        }
    }

};