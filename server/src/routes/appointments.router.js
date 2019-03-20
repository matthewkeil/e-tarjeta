const Router = require("express").Router;
const appointmentRouter = Router();

const TEST_APPOINTMENTS = [
  {
    date: 'TIME DD/MM/YYYY',
    provider: 'DR. GOMEZ',
    facility: 'PERQUIN WAITING HOUSE',
    gestation_day: 'DD',
    weight: '100.0',
    blood_pressure: '0/0',
    uterus_depth: 'unknown',
    fetal_presentation:'unknown',
    fcf: 'fcf',
    fetal_movement: 'unknown',
    proteinuria: 'unknown',
    notes: 'TEST NOTE NOTE NOTES TEST',
    provider_initials: 'DR. G',
    next_visit: 'DD/MM/YYYY'
  },{
    date: 'TIME DD/MM/YYYY',
    provider: 'DR. GOMEZ',
    facility: 'PERQUIN WAITING HOUSE',
    gestation_day: 'DD',
    weight: '100.0',
    blood_pressure: '0/0',
    uterus_depth: 'unknown',
    fetal_presentation:'unknown',
    fcf: 'fcf',
    fetal_movement: 'unknown',
    proteinuria: 'unknown',
    notes: 'TEST NOTE NOTE NOTES TEST',
    provider_initials: 'DR. G',
    next_visit: 'DD/MM/YYYY'
  },{
    date: 'TIME DD/MM/YYYY',
    provider: 'DR. GOMEZ',
    facility: 'PERQUIN WAITING HOUSE',
    gestation_day: 'DD',
    weight: '100.0',
    blood_pressure: '0/0',
    uterus_depth: 'unknown',
    fetal_presentation:'unknown',
    fcf: 'fcf',
    fetal_movement: 'unknown',
    proteinuria: 'unknown',
    notes: 'TEST NOTE NOTE NOTES TEST',
    provider_initials: 'DR. G',
    next_visit: 'DD/MM/YYYY'
  },{
    date: 'TIME DD/MM/YYYY',
    provider: 'DR. GOMEZ',
    facility: 'PERQUIN WAITING HOUSE',
    gestation_day: 'DD',
    weight: '100.0',
    blood_pressure: '0/0',
    uterus_depth: 'unknown',
    fetal_presentation:'unknown',
    fcf: 'fcf',
    fetal_movement: 'unknown',
    proteinuria: 'unknown',
    notes: 'TEST NOTE NOTE NOTES TEST',
    provider_initials: 'DR. G',
    next_visit: 'DD/MM/YYYY'
  },{
    date: 'TIME DD/MM/YYYY',
    provider: 'DR. GOMEZ',
    facility: 'PERQUIN WAITING HOUSE',
    gestation_day: 'DD',
    weight: '100.0',
    blood_pressure: '0/0',
    uterus_depth: 'unknown',
    fetal_presentation:'unknown',
    fcf: 'fcf',
    fetal_movement: 'unknown',
    proteinuria: 'unknown',
    notes: 'TEST NOTE NOTE NOTES TEST',
    provider_initials: 'DR. G',
    next_visit: 'DD/MM/YYYY'
  }
]


appointmentRouter.get('/appointments', (req, res, next) => {
  console.log('sending data')
  res.status(200).json({appointments: TEST_APPOINTMENTS});
  console.log('sent data');
});

module.exports = appointmentRouter;