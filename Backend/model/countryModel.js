const mongoose = require("mongoose");

const countrySchema = new mongoose.Schema(
    {
        name:{
            type:String,
            unique:true
        },
        code:{
            type:String,
            unique: true
        }
    },
    { timestamps: true }
);

const CountryModel = new mongoose.model("CountryModel", countrySchema);

module.exports = CountryModel;
