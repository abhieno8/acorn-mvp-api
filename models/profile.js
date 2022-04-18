const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProfileMediaSchema = new Schema({
  Url: { type: String },
  MediaType: {
    type: String,
    enum: ["VIDEO", "IMAGE", "DOCUMENTS"],
    default: "IMAGE",
  },
});

const SubscriptionSchema = new Schema({
  SubscriptionName: { type: String, enum: ["PREMIUM", "NONPREMIUM"] },
  StartDate: { type: Date },
  EndDate: { type: Date },
});

const CompletnessSchema = new Schema({
  Completed: { type: Boolean },
  LastUpdatedOn: { type: Date },
});

const EggDonationSchema = new Schema({
  EmbrologyReportUrl: { type: String },
  Age: { type: String },
  MediaType: {
    type: String,
    enum: ["VIDEO", "IMAGE", "DOCUMENTS"],
    default: "IMAGE",
  },
});

const WeightSchema = new Schema({
  Measurement: { type: Number },
  Units: {
    type: String,
    required: true,
    enum: ["LBS", "KG"],
  },
});

// const HeightSchema = new Schema({
//   Inches: { type: Number },
//   Feet: { type: Number },
//   Cms: { type: Number },
//   Units: {
//     type: String,
//     required: true,
//     enum: ["FI", "CM"],
//   },
// });

const IdentitySchema = new Schema({
  IdentityId: { type: String, max: 100 },
  IdentityIdType: { type: String, max: 100 },
  IdentityVerifiedDate: { type: Date, default: new Date() },
  IdentityDocumentUrl: { type: String },
  MimeType: { type: String },
});

const ProfileSchema = new Schema({
  UserId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
  DonorId: { type: String },
  FolderId: { type: String },
  FirstName: { type: String, required: true },
  LastName: { type: String, required: true },
  ProfileType: {
    type: String,
    enum: ["PARENT", "DONOR", "CLINIC", "ADMIN"],
    default: "PARENT",
  },

  // PublishProfile  // ProfileCompleteness
  ProfileStatus: {
    type: String,
    enum: ["PUBLISHED", "UNPUBLISHED", "DELETED"],
    default: "UNPUBLISHED",
  },
  //PersonalProfileInformation // ProfileCompleteness
  PersonalInfo: {
    DateOfBirth: { type: String }, // a potential candidate for age
    Phone: { type: String },
    Address: { type: String },
    ZipCode: { type: String },
    City: { type: String },
    State: { type: String },
    Country: { type: String },
    Availability: { type: String },
    // Add the availability
  },
  ConsentForAcornTerms: { type: Boolean },
  DonationType: { type: String, max: 10 },
  Identity: [IdentitySchema],
  ProfilePic: { type: String, max: 100 }, // url
  ProfileMedia: [ProfileMediaSchema],
  // DemographicInformation // ProfileCompleteness
  DemographicInfo: {
    NaturalHairColor: {
      type: String, enum: [
        "BROWN", "BLACK", "WHITE",
        "SANDY", "GRAY",
        "RED", "AUBURN", "BLOND",
        "BLUE", "GREEN", "ORANGE", "PINK"
        , "PURPLE", "OTHER"
      ]
    },
    EyeColor: {
      type: String,
      enum: ["AMBER", "BLUE", "BROWN", "GREEN", "HAZEL", "GRAY", "BLACK", "OTHER"],
    },
    Ethnicity: {
      type: String,
      enum: [
        "EUROPEAN",
        "LATIN AMERICAN",
        "ASIAN",
        "CARIBBEAN",
        "AFRICAN",
        "MIDDLE EASTERN",
        "BRITISH ISLES",
        "OTHER"
      ],
    },
    HighestLevelOfEducation: {
      type: String,
      enum: [
        "TRADE SCHOOL",
        "ASSOCIATES",
        "BACHELORS",
        "MASTERS",
        "DOCTORATE",
        "IVY LEAGUE",
        "JURIS DOCTOR",
        "MEDICAL DOCTOR",
        "OTHER"
      ],
    },
    Occupation: { type: String },
    IsFedrallyRecognized: { type: Boolean },
    IsFelonyConvicted: { type: Boolean },
    SpecialTalents: {
      type: String, enum: [
        "SPORTS", "DANCE", "ART", "MUSIC", "CULINARY ARTS", "READING/WRITING", "OTHER"
      ]
    },
    Race: { type: String, enum: ["BLACK", "ASIAN", "CAUCASIAN", "LATINO", "OTHER"] },
    Religion: {
      type: String,
      enum: ["CHRISTIAN", "SPRITUAL", "CATHOLIC", "ATHIEST", "JEWISH", "MUSLIM", "HINDU", "OTHER"],
    },
  },
  // SetYourPrice  // ProfileCompleteness
  EggInfo: {
    PricePerSet: { type: Number },
    NumberofSets: { type: Number },
    // Need to be decided
    Category: {
      type: String,
      enum: ["PUBLISHED", "UNPUBLISHED", "DELETED"],
      default: "UNPUBLISHED",
    },
  },
  EggDonation: [EggDonationSchema],
  Gender: { type: String },
  HealthInfo: {
    Weight: WeightSchema,
    Height: { type: String },
    BloodType: {
      type: String,
      enum: ["O+", "O-", "A+", "A-", "B+", "B-", "AB+", "AB-", "Not sure"],
    },
    TakingMedicationCurrently: { type: Boolean },
    CurrentMedicationDetail: { type: String }
  },
  // SetYourPrefernce // ProfileCompleteness
  DonationSettings: {
    FamilyPreference: { type: String },
    Payment: { type: Number },
    ContactPreference: { type: String },
    Disclosure: { type: String },
  },
  // SetYourPrefernce // ProfileCompleteness
  NotificationSettings: {
    ContactMethod: { type: String },
    Frequency: { type: String },
    Language: { type: String },
  },
  ProfileCompletness: {
    Application: CompletnessSchema,
    PersonalProfileInformation: CompletnessSchema,
    DemographicInformation: CompletnessSchema,
    SetYourPrice: CompletnessSchema,
    SetYourPrefernce: CompletnessSchema,
    PublishProfile: CompletnessSchema,
    RequiredScreening: CompletnessSchema,
    MedicalInformation: CompletnessSchema,
    CompletionPercentage: { type: String },
  },
  ScreeningType: {
    type: String,
    enum: ["SCREENED", "UNSCREENED"],
    default: "UNSCREENED",
  },
  DonorType: { type: String, enum: ["EGGDONOR", "SPERMDONOR"] },
  CreatedAt: { type: Date, default: new Date() },
  updatedAt: { type: Date, default: new Date() },

  CreatedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  UpdatedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  Subscription: { type: SubscriptionSchema },
});

module.exports = mongoose.model("Profile", ProfileSchema);
