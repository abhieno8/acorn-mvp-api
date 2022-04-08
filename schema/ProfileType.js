const graphql = require("graphql");
const { ObjectId } = require("mongodb");
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

const ProfileUserType = new GraphQLObjectType({
  name: "ProfileUserType",
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

const CompletnessSchema = new GraphQLObjectType({
  name: "CompletnessSchema",
  fields: () => ({
    Completed: { type: GraphQLBoolean },
    LastUpdatedOn: { type: GraphQLString },
  }),
});

const ProfileCompletenessInfoSchema = new GraphQLObjectType({
  name: "ProfileCompletenessInfoSchema",
  fields: () => ({
    Application: { type: CompletnessSchema },
    PersonalProfileInformation: { type: CompletnessSchema },
    DemographicInformation: { type: CompletnessSchema },
    SetYourPrice: { type: CompletnessSchema },
    SetYourPrefernce: { type: CompletnessSchema },
    PublishProfile: { type: CompletnessSchema },
    RequiredScreening: { type: CompletnessSchema },
    MedicalInformation: { type: CompletnessSchema },
    CompletionPercentage: { type: GraphQLString },
  }),
});

const PersonalInformation = new GraphQLInputObjectType({
  name: "PersonalInfo",
  fields: () => ({
    DateOfBirth: { type: GraphQLString },
    Phone: { type: GraphQLString },
    Address: { type: GraphQLString },
    ZipCode: { type: GraphQLString },
    City: { type: GraphQLString },
    State: { type: GraphQLString },
    Country: { type: GraphQLString },
    Availability: { type: GraphQLString },
  }),
});

const PersonalInformationSchema = new GraphQLObjectType({
  name: "PersonalInfoSchema",
  fields: () => ({
    DateOfBirth: { type: GraphQLString },
    Phone: { type: GraphQLString },
    Address: { type: GraphQLString },
    ZipCode: { type: GraphQLString },
    City: { type: GraphQLString },
    State: { type: GraphQLString },
    Country: { type: GraphQLString },
    Availability: { type: GraphQLString },
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
    HighestLevelOfEducation: { type: GraphQLString },
    Occupation: { type: GraphQLString },
    IsFedrallyRecognized: { type: GraphQLBoolean },
    IsFelonyConvicted: { type: GraphQLBoolean },
    SpecialTalents: { type: GraphQLString },
    Race: { type: GraphQLString },
    Religion: { type: GraphQLString },
  }),
});

const DemoGraphicInformationSchema = new GraphQLObjectType({
  name: "DemographicInfoSchema",
  fields: () => ({
    NaturalHairColor: { type: GraphQLString },
    EyeColor: { type: GraphQLString },
    Ethnicity: { type: GraphQLString },
    HighestLevelOfEducation: { type: GraphQLString },
    Occupation: { type: GraphQLString },
    IsFedrallyRecognized: { type: GraphQLBoolean },
    IsFelonyConvicted: { type: GraphQLBoolean },
    SpecialTalents: { type: GraphQLString },
    Race: { type: GraphQLString },
    Religion: { type: GraphQLString },
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

const WeightInformation = new GraphQLInputObjectType({
  name: "WeightInfo",
  fields: () => ({
    Measurement: { type: GraphQLInt },
    Units: { type: GraphQLString },
  }),
});

const WeightInformationSchema = new GraphQLObjectType({
  name: "WeightInfoSchema",
  fields: () => ({
    Measurement: { type: GraphQLInt },
    Units: { type: GraphQLString },
  }),
});

const HealthInformation = new GraphQLInputObjectType({
  name: "HealthInfo",
  fields: () => ({
    Weight: { type: WeightInformation },
    Height: { type: GraphQLString },
    BloodType: { type: GraphQLString },
  }),
});

const HealthInformationSchema = new GraphQLObjectType({
  name: "HealthInfoSchema",
  fields: () => ({
    Weight: { type: WeightInformationSchema },
    Height: { type: GraphQLString }, //convert to string
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

const SubscriptionInformation = new GraphQLInputObjectType({
  name: "SubscriptionInfo",
  fields: () => ({
    SubscriptionName: { type: GraphQLString },
    StartDate: { type: GraphQLString },
    EndDate: { type: GraphQLString },
  }),
});

const SubscriptionInformationSchema = new GraphQLObjectType({
  name: "SubscriptionInfoSchema",
  fields: () => ({
    SubscriptionName: { type: GraphQLString },
    StartDate: { type: GraphQLString },
    EndDate: { type: GraphQLString },
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
    ProfileCompletness: { type: ProfileCompletenessInfoSchema },
    ScreeningType: { type: GraphQLString },
    Subscription: { type: SubscriptionInformationSchema },
    DonorType: { type: GraphQLString },
    CreatedBy: { type: GraphQLID },
    UpdatedBy: { type: GraphQLID },
  }),
});

// Profile Completeness checker Helper
const isPersonalInfoComplete = (
  personalInfo,
  argsForUpdate,
  previousCompletnessInfo
) => {
  const { DateOfBirth, Phone, Address, ZipCode, City, State, Country } = {
    ...personalInfo,
  };
  const { PersonalProfileInformation } = { ...previousCompletnessInfo };
  let isCompleted = true;
  const latestUpdatedate = argsForUpdate.PersonalInfo
    ? new Date()
    : PersonalProfileInformation.LastUpdatedOn;
  if (
    !DateOfBirth ||
    !Phone ||
    !Address ||
    !ZipCode ||
    !City ||
    !State ||
    !Country
  ) {
    isCompleted = false;
  }
  return { Completed: isCompleted, LastUpdatedOn: latestUpdatedate };
};

const isDemographicInfoComplete = (
  demographicInfo,
  argsForUpdate,
  previousCompletnessInfo
) => {
  const {
    NaturalHairColor,
    EyeColor,
    Ethnicity,
    HighestLevelOfEducation,
    Occupation,
  } = { ...demographicInfo };
  const { DemographicInformation } = { ...previousCompletnessInfo };
  let isCompleted = true;
  const latestUpdatedate = argsForUpdate.DemographicInfo
    ? new Date()
    : DemographicInformation.LastUpdatedOn;
  if (
    !NaturalHairColor ||
    !EyeColor ||
    !Ethnicity ||
    !HighestLevelOfEducation ||
    !Occupation
  ) {
    isCompleted = false;
  }
  return { Completed: isCompleted, LastUpdatedOn: latestUpdatedate };
};

const isEggInfoComplete = (eggInfo, argsForUpdate, previousCompletnessInfo) => {
  const { PricePerSet, NumberofSets } = { ...eggInfo };
  const { SetYourPrice } = { ...previousCompletnessInfo };
  let isCompleted = true;
  const latestUpdatedate = argsForUpdate.EggInfo
    ? new Date()
    : SetYourPrice.LastUpdatedOn;
  if (!PricePerSet || !NumberofSets) {
    isCompleted = false;
  }
  return { Completed: isCompleted, LastUpdatedOn: latestUpdatedate };
};

const isPreferenceComplete = (
  donationSettings,
  notificationSettings,
  argsForUpdate,
  previousCompletnessInfo
) => {
  let isCompleted = true;
  const { FamilyPreference, Payment, ContactPreference, Disclosure } = {
    ...donationSettings,
  };
  const { ContactMethod, Frequency, Language } = { ...notificationSettings };
  const { SetYourPrefernce } = { ...previousCompletnessInfo };
  const latestUpdatedate =
    argsForUpdate.DonationSettings || argsForUpdate.NotificationSettings
      ? new Date()
      : SetYourPrefernce.LastUpdatedOn;
  if (
    !FamilyPreference ||
    !Payment ||
    !ContactPreference ||
    !Disclosure ||
    !ContactMethod ||
    !Frequency ||
    !Language
  ) {
    isCompleted = false;
  }
  return { Completed: isCompleted, LastUpdatedOn: latestUpdatedate };
};

const isPublishProfileComplete = (
  profileStatus,
  argsForUpdate,
  previousCompletnessInfo
) => {
  const isCompleted = profileStatus === "PUBLISHED";
  const { PublishProfile } = { ...previousCompletnessInfo };
  const latestUpdatedate = argsForUpdate.ProfileStatus
    ? new Date()
    : PublishProfile.LastUpdatedOn;
  return { Completed: isCompleted, LastUpdatedOn: latestUpdatedate };
};

const checkWeightCompleteness = (weight) => {
  if (!weight || !weight._doc) {
    return false;
  }
  const { Measurement, Units } = { ...weight._doc };
  if (Measurement && Units) {
    return true;
  } else {
    return false;
  }
};

const isMedicalInformationComplete = (
  healthInfoObject,
  argsForUpdate,
  previousCompletnessInfo
) => {
  const { Weight, Height, BloodType } = {
    ...healthInfoObject,
  };
  const { MedicalInformation } = { ...previousCompletnessInfo };
  let isCompleted = true;
  if (
    !Height ||
    !checkWeightCompleteness(Weight) ||
    !BloodType
  ) {
    isCompleted = false;
  }
  if (!MedicalInformation) {
    return { Completed: isCompleted, LastUpdatedOn: new Date() };
  }
  const latestUpdatedate = argsForUpdate.HealthInfo
    ? new Date()
    : MedicalInformation.LastUpdatedOn;

  return { Completed: isCompleted, LastUpdatedOn: latestUpdatedate };
};

const calculateOverallPercentage = (
  ApplicationCmp,
  PersonalProfileInformationCmp,
  DemographicInformationCmp,
  SetYourPriceCmp,
  SetYourPrefernceCmp,
  PublishProfileCmp,
  MedicalInformationCmp,
  RequiredScreeningCmp
) => {
  let percentage = 0;
  if (ApplicationCmp.Completed) {
    percentage += 10;
  }
  if (SetYourPriceCmp.Completed) {
    percentage += 10;
  }
  if (SetYourPrefernceCmp.Completed) {
    percentage += 10;
  }
  if (PersonalProfileInformationCmp.Completed) {
    percentage += 20;
  }
  if (DemographicInformationCmp.Completed) {
    percentage += 20;
  }
  if (MedicalInformationCmp.Completed) {
    percentage += 20;
  }
  if (PublishProfileCmp.Completed) {
    percentage += 5;
  }
  if (RequiredScreeningCmp.Completed) {
    percentage += 5;
  }
  return percentage.toString();
};

const CalculateProfileCompletness = (profileDoc, thisArgs) => {
  const {
    PersonalInfo,
    DemographicInfo,
    EggInfo,
    NotificationSettings,
    DonationSettings,
    ProfileStatus,
    ProfileCompletness,
    HealthInfo,
  } = { ...profileDoc };

  const ApplicationCmp = ProfileCompletness.Application;
  const PersonalProfileInformationCmp = isPersonalInfoComplete(
    PersonalInfo,
    thisArgs,
    ProfileCompletness
  );
  const DemographicInformationCmp = isDemographicInfoComplete(
    DemographicInfo,
    thisArgs,
    ProfileCompletness
  );
  const SetYourPriceCmp = isEggInfoComplete(
    EggInfo,
    thisArgs,
    ProfileCompletness
  );
  const SetYourPrefernceCmp = isPreferenceComplete(
    NotificationSettings,
    DonationSettings,
    thisArgs,
    ProfileCompletness
  );
  const PublishProfileCmp = isPublishProfileComplete(
    ProfileStatus,
    thisArgs,
    ProfileCompletness
  );
  const MedicalInformationCmp = isMedicalInformationComplete(
    HealthInfo,
    thisArgs,
    ProfileCompletness
  );
  const RequiredScreeningCmp = ProfileCompletness.RequiredScreening;
  const CompletionPercentageCmp = calculateOverallPercentage(
    ApplicationCmp,
    PersonalProfileInformationCmp,
    DemographicInformationCmp,
    SetYourPriceCmp,
    SetYourPrefernceCmp,
    PublishProfileCmp,
    MedicalInformationCmp,
    RequiredScreeningCmp
  );

  return {
    Application: ApplicationCmp,
    PersonalProfileInformation: PersonalProfileInformationCmp,
    DemographicInformation: DemographicInformationCmp,
    SetYourPrice: SetYourPriceCmp,
    SetYourPrefernce: SetYourPrefernceCmp,
    PublishProfile: PublishProfileCmp,
    MedicalInformation: MedicalInformationCmp,
    RequiredScreening: RequiredScreeningCmp,
    CompletionPercentage: CompletionPercentageCmp,
  };
};

const FilteredProfileData = new GraphQLObjectType({
  name: "FilteredProfileData",
  fields: () => ({
    Offset: { type: GraphQLInt },
    Limit: { type: GraphQLInt },
    Total: { type: GraphQLInt },
    ProfileKeyWord: { type: GraphQLString },
    Order: { type: GraphQLInt },
    ProfileList: { type: new GraphQLList(ProfileSchema) },
  }),
});

const PriceRangeType = new GraphQLInputObjectType({
  name: "PriceRangeType",
  fields: () => ({
    MaxPrice: { type: GraphQLInt },
    MinPrice: { type: GraphQLInt },
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
        ScreeningType: { type: GraphQLString },
        Subscription: { type: SubscriptionInformation },
      },

      async resolve(parent, args) {
        const firstPhaseUpdate = await Profile.findByIdAndUpdate(
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
            ScreeningType: args.ScreeningType,
            Subscription: args.Subscription,
            UpdatedBy: new ObjectId(args.UserId),
            updatedAt: new Date(),
          },
          {
            new: true,
          }
        );

        if (!args.UserId) {
          throw new Error(`UserId is a required field for update`);
        }
        const userExist = await User.findById(args.UserId);
        const profileExistWithUser = await Profile.findOne({
          UserId: args.UserId,
        });
        if (!userExist) {
          throw new Error(`User doesn't exist with user id: ${args.UserId}`);
        }
        if (!profileExistWithUser) {
          throw new Error(
            `No profile exists with this user id: ${args.UserId}`
          );
        }

        if (firstPhaseUpdate) {
          const ProfileCompletnessStatus = CalculateProfileCompletness(
            firstPhaseUpdate._doc,
            args
          );
          return Profile.findByIdAndUpdate(
            args.id,
            {
              ProfileCompletness: ProfileCompletnessStatus,
              UpdatedBy: args.UserId,
            },
            {
              new: true,
            }
          );
        }
      },
    },
    removeProfile: {
      type: ProfileSchema,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Profile.findByIdAndRemove(args.id);
      },
    },
    searchProfiles: {
      type: FilteredProfileData,
      args: {
        // To be decided
        FertilityNeeds: { type: GraphQLString },
        ScreeningType: { type: GraphQLString }, // screened/unscreened
        DonorType: { type: GraphQLString },
        Availabilty: { type: GraphQLString },
        Race: { type: GraphQLString },
        Relegion: { type: GraphQLString },

        NaturalHair: { type: GraphQLString },
        // clear
        QuantityOfNeeds: { type: GraphQLString },
        LevelOfEducation: { type: GraphQLString },
        EyeColor: { type: GraphQLString },
        Ethinicity: { type: GraphQLString },
        SpecialTalents: { type: GraphQLString },
        PriceRange: { type: PriceRangeType },
        ProfileKeyWord: { type: GraphQLString },
        Offset: { type: GraphQLInt },
        Limit: { type: GraphQLInt },
        Order: { type: GraphQLInt },
        // For donors ProfileType is "Donor"
        ProfileType: { type: GraphQLString },
      },
      async resolve(parent, args) {
        if (!args.ProfileType) {
          throw new Error(
            `ProfileType is a required field , choose from ["Parent","Donor","Clinic","Admin"]`
          );
        }
        let filteredList = [];
        let search = args.ProfileKeyWord ? args.ProfileKeyWord : "";
        let order = args.Order ? args.Order : -1;
        let offset = args.Offset ? args.Offset : 0;
        if (offset < 0) {
          offset = 0;
        }
        let limit = args.Limit ? args.Limit : 6;
        if (limit < 0) {
          limit = 6;
        }

        // strict Filtering
        const intersectedConditions = (inputArgs) => {
          let conditionList = [];
          Object.keys(inputArgs).forEach((inputArgKey) => {
            if (inputArgs[`${inputArgKey}`]) {
              switch (inputArgKey) {
                case "ProfileType":
                  conditionList.push({
                    ProfileType: inputArgs.ProfileType,
                  });
                  break;
                case "PriceRange":

                  inputArgs.PriceRange.MaxPrice != 0 || inputArgs.PriceRange.MinPrice != 0 ?
                    conditionList.push({
                      "EggInfo.PricePerSet": {
                        $gte: parseInt(inputArgs.PriceRange.MinPrice),
                        $lte: parseInt(inputArgs.PriceRange.MaxPrice),
                      },
                    })
                    : ""
                  break;

                case "DonorType":
                  conditionList.push({
                    DonorType: inputArgs.DonorType,
                  });
                  break;
                case "SpecialTalents":
                  conditionList.push({
                    "DemographicInfo.SpecialTalents": {
                      $regex: ".*" + inputArgs.SpecialTalents + ".*",
                    },
                  });
                  break;

                case "ScreeningType":
                  conditionList.push({
                    ScreeningType: inputArgs.ScreeningType,
                  });
                  break;
                case "QuantityOfNeeds":
                  conditionList.push({
                    "EggInfo.NumberofSets": {
                      $gte: parseInt(inputArgs.QuantityOfNeeds),
                    },
                  });
                  break;
                case "LevelOfEducation":
                  conditionList.push({
                    "DemographicInfo.HighestLevelOfEducation": {
                      $regex: ".*" + inputArgs.LevelOfEducation + ".*",
                    },
                  });
                  break;
                case "EyeColor":
                  conditionList.push({
                    "DemographicInfo.EyeColor": {
                      $regex: ".*" + inputArgs.EyeColor + ".*",
                    },
                  });
                  break;
                case "Ethinicity":
                  conditionList.push({
                    "DemographicInfo.Ethnicity": {
                      $regex: ".*" + inputArgs.Ethinicity + ".*",
                    },
                  });
                  break;
                case "Race":
                  conditionList.push({
                    "DemographicInfo.Race": {
                      $regex: ".*" + inputArgs.Race + ".*",
                    },
                  });
                  break;
                case "Relegion":
                  conditionList.push({
                    "DemographicInfo.Religion": {
                      $regex: ".*" + inputArgs.Relegion + ".*",
                    },
                  });
                case "NaturalHairColor":
                  conditionList.push({
                    "DemographicInfo.NaturalHairColor": {
                      $regex: ".*" + inputArgs.NaturalHair + ".*",
                    },
                  });
                case "FertilityNeeds":
                  conditionList.push({
                    Gender: {
                      $regex:
                        ".*" + inputArgs.FertilityNeeds === "EGG"
                          ? "Female"
                          : "Male" + ".*",
                    },
                  });
                  break;
                default:
                  break;
              }
            }
          });
          return conditionList;
        };
        // loose filtering
        const unionConditions = () => {
          let conditionList = [];
          if (search) {
            return [
              { FirstName: { $regex: ".*" + args.search + ".*" } },
              { LastName: { $regex: ".*" + args.search + ".*" } },
              {
                "DemographicInfo.SpecialTalents": {
                  $regex: ".*" + args.search + ".*",
                },
              },
              {
                "DemographicInfo.Occupation": {
                  $regex: ".*" + args.search + ".*",
                },
              },
              {
                "DemographicInfo.NaturalHairColor": {
                  $regex: ".*" + args.search + ".*",
                },
              },
              {
                "DemographicInfo.Address": {
                  $regex: ".*" + args.search + ".*",
                },
              },
              {
                "DemographicInfo.ZipCode": {
                  $regex: ".*" + args.search + ".*",
                },
              },
              {
                "DemographicInfo.City": { $regex: ".*" + args.search + ".*" },
              },
              {
                "DemographicInfo.State": {
                  $regex: ".*" + args.search + ".*",
                },
              },
              {
                "DemographicInfo.Country": {
                  $regex: ".*" + args.search + ".*",
                },
              },
              {
                "DemographicInfo.DonationType": {
                  $regex: ".*" + args.search + ".*",
                },
              },
              {
                "DemographicInfo.DonorId": {
                  $regex: ".*" + args.search + ".*",
                },
              },
            ];
          }
          return conditionList;
        };
        const intersectedFilters = intersectedConditions(args);
        const unionFilters = unionConditions(args);


        let total_records = 0;
        if (intersectedFilters.length >= 1) {
          total_records = await Profile.find({
            ProfileType: args.ProfileType,
            $and: [
              {
                $and: intersectedFilters
              },
            ]
          });

          //console.log("with " + total_records.length);
        }
        else {
          total_records = await Profile.find({
            ProfileType: args.ProfileType
          });

          //console.log("Without " + total_records.length);
        }

        total_records = total_records.length;


        if (search) {
          filteredList = await Profile.find({
            $and: [
              {
                $or: unionFilters,
              },
              {
                $and: intersectedFilters,
              },
            ],
          })
            .sort("-CreatedAt")
            .skip(offset)
            .limit(limit);
        } else {
          filteredList = await Profile.find({
            $and: [
              {
                $and: intersectedFilters,
              },
            ],
          })
            .sort("-CreatedAt")
            .skip(offset)
            .limit(limit);
        }
        return {
          Offset: offset,
          Limit: limit,
          Total: total_records,
          ProfileKeyWord: search,
          Order: order,
          ProfileList: filteredList,
        };
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
        ScreeningType: { type: GraphQLString },
        DonorType: { type: GraphQLString },
        CreatedBy: { type: GraphQLID },
        UpdatedBy: { type: GraphQLID },
      },
      async resolve(parent, args) {
        const {
          UserId,
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
          DonorType,
        } = args;

        if (!UserId || !FolderId || !ProfilePic || !ProfileType) {
          throw new Error(
            "UserId, FolderId,ProfileType, or ProfilePic are missing"
          );
        }

        if (ProfileType === "DONOR") {
          if (!DonorType) {
            throw new Error("DonorType field is required for Donor Profile");
          }
        }

        const userExist = await User.findById(args.UserId);
        const profileExistWithUser = await Profile.findOne({
          UserId: args.UserId,
        });
        if (!userExist) {
          throw new Error(`User doesn't exist with user id: ${args.UserId}`);
        }
        if (profileExistWithUser) {
          throw new Error(`Profile already exists`);
        }

        const ProfileCompletnessStatus = {
          Application: { Completed: true, LastUpdatedOn: new Date() },
          PersonalProfileInformation: {
            Completed: false,
            LastUpdatedOn: new Date(),
          },
          DemographicInformation: {
            Completed: false,
            LastUpdatedOn: new Date(),
          },
          SetYourPrice: { Completed: false, LastUpdatedOn: new Date() },
          SetYourPrefernce: { Completed: false, LastUpdatedOn: new Date() },
          PublishProfile: { Completed: false, LastUpdatedOn: new Date() },
          MedicalInformation: { Completed: false, LastUpdatedOn: new Date() },
          RequiredScreening: { Completed: false, LastUpdatedOn: new Date() },
          CompletionPercentage: "10",
        };
        let profile = new Profile({
          UserId: new ObjectId(args.UserId),
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
          CreatedBy: new ObjectId(args.UserId),
          UpdatedBy: new ObjectId(args.UserId),
          ProfileCompletness: ProfileCompletnessStatus,
          ProfileStatus: "UNPUBLISHED",
          ScreeningType: "UNSCREENED",
          DonorType: DonorType,
        });
        return profile.save();
      },
    },
  };
};
