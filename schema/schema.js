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


const UserType = require("./UserType").UserType(GraphQLObjectType, GraphQLString);
const UserQuery = require("./UserType").UserQuery(User, UserType, GraphQLList, GraphQLString, GraphQLID);
const AddUser = require("./UserType").AddUser(User, UserType, GraphQLString);

// Nested Objects Definition as args.

const PersonalInformation = new GraphQLInputObjectType({
  name: "PersonalInfo",
  fields: () => ({
    DateOfBirth: { type: GraphQLString },
    Phone: { type: GraphQLString },
    Address: { type: GraphQLString },
    ZipCode: { type: GraphQLInt },
    City: { type: GraphQLString },
    State: { type: GraphQLString },
    Country: { type: GraphQLString },
  }),
});

const PersonalInformationSchema = new GraphQLObjectType({
  name: "PersonalInfoSchema",
  fields: () => ({
    DateOfBirth: { type: GraphQLString },
    Phone: { type: GraphQLString },
    Address: { type: GraphQLString },
    ZipCode: { type: GraphQLInt },
    City: { type: GraphQLString },
    State: { type: GraphQLString },
    Country: { type: GraphQLString },
  }),
});

const IdentityInformation = new GraphQLInputObjectType({
  name: "Identity",
  fields: () => ({
    IdentityId: { type: GraphQLString },
    IdentityIdType: { type: GraphQLString },
    IdentityVerifiedDate: { type: GraphQLString },
    IdentityDocumentUrl: { type: GraphQLString },
    MimeType: { type: GraphQLString },
  }),
});

const IdentityInformationSchema = new GraphQLObjectType({
  name: "IdentitySchema",
  fields: () => ({
    IdentityId: { type: GraphQLString },
    IdentityIdType: { type: GraphQLString },
    IdentityVerifiedDate: { type: GraphQLString },
    IdentityDocumentUrl: { type: GraphQLString },
    MimeType: { type: GraphQLString },
  }),
});

const MediaInformation = new GraphQLInputObjectType({
  name: "profileMedia",
  fields: () => ({
    Url: { type: GraphQLString },
    MediaType: { type: GraphQLString },
  }),
});

const MediaInformationSchema = new GraphQLObjectType({
  name: "profileMediaSchema",
  fields: () => ({
    Url: { type: GraphQLString },
    MediaType: { type: GraphQLString },
  }),
});

const DemoGraphicInformation = new GraphQLInputObjectType({
  name: "DemographicInfo",
  fields: () => ({
    NaturalHairColor: { type: GraphQLString },
    EyeColor: { type: GraphQLString },
    Ethnicity: { type: GraphQLString },
    HighestLevelOfEducation: { type: GraphQLInt },
    Occupation: { type: GraphQLString },
  }),
});

const DemoGraphicInformationSchema = new GraphQLObjectType({
  name: "DemographicInfoSchema",
  fields: () => ({
    NaturalHairColor: { type: GraphQLString },
    EyeColor: { type: GraphQLString },
    Ethnicity: { type: GraphQLString },
    HighestLevelOfEducation: { type: GraphQLInt },
    Occupation: { type: GraphQLString },
  }),
});

const EggDonations = new GraphQLInputObjectType({
  name: "EggDonations",
  fields: () => ({
    embrologyReportUrl: { type: GraphQLString },
    age:{ type:GraphQLString },
    MediaType: { type: GraphQLString },
  }),
});

const EggDonationsSchema = new GraphQLObjectType({
  name: "EggDonationsSchema",
  fields: () => ({
    embrologyReportUrl: { type: GraphQLString },
    age:{ type:GraphQLString },
    MediaType: { type: GraphQLString },
  }),
});

const EggInformation = new GraphQLInputObjectType({
  name: "EggInfo",
  fields: () => ({
    PricePerSet: { type: GraphQLInt },
    NumberofSets: { type: GraphQLInt },
    Category: { type: GraphQLString },
  }),
});

