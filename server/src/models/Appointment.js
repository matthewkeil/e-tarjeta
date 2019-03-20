const mongoose = require ('mongoose');
const Schema = mongoose.Schema;


const appointmentSchema = new Schema({
  client: {type: Schema.Types.ObjectId, ref: 'Client'},
  provider: {type: Schema.Types.ObjectId, ref: 'Provider'},
  facility: {type: Schema.Types.ObjectId, ref: 'Facility'},
  gestation_day: String,
  weight: String,
  blood_pressure: String,
  uterus_depth: String,
  fetal_presentation: String,
  fcf: String,
  fetal_movement: String,
  proteinuria: String,
  notes: String,
  provider_initials: String,
  next_visit: String,
},{
  timestamps: true
});


const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;

