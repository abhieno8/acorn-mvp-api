exports.CommonDropDownListing = function (GraphQLObjectType, GraphQLList, GraphQLString) {

    const KeyValueType = new GraphQLObjectType({
        name: "KeyValueType",
        fields: () => ({
            value: { type: GraphQLString },
            name: { type: GraphQLString },
        })
    });

    const KeyValueTypeReponse = new GraphQLObjectType({
        name: "KeyValueTypeReponse",
        fields: () => ({
            DonorType: { type: new GraphQLList(KeyValueType) },
            ScreeningType: { type: new GraphQLList(KeyValueType) },
            BloodType: { type: new GraphQLList(KeyValueType) },
            EggInfoCategory: { type: new GraphQLList(KeyValueType) },
            Religion: { type: new GraphQLList(KeyValueType) },
            Talents: { type: new GraphQLList(KeyValueType) },
            HairStyle: { type: new GraphQLList(KeyValueType) },
            Ancestry: { type: new GraphQLList(KeyValueType) },
            Race: { type: new GraphQLList(KeyValueType) },
            EyeColor: { type: new GraphQLList(KeyValueType) },
            LevelOfEducation: { type: new GraphQLList(KeyValueType) },
            ProfileType: { type: new GraphQLList(KeyValueType) },
            ProfileStatus: { type: new GraphQLList(KeyValueType) },
            Fertility: { type: new GraphQLList(KeyValueType) }
        })
    });

    const KeyValueTypeReponseListing = new GraphQLObjectType({
        name: "KeyValueTypeReponseListing",
        fields: () => ({
            listing: { type: KeyValueTypeReponse }
        })
    });

    return {
        DropDownListing: {
            type: KeyValueTypeReponseListing,
            resolve() {
                return {
                    listing:
                    {
                        DonorType: [
                            {
                                value: "EGGDONOR",
                                name: "Egg Donor"
                            },
                            {
                                value: "SPERMDONOR",
                                name: "Sperm Donor"
                            }
                        ]
                        ,
                        ScreeningType: [
                            {
                                value: "SCREENED",
                                name: "screened"
                            },
                            {
                                value: "UNSCREENED",
                                name: "UnScreened"
                            }
                        ]
                        ,
                        BloodType: [
                            {
                                value: "O+",
                                name: "O+"
                            },
                            {
                                value: "O-",
                                name: "O-"
                            },
                            {
                                value: "A+",
                                name: "A+"
                            },
                            {
                                value: "A-",
                                name: "A-"
                            },
                            {
                                value: "B+",
                                name: "B+"
                            },
                            {
                                value: "B-",
                                name: "B-"
                            },
                            {
                                value: "AB+",
                                name: "AB+"
                            },
                            {
                                value: "AB",
                                name: "AB-"
                            },
                            {
                                value: "Not sure",
                                name: "Not sure"
                            }
                        ]
                        ,
                        EggInfoCategory: [
                            {
                                value: "PUBLISHED",
                                name: "Published"
                            },
                            {
                                value: "UNPUBLISHED",
                                name: "Unpublished"
                            },
                            {
                                value: "DELETED",
                                name: "Ddeleted"
                            }
                        ]
                        ,
                        Religion: [
                            {
                                value: "JEWISH",
                                name: "Jewish"
                            },
                            {
                                value: "CATHOLIC",
                                name: "Catholic"
                            },
                            {
                                value: "SPRITUAL",
                                name: "Spiritual"
                            },
                            {
                                value: "MUSLIM",
                                name: "Muslim"
                            },
                            {
                                value: "HINDU",
                                name: "Hindu"
                            },
                            {
                                value: "CHRISTIAN",
                                name: "Christian"
                            },
                            {
                                value: "ATHIEST",
                                name: "Athiest"
                            },
                            {
                                value: "OTHER",
                                name: "Other"
                            }
                        ]
                        ,
                        Talents: [
                            {
                                value: "SPORTS",
                                name: "Sports"
                            },
                            {
                                value: "DANCE",
                                name: "Dance"
                            },
                            {
                                value: "ART",
                                name: "Art"
                            },
                            {
                                value: "MUSIC",
                                name: "Music"
                            },
                            {
                                value: "CULINARY ARTS",
                                name: "Culinary Arts"
                            },
                            {
                                value: "READING/WRITING",
                                name: "Reading/Writing"
                            },
                            {
                                value: "OTHER",
                                name: "Other"
                            }
                        ]
                        ,
                        HairStyle: [
                            {
                                value: "BALD",
                                name: "Bald"
                            },
                            {
                                value: "CURLY",
                                name: "Curly"
                            },
                            {
                                value: "BLONDE",
                                name: "Blonde"
                            },
                            {
                                value: "BROWN",
                                name: "Brown"
                            },
                            {
                                value: "WAVY",
                                name: "Wavy"
                            },
                            {
                                value: "STRIGHT",
                                name: "Stright"
                            },
                            {
                                value: "BLACK",
                                name: "Black"
                            },
                            {
                                value: "OTHER",
                                name: "Other"
                            },
                        ]
                        ,
                        Ancestry: [
                            {
                                value: "EUROPEAN",
                                name: "European"
                            },
                            {
                                value: "LATIN AMERICAN",
                                name: "Latin American"
                            },
                            {
                                value: "AFRICAN",
                                name: "African"
                            },
                            {
                                value: "ASIAN",
                                name: "Asian"
                            },
                            {
                                value: "CARIBBEAN",
                                name: "Caribbean"
                            },
                            {
                                value: "BRITISH ISLES",
                                name: "British Isles"
                            },
                            {
                                value: "MIDDLE EASTERN",
                                name: "Middle Eastern"
                            },
                            {
                                value: "OTHER",
                                name: "Other"
                            }
                        ]
                        ,
                        Race: [
                            {
                                value: "BLACK",
                                name: "Black"
                            },
                            {
                                value: "ASIAN",
                                name: "Asian"
                            },
                            {
                                value: "CAUCASIAN",
                                name: "Caucasian"
                            },
                            {
                                value: "LATINO",
                                name: "Latino"
                            },
                            {
                                value: "OTHER",
                                name: "Other"
                            }
                        ]
                        ,
                        EyeColor: [
                            {
                                value: "BLUE",
                                name: "Blue"
                            },
                            {
                                value: "GRAY",
                                name: "Gray"
                            },
                            {
                                value: "GREEN",
                                name: "Green"
                            },
                            {
                                value: "HAZEL",
                                name: "Hazal"
                            },
                            {
                                value: "BLACK",
                                name: "Black"
                            },
                            {
                                value: "BROWN",
                                name: "Borwn"
                            },
                            {
                                value: "OTHER",
                                name: "Other"
                            }
                        ]
                        ,
                        LevelOfEducation: [
                            {
                                value: "TRADE SCHOOL",
                                name: "Trade School"
                            },
                            {
                                value: "LATIN AMERICAN",
                                name: "Latin American"
                            },
                            {
                                value: "BACHELORS",
                                name: "Bachelors"
                            },
                            {
                                value: "MASTERS",
                                name: "Masters"
                            },
                            {
                                value: "DOCTORATE",
                                name: "Doctorate"
                            },
                            {
                                value: "IVY LEAGUE",
                                name: "Ivy League"
                            },
                            {
                                value: "JURIS DOCTOR",
                                name: "Juris Doctor"
                            },
                            {
                                value: "MEDICAL DOCTOR",
                                name: "Medical Doctor"
                            },
                            {
                                value: "OTHER",
                                name: "Other"
                            }
                        ]
                        ,
                        ProfileType: [
                            {
                                value: "PARENT",
                                name: "Parent"
                            },
                            {
                                value: "DONOR",
                                name: "Donor"
                            },
                            {
                                value: "CLINIC",
                                name: "clinic"
                            },
                            {
                                value: "ADMIN",
                                name: "Admin"
                            }
                        ]
                        ,
                        ProfileStatus: [
                            {
                                value: "PUBLISHED",
                                name: "Published"
                            },
                            {
                                value: "UNPUBLISHED",
                                name: "Unpublished"
                            },
                            {
                                value: "DELETED",
                                name: "Deleted"
                            }
                        ]
                        ,
                        Fertility: [
                            {
                                value: "EGG",
                                name: "Egg"
                            },
                            {
                                value: "Sperm",
                                name: "Sperm"
                            }
                        ]
                    }

                }
            }
        }
    }
};