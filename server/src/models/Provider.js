const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET || "Terrible_Jwt_Secret";

const Schema = mongoose.Schema;

const providerSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  license: {
    type: String,
    required: true
  },
  token: String,
  tokens: [String]
});

providerSchema.pre("save", async function(next) {
  try {
    const user = this;

    if (!user.isModified("password")) return next();

    const hash = await bcrypt.hash(user.password, 10);

    user.password = hash;

    next();
    
  } catch (err) {
    console.log(err);
  }
});
s
}

providerSchema.methods.hasValidToken = function() {
  return !!this.token 
    ? jwt.verify(this.token, JWT_SECRET)
    : false;
}

providerSchema.methods.updateToken = async function() {
    if (this.token) this.tokens.push(this.token);
   
    this.token = await jwt.sign({_id: this._id}, JWT_SECRET);
}

const Provider =  mongoose.model("Provider", providerSchema);

module.exports = Provider;
