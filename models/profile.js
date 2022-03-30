const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProfileMediaSchema = new Schema({
    Url: { type: String },
    MediaType: {
        type: String,
        enum: ['video','image','documents'],
        default: 'image'
    }
})

const EggDonationSchema = new Schema({
    EmbrologyReportUrl: { type: String },
    Age:{type:String},
    MediaType: {
        type: String,
        enum: ['video','image','documents'],
        default: 'image'
    }
})



const IdentitySchema = new Schema({ 
    IdentityId: { type: String, max: 100 },
	IdentityIdType: { type: String, max: 100 },
	IdentityVerifiedDate: { type: Date, default: new Date() },
	IdentityDocumentUrl: { type: String },
	MimeType: { type: String },
 })

const ProfileSchema = new Schema({
    UserId: { type: String },
    DonorId: { type: String },
    FolderId: { type: String },
    FirstName: { type: String, required: true },
    LastName: { type: String, required: true },
    ProfileType: { 
        type: String,
        enum: ['Parent', 'Donor', 'Clinic', 'Admin'],
        default: 'Parent'
     },
    ProfileStatus: { 
        type: String,
        enum: ['Published', 'UnPublished', 'Deleted'],
        default: 'UnPublished'
     },
    PersonalInfo: { 
        DateOfBirth: { type: Date },        
        Phone: { type: String },
        Address: { type: String },
        ZipCode: { type: Number },
        City: { type: String },
        State: { type: String },
        Country: { type: String }
     },
    ConsentForAcornTerms: { type: Boolean },
    DonationType: { type: String, max: 10, required: true },
    Identity: [IdentitySchema],
    ProfilePic: { type: String, max: 100 }, // url
    ProfileMedia: [ProfileMediaSchema],
    DemographicInfo: { 
        NaturalHairColor: { type:String },
        EyeColor: { type: String },
        Ethnicity: { type: String },
        HighestLevelOfEducation: { type: String },
        Occupation: { type: String }
     },
    EggInfo: { 
        PricePerSet: { type: Number },
        NumberofSets: { type: Number },
        Category: { 
            type: String, 
            enum: ['Published', 'UnPublished', 'Deleted'],
            default: 'UnPublished'
         },
     },
    EggDonation: [EggDonationSchema],
    Gender: { type: String },
    HealthInfo: { 
        Weight: { type: Number },
        Height: { type: Number },
        BloodType: { type: String },
     },
    DonationSettings: { 
        FamilyPreference: { type: String },
        Payment: { type: Number },
        ContactPreference: { type: String },
        Disclosure: { type: String }
     },
    NotificationSettings: { 
        ContactMethod: { type: String },
        Frequency: { type: String },
        Language: { type: String },
     },
    CreatedAt: { type: Date, default: new Date() },
    updatedAt: { type: Date, default: new Date() },
    CreatedBy: { type: Number },
    UpdatedBy: { type: Number },

});

module.exports = mongoose.model("Profile", ProfileSchema)
