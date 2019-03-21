const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET || "Terrible_Jwt_Secret";

const Schema = mongoose.Schema;

const clientSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  /**
   * Personal Data will go here.
   * Registration will occur before the database is updated with personal info.
   * We do not want to require the client to finish answering
   * all personal questions before their account is created.
   */
  token: String,
  tokens: [String]
});

clientSchema.pre("save", async function(next) {
  try {
    const client = this;

    if (!client.isModified("password")) return next();

    const hash = await bcrypt.hash(client.password, 10);

    client.password = hash;

    next();
    
  } catch (err) {
    console.log(err);
  }
});

clientSchema.methods.validatePassword = function(password) {
  console.log(password)
  console.log(this.password)
  return bcrypt.compare(password, this.password);
}

clientSchema.methods.hasValidToken = function() {
  return !!this.token 
    ? jwt.verify(this.token, JWT_SECRET)
    : false;
}

clientSchema.methods.updateToken = async function() {
    if (this.token) this.tokens.push(this.token);
   
    this.token = await jwt.sign({_id: this._id}, JWT_SECRET);
}

const Client =  mongoose.model("Client", clientSchema);

module.exports = Client;