const EggInformationSchema = new GraphQLObjectType({
  name: "EggInfoSchema",
  fields: () => ({
    PricePerSet: { type: GraphQLInt },
    NumberofSets: { type: GraphQLInt },
    Category: { type: GraphQLString },
  }),
});

const HealthInformation = new GraphQLInputObjectType({
  name: "HealthInfo",
  fields: () => ({
    Weight: { type: GraphQLInt },
    Height: { type: GraphQLInt },
    BloodType: { type: GraphQLString },
  }),
});

const HealthInformationSchema = new GraphQLObjectType({
  name: "HealthInfoSchema",
  fields: () => ({
    Weight: { type: GraphQLInt },
    Height: { type: GraphQLInt }, //convert to string
    BloodType: { type: GraphQLString },
  }),
});


const DonationSettingsInformation = new GraphQLInputObjectType({
  name: "DonationSettings",
  fields: () => ({
    FamilyPreference: { type: GraphQLString },
    Payment: { type: GraphQLInt },
    ContactPreference: { type: GraphQLString },
    Disclosure: { type: GraphQLString }
  }),
});

const DonationSettingsInformationSchema = new GraphQLObjectType({
  name: "DonationSettingsSchema",
  fields: () => ({
    FamilyPreference: { type: GraphQLString },
    Payment: { type: GraphQLInt },
    ContactPreference: { type: GraphQLString },
    Disclosure: { type: GraphQLString }
  }),
});

const NotificationSettingsInformation = new GraphQLInputObjectType({
  name: "NotificationSettings",
  fields: () => ({
    FamilyPreference: { type: GraphQLString },
    Payment: { type: GraphQLInt },
    ContactPreference: { type: GraphQLString },
    Disclosure: { type: GraphQLString }
  }),
});

const NotificationSettingsInformationSchema = new GraphQLObjectType({
  name: "NotificationSettingsSchema",
  fields: () => ({
    FamilyPreference: { type: GraphQLString },
    Payment: { type: GraphQLInt },
    ContactPreference: { type: GraphQLString },
    Disclosure: { type: GraphQLString }
  }),
});

