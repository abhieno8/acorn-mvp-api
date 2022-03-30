const graphql = require("graphql");
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

const EggDonation = new GraphQLInputObjectType({
  name: "EggDonation",
  fields: () => ({
    EmbrologyReportUrl: { type: GraphQLString },
    Age: { type: GraphQLString },
    MediaType: { type: GraphQLString },
  }),
});

const EggDonationSchema = new GraphQLObjectType({
  name: "EggDonationSchema",
  fields: () => ({
    EmbrologyReportUrl: { type: GraphQLString },
    Age: { type: GraphQLString },
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
    Disclosure: { type: GraphQLString },
  }),
});

const DonationSettingsInformationSchema = new GraphQLObjectType({
  name: "DonationSettingsSchema",
  fields: () => ({
    FamilyPreference: { type: GraphQLString },
    Payment: { type: GraphQLInt },
    ContactPreference: { type: GraphQLString },
    Disclosure: { type: GraphQLString },
  }),
});

const NotificationSettingsInformation = new GraphQLInputObjectType({
  name: "NotificationSettings",
  fields: () => ({
    FamilyPreference: { type: GraphQLString },
    Payment: { type: GraphQLInt },
    ContactPreference: { type: GraphQLString },
    Disclosure: { type: GraphQLString },
  }),
});

const NotificationSettingsInformationSchema = new GraphQLObjectType({
  name: "NotificationSettingsSchema",
  fields: () => ({
    FamilyPreference: { type: GraphQLString },
    Payment: { type: GraphQLInt },
    ContactPreference: { type: GraphQLString },
    Disclosure: { type: GraphQLString },
  }),
});

const ProfileSchema = new GraphQLObjectType({
  name: "ProfileSchema",
  fields: () => ({
    id: { type: GraphQLID },
    UserId: { type: GraphQLString },
    DonorId: { type: GraphQLString },
    FolderId: { type: GraphQLString },
    Gender: { type: GraphQLString },
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
    EggDonation: { type: new GraphQLList(EggDonationSchema) },
    HealthInfo: { type: HealthInformationSchema },
    DonationSettings: { type: DonationSettingsInformationSchema },
    NotificationSettings: { type: NotificationSettingsInformationSchema },
    CreatedBy: { type: GraphQLID },
    UpdatedBy: { type: GraphQLID },
  }),
});

exports.ProfileQuery = function () {
  return {
    profile: {
      type: ProfileSchema,
      args: { id: { type: GraphQLID }, UserId: { type: GraphQLString } },
      resolve(parent, args) {
        if (args.UserId) {
          return Profile.findOne({ UserId: args.UserId });
        }
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
        UserId: { type: GraphQLString },
        FolderId: { type: GraphQLString },
        Gender: { type: GraphQLString },
        ProfileStatus: { type: GraphQLString },
        PersonalInfo: { type: PersonalInformation },
        ConsentForAcornTerms: { type: GraphQLBoolean },
        DonationType: { type: GraphQLString },
        Identity: { type: new GraphQLList(IdentityInformation) },
        ProfilePic: { type: GraphQLString },
        ProfileMedia: { type: new GraphQLList(MediaInformation) },
        DemographicInfo: { type: DemoGraphicInformation },
        EggInfo: { type: EggInformation },
        EggDonation: { type: new GraphQLList(EggDonation) },
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
            Gender: args.Gender,
            FolderId: args.FolderId,
            ProfileStatus: args.ProfileStatus,
            PersonalInfo: args.PersonalInfo,
            ConsentForAcornTerms: args.ConsentForAcornTerms,
            DonationType: args.DonationType,
            Identity: args.Identity,
            ProfilePic: args.ProfilePic,
            ProfileMedia: args.ProfileMedia,
            DemographicInfo: args.DemographicInfo,
            EggInfo: args.EggInfo,
            EggDonation: args.EggDonation,
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
  };
};

exports.AddProfile = function () {
  return {
    addProfile: {
      type: ProfileSchema,
      args: {
        UserId: { type: GraphQLString },
        DonorId: { type: GraphQLString },
        FolderId: { type: GraphQLString },
        Gender: { type: GraphQLString },
        FirstName: { type: GraphQLString },
        LastName: { type: GraphQLString },
        ProfileType: { type: GraphQLString },
        ProfileStatus: { type: GraphQLString },
        PersonalInfo: { type: PersonalInformation },
        ConsentForAcornTerms: { type: GraphQLBoolean },
        DonationType: { type: GraphQLString },
        Identity: { type: new GraphQLList(IdentityInformation) },
        ProfilePic: { type: GraphQLString },
        profileMedia: { type: new GraphQLList(MediaInformation) },
        DemographicInfo: { type: DemoGraphicInformation },
        EggInfo: { type: EggInformation },
        EggDonation: { type: new GraphQLList(EggDonation) },
        HealthInfo: { type: HealthInformation },
        DonationSettings: { type: DonationSettingsInformation },
        NotificationSettings: { type: NotificationSettingsInformation },
        CreatedBy: { type: GraphQLID },
        UpdatedBy: { type: GraphQLID },
      },
      async resolve(parent, args) {
        const {
          UserId,
          DonorId,
          FolderId,
          Gender,
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
          EggDonation,
          HealthInfo,
          DonationSettings,
          NotificationSettings,
          CreatedBy,
          UpdatedBy,
        } = args;

        if (!UserId || !FolderId) {
          return null;
        }

        const userExist = await User.findById(args.UserId);
        if (!userExist) {
          return null;
        }

        let profile = new Profile({
          UserId: UserId,
          DonorId: userExist._doc.userName,
          FolderId: FolderId,
          Gender: Gender,
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
          EggDonation: EggDonation,
          HealthInfo: HealthInfo,
          DonationSettings: DonationSettings,
          NotificationSettings: NotificationSettings,
          CreatedBy: CreatedBy,
          UpdatedBy: UpdatedBy,
        });
        return profile.save();
      },
    },
  };
};
