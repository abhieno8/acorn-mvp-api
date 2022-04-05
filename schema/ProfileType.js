const graphql = require("graphql");
const Profile = require("../models/profile");
const User = require("../models/user");
const Aws = require("aws-sdk");

// const s3 = new Aws.S3({
//   accessKeyId: "AKIA2ZH2PYMSROXVVEHE", // accessKeyId that is stored in .env file
//   secretAccessKey: "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", // secretAccessKey is also store in .env file
// });

// const S3_BUCKET_NAME = "acorn-files-test";

// To Update the permissions.
function paramCreator(folderId, ImageUrl, subFolerName) {
  // retrieve image name from imageUrl
  const fileName = ImageUrl.slice(ImageUrl.lastIndexOf("/") + 1);
  return {
    Bucket: S3_BUCKET_NAME,
    Key: `${folderId}/${subFolerName}/${fileName}`,
    ACL: "public-read-write",
    ContentType: "application/x-www-form-urlencoded",
  };
}
// update s3 object
function updateS3Object(folderId, ImageUrl, subFolerName) {
  return new Promise(function (resolve, reject) {
    const params = paramCreator(folderId, ImageUrl, subFolerName);
    console.log(params);
    s3.putObject(params, (err, data) => {
      err ? reject(err) : resolve(data);
    });
  });
}

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
    ProfileCompletness: { type: ProfileCompletenessInfoSchema },
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
  const isCompleted = profileStatus === "Published";
  const { PublishProfile } = { ...previousCompletnessInfo };
  const latestUpdatedate = argsForUpdate.ProfileStatus
    ? new Date()
    : PublishProfile.LastUpdatedOn;
  return { Completed: isCompleted, LastUpdatedOn: latestUpdatedate };
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
  } = { ...profileDoc };

  return {
    Application: ProfileCompletness.Application,
    PersonalProfileInformation: isPersonalInfoComplete(
      PersonalInfo,
      thisArgs,
      ProfileCompletness
    ),
    DemographicInformation: isDemographicInfoComplete(
      DemographicInfo,
      thisArgs,
      ProfileCompletness
    ),
    SetYourPrice: isEggInfoComplete(EggInfo, thisArgs, ProfileCompletness),
    SetYourPrefernce: isPreferenceComplete(
      NotificationSettings,
      DonationSettings,
      thisArgs,
      ProfileCompletness
    ),
    PublishProfile: isPublishProfileComplete(
      ProfileStatus,
      thisArgs,
      ProfileCompletness
    ),
    RequiredScreening: ProfileCompletness.RequiredScreening,
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
    MaxPrice: { type: GraphQLString },
    MinPrice: { type: GraphQLString },
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
            UpdatedBy: args.UserId,
            updatedAt: new Date(),
          },
          {
            new: true,
          }
        );
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

        // clear
        QuantityOfNeeds: { type: GraphQLString },
        LevelOfEducation: { type: GraphQLString },
        EyeColor: { type: GraphQLString },
        Ethinicity: { type: GraphQLString },
        SpecialTalents: { type: GraphQLString },
        priceRange: { type: PriceRangeType },
        ProfileKeyWord: { type: GraphQLString },
        Offset: { type: GraphQLInt },
        Limit: { type: GraphQLInt },
        Order: { type: GraphQLInt },
        // For donors ProfileType is "Donor"
        ProfileType: { type: GraphQLString },
      },
      async resolve(parent, args) {
        if(!args.ProfileType) {
          throw new Error(`ProfileType is a required field , choose from ["Parent","Donor","Clinic","Admin"]`);
        }
        let filteredList = [];
        let search = args.ProfileKeyWord ? args.ProfileKeyWord : "";
        let order = args.Order ? args.Order : -1;
        let offset = args.Offset ? args.Offset : 0;
        if (offset < 0) {
          offset = 0;
        }
        let limit = args.Limit ? args.Limit : 25;
        if (limit < 0) {
          limit = 25;
        }

        let total_records = await Profile.find({
          ProfileType: args.ProfileType,
        });
        total_records = total_records.length;
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

        if (!UserId || !FolderId || !ProfilePic || !ProfileType) {
          throw new Error("UserId, FolderId,ProfileType, or ProfilePic are missing");
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
          RequiredScreening: { Completed: false, LastUpdatedOn: new Date() },
        };
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
          CreatedBy: UserId,
          UpdatedBy: UserId,
          ProfileCompletness: ProfileCompletnessStatus,
          ProfileStatus: "UnPublished",
        });
        return profile.save();
      },
    },
  };
};