const ProfileSchema = new GraphQLObjectType({
  name: "ProfileSchema",
  fields: () => ({
    UserId: { type: GraphQLString },
    DonorId: { type: GraphQLString },
    FolderId: {type: GraphQLString},
    Gender: {type: GraphQLString},
    FirstName: { type: GraphQLString },
    LastName: { type: GraphQLString },
    ProfileType: { type: GraphQLString },
    ProfileStatus: { type: GraphQLString },
    PersonalInfo: { type: PersonalInformationSchema },
    ConsentForAcornTerms: { type: GraphQLBoolean },
    DonationType: { type: GraphQLString },
    Identity: { type: new GraphQLList(IdentityInformationSchema) },
    ProfilePic: { type: GraphQLString },
    ProfileMedia: { type: new GraphQLList(MediaInformationSchema) },
    DemographicInfo: { type: DemoGraphicInformationSchema },
    EggInfo: { type: EggInformationSchema },
    EggDonations: { type: new GraphQLList(EggDonationsSchema) },
    HealthInfo: { type: HealthInformationSchema },
    DonationSettings: { type: DonationSettingsInformationSchema },
    NotificationSettings: { type: NotificationSettingsInformationSchema },
    CreatedBy: { type: GraphQLID },
    UpdatedBy: { type: GraphQLID },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    profile: {
      type: ProfileSchema,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Profile.findById(args.id);
      },
    },
    profiles: {
      type: new GraphQLList(ProfileSchema),
      resolve(parent, args) {
        return Profile.find();
      },
    },
    updateProfile: {
      type: ProfileSchema,
      args: {
        id: { type: GraphQLID },
        ProfileStatus: { type: GraphQLString },
        PersonalInfo: { type: PersonalInformation },
        ConsentForAcornTerms: { type: GraphQLBoolean },
        DonationType: { type: GraphQLString },
        Identity: { type: new GraphQLList(IdentityInformation)},
        ProfilePic: { type: GraphQLString },
        ProfileMedia: { type: new GraphQLList(MediaInformation) },
        DemographicInfo: { type: DemoGraphicInformation },
        EggInfo: { type: EggInformation },
        HealthInfo: { type: HealthInformation },
        DonationSettings: { type: DonationSettingsInformation },
        NotificationSettings: { type: NotificationSettingsInformation },
        CreatedBy: { type: GraphQLID },
        UpdatedBy: { type: GraphQLID },
      },
      resolve(parent, args) {
        return Profile.findByIdAndUpdate(
          args.id,
          {
            ProfileStatus: args.ProfileStatus,
            PersonalInfo: args.PersonalInfo,
            ConsentForAcornTerms: args.ConsentForAcornTerms,
            DonationType: args.DonationType,
            Identity: args.Identity,
            ProfilePic: args.ProfilePic,
            ProfileMedia: args.ProfileMedia,
            DemographicInfo: args.DemographicInfo,
            EggInfo: args.EggInfo,
            HealthInfo: args.HealthInfo,
            DonationSettings: args.DonationSettings,
            NotificationSettings: args.NotificationSettings,
            CreatedBy: args.CreatedBy,
            UpdatedBy: args.UpdatedBy,
          },
          {
            new: true,
          }
        );
      },
    },
    removeProfile: {
      type: ProfileSchema,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Profile.findByIdAndRemove(args.id);
      },
    },
    ...UserQuery,
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addProfile: {
      type: ProfileSchema,
      args: {
        UserId: { type: GraphQLString },
        DonorId: { type: GraphQLString },
        FirstName: { type: GraphQLString },
        LastName: { type: GraphQLString },
        ProfileType: { type: GraphQLString },
        ProfileStatus: { type: GraphQLString },
        PersonalInfo: { type: PersonalInformation },
        ConsentForAcornTerms: { type: GraphQLBoolean },
        DonationType: { type: GraphQLString },
        Identity:{ type: new GraphQLList(IdentityInformation) },
        ProfilePic: { type: GraphQLString },
        profileMedia: { type: new GraphQLList(MediaInformation) },
        DemographicInfo: { type: DemoGraphicInformation },
        EggInfo: { type: EggInformation },
        HealthInfo: { type: HealthInformation },
        DonationSettings: { type: DonationSettingsInformation },
        NotificationSettings: { type: NotificationSettingsInformation },
        CreatedBy: { type: GraphQLID },
        UpdatedBy: { type: GraphQLID },
      },
      resolve(parent, args) {
        const {
          UserId,
          DonorId,
          FirstName,
          LastName,
          ProfileType,
          ProfileStatus,
          PersonalInfo,
          ConsentForAcornTerms,
          DonationType,
          Identity,
          ProfilePic,
          ProfileMedia,
          DemographicInfo,
          EggInfo,
          EggDonations,
          HealthInfo,
          DonationSettings,
          NotificationSettings,
          CreatedBy,
          UpdatedBy,
        } = args;

        let profile = new Profile({
          UserId: UserId,
          DonorId: DonorId,
          FirstName: FirstName,
          LastName: LastName,
          ProfileType: ProfileType,
          ProfileStatus: ProfileStatus,
          PersonalInfo: PersonalInfo,
          ConsentForAcornTerms: ConsentForAcornTerms,
          DonationType: DonationType,
          Identity: Identity,
          ProfilePic: ProfilePic,
          ProfileMedia: ProfileMedia,
          DemographicInfo: DemographicInfo,
          EggInfo: EggInfo,
          HealthInfo: HealthInfo,
          DonationSettings: DonationSettings,
          NotificationSettings: NotificationSettings,
          CreatedBy: CreatedBy,
          UpdatedBy: UpdatedBy,
        });
        return profile.save();
      },
    },
    ...AddUser,
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
