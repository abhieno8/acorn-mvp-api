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
                              name: "EGGDONOR"
                          },
                          {
                              value: "SPERMDONOR",
                              name: "SPERMDONOR"
                          }
                      ]
                      ,
                      ScreeningType: [
                          {
                              value: "SCREENED",
                              name: "SCREENED"
                          },
                          {
                              value: "UNSCREENED",
                              name: "UNSCREENED"
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
                              name: "PUBLISHED"
                          },
                          {
                              value: "UNPUBLISHED",
                              name: "UNPUBLISHED"
                          },
                          {
                              value: "DELETED",
                              name: "DELETED"
                          }
                      ]
                      ,
                      Religion: [
                          {
                              value: "JEWISH",
                              name: "JEWISH"
                          },
                          {
                              value: "CATHOLIC",
                              name: "CATHOLIC"
                          },
                          {
                              value: "SPRITUAL",
                              name: "Spiritual"
                          },
                          {
                              value: "MUSLIM",
                              name: "MUSLIM"
                          },
                          {
                              value: "HINDU",
                              name: "HINDU"
                          },
                          {
                              value: "CHRISTIAN",
                              name: "CHRISTIAN"
                          },
                          {
                              value: "ATHIEST",
                              name: "ATHIEST"
                          },
                          {
                              value: "OTHER",
                              name: "OTHER"
                          }
                      ]
                      ,
                      Talents: [
                          {
                              value: "SPORTS",
                              name: "SPORTS"
                          },
                          {
                              value: "DANCE",
                              name: "DANCE"
                          },
                          {
                              value: "ART",
                              name: "ART"
                          },
                          {
                              value: "MUSIC",
                              name: "MUSIC"
                          },
                          {
                              value: "CULINARY ARTS",
                              name: "CULINARY ARTS"
                          },
                          {
                              value: "READING/WRITING",
                              name: "READING/WRITING"
                          },
                          {
                              value: "OTHER",
                              name: "OTHER"
                          }
                      ]
                      ,
                      HairStyle: [
                          {
                              value: "BALD",
                              name: "BALD"
                          },
                          {
                              value: "CURLY",
                              name: "CURLY"
                          },
                          {
                              value: "BLONDE",
                              name: "BLONDE"
                          },
                          {
                              value: "BROWN",
                              name: "BROWN"
                          },
                          {
                              value: "WAVY",
                              name: "WAVY"
                          },
                          {
                              value: "STRIGHT",
                              name: "STRIGHT"
                          },
                          {
                              value: "BLACK",
                              name: "BLACK"
                          },
                          {
                              value: "OTHER",
                              name: "OTHER"
                          },
                      ]
                      ,
                      Ancestry: [
                          {
                              value: "EUROPEAN",
                              name: "EUROPEAN"
                          },
                          {
                              value: "LATIN AMERICAN",
                              name: "LATIN AMERICAN"
                          },
                          {
                              value: "AFRICAN",
                              name: "AFRICAN"
                          },
                          {
                              value: "ASIAN",
                              name: "ASIAN"
                          },
                          {
                              value: "CARIBBEAN",
                              name: "CARIBBEAN"
                          },
                          {
                              value: "BRITISH ISLES",
                              name: "BRITISH ISLES"
                          },
                          {
                              value: "MIDDLE EASTERN",
                              name: "MIDDLE EASTERN"
                          },
                          {
                              value: "OTHER",
                              name: "OTHER"
                          }
                      ]
                      ,
                      Race: [
                          {
                              value: "BLACK",
                              name: "BLACK"
                          },
                          {
                              value: "ASIAN",
                              name: "ASIAN"
                          },
                          {
                              value: "CAUCASIAN",
                              name: "CAUCASIAN"
                          },
                          {
                              value: "LATINO",
                              name: "LATINO"
                          },
                          {
                              value: "OTHER",
                              name: "OTHER"
                          }
                      ]
                      ,
                      EyeColor: [
                          {
                              value: "BLUE",
                              name: "BLUE"
                          },
                          {
                              value: "GRAY",
                              name: "GRAY"
                          },
                          {
                              value: "GREEN",
                              name: "GREEN"
                          },
                          {
                              value: "HAZEL",
                              name: "HAZEL"
                          },
                          {
                              value: "BLACK",
                              name: "BLACK"
                          },
                          {
                              value: "BROWN",
                              name: "BROWN"
                          },
                          {
                              value: "OTHER",
                              name: "OTHER"
                          }
                      ]
                      ,
                      LevelOfEducation: [
                          {
                              value: "TRADE SCHOOL",
                              name: "TRADE SCHOOL"
                          },
                          {
                              value: "LATIN AMERICAN",
                              name: "LATIN AMERICAN"
                          },
                          {
                              value: "BACHELORS",
                              name: "BACHELORS"
                          },
                          {
                              value: "MASTERS",
                              name: "MASTERS"
                          },
                          {
                              value: "DOCTORATE",
                              name: "DOCTORATE"
                          },
                          {
                              value: "IVY LEAGUE",
                              name: "IVY LEAGUE"
                          },
                          {
                              value: "JURIS DOCTOR",
                              name: "JURIS DOCTOR"
                          },
                          {
                              value: "MEDICAL DOCTOR",
                              name: "MEDICAL DOCTOR"
                          },
                          {
                              value: "OTHER",
                              name: "OTHER"
                          }
                      ]
                      ,
                      ProfileType: [
                          {
                              value: "PARENT",
                              name: "PARENT"
                          },
                          {
                              value: "DONOR",
                              name: "DONOR"
                          },
                          {
                              value: "CLINIC",
                              name: "CLINIC"
                          },
                          {
                              value: "ADMIN",
                              name: "ADMIN"
                          }
                      ]
                      ,
                      ProfileStatus: [
                          {
                              value: "PUBLISHED",
                              name: "PUBLISHED"
                          },
                          {
                              value: "UNPUBLISHED",
                              name: "UNPUBLISHED"
                          },
                          {
                              value: "DELETED",
                              name: "DELETED"
                          }
                      ]
                      ,
                      Fertility: [
                          {
                              value: "EGG",
                              name: "EGG"
                          },
                          {
                              value: "SPERM",
                              name: "SPERM"
                          }
                      ]
                  }

              }
          }
      }
  }
};