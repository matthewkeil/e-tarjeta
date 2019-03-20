const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const facilitySchema = new Schema({
  name: {
    type: String,
    required: true
  }
});

const Facility = mongoose.model('Facility', facilitySchema);

module.exports = Facility;