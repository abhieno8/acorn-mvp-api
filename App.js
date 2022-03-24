const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const Schema = require("./schema/schema");
const mongoose = require("mongoose")
const cors = require('cors')

const app = express();
app.use(cors());

mongoose.connect("mongodb+srv://abhi:abhinav@cluster0.vnmw4.mongodb.net/acorn-mvp1?retryWrites=true&w=majority", {
})
.then(res => {
    console.log("Connected to DB=>>");
})
.catch(err => {
    console.log("errrr=>", err);
})

app.use(
  "/graphql",
  graphqlHTTP({
    schema: Schema,
    graphiql: true,
  })
);

app.listen(process.env.PORT || 4000,'0.0.0.0', () => {
  console.log("now listening on port 4000");
});
