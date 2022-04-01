const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProfileMediaSchema = new Schema({
  Url: { type: String },
  MediaType: {
    type: String,
    enum: ["video", "image", "documents"],
    default: "image",
  },
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
    enum: ["video", "image", "documents"],
    default: "image",
  },
});

const IdentitySchema = new Schema({
  IdentityId: { type: String, max: 100 },
  IdentityIdType: { type: String, max: 100 },
  IdentityVerifiedDate: { type: Date, default: new Date() },
  IdentityDocumentUrl: { type: String },
  MimeType: { type: String },
});

const ProfileSchema = new Schema({
  UserId: { type: String },
  DonorId: { type: String },
  FolderId: { type: String },
  FirstName: { type: String, required: true },
  LastName: { type: String, required: true },
  ProfileType: {
    type: String,
    enum: ["Parent", "Donor", "Clinic", "Admin"],
    default: "Parent",
  },

  // PublishProfile  // ProfileCompleteness
  ProfileStatus: {
    type: String,
    enum: ["Published", "UnPublished", "Deleted"],
    default: "UnPublished",
  },
  //PersonalProfileInformation // ProfileCompleteness
  PersonalInfo: {
    DateOfBirth: { type: Date },
    Phone: { type: String },
    Address: { type: String },
    ZipCode: { type: String },
    City: { type: String },
    State: { type: String },
    Country: { type: String },
  },
  ConsentForAcornTerms: { type: Boolean },
  DonationType: { type: String, max: 10, required: true },
  Identity: [IdentitySchema],
  ProfilePic: { type: String, max: 100 }, // url
  ProfileMedia: [ProfileMediaSchema],
  // DemographicInformation // ProfileCompleteness
  DemographicInfo: {
    NaturalHairColor: { type: String },
    EyeColor: { type: String },
    Ethnicity: { type: String },
    HighestLevelOfEducation: { type: String },
    Occupation: { type: String },
    IsFedrallyRecognized: { type: Boolean },
    IsFelonyConvicted: { type: Boolean },
    SpecialTalents: { type: String },
  },
  // SetYourPrice  // ProfileCompleteness
  EggInfo: {
    PricePerSet: { type: Number },
    NumberofSets: { type: Number },
    // Need to be decided
    Category: {
      type: String,
      enum: ["Published", "UnPublished", "Deleted"],
      default: "UnPublished",
    },
  },
  EggDonation: [EggDonationSchema],
  Gender: { type: String },
  HealthInfo: {
    Weight: { type: Number },
    Height: { type: Number },
    BloodType: { type: String },
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
  },
  CreatedAt: { type: Date, default: new Date() },
  updatedAt: { type: Date, default: new Date() },

  CreatedBy: { type: String },
  UpdatedBy: { type: String },
});

module.exports = mongoose.model("Profile", ProfileSchema);
