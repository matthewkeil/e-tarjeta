import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CardLayout from './CardLayout';


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

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
});

function Appointments(props) {
  const { classes } = props;
  console.log(props);
  return (
    
    <CardLayout className={classes.root}>
    {TEST_APPOINTMENTS.map((appointment, index) => {
      return (
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>DAY {appointment.gestation_day} - APPOINTMENT #{TEST_APPOINTMENTS.length - index} - {appointment.date}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails style={{flexDirection: "column", alignItems: 'flex-start'}}>
            <Typography paragraph={true}>CARE PROVIDER: {appointment.provider}</Typography>
            <Typography paragraph={true}>FACILITY: {appointment.facility}</Typography>
            <Typography paragraph={true}>GESTATION DAY: {appointment.gestation_day}</Typography>
            <Typography paragraph={true}>CLIENT WEIGHT: {appointment.weight}</Typography>
            <Typography paragraph={true}>BLOOD PRESSURE: {appointment.blood_pressure}</Typography>
            <Typography paragraph={true}>UTERINE DEPTH: {appointment.uterus_depth}</Typography>
            <Typography paragraph={true}>FETAL PRESENTATION: {appointment.fetal_presentation}</Typography>
            <Typography paragraph={true}>FCF: {appointment.fcf}</Typography>
            <Typography paragraph={true}>FETAL MOVEMENT: {appointment.fetal_movement}</Typography>
            <Typography paragraph={true}>PROTEINURIA: {appointment.proteinuria}</Typography>
            <Typography paragraph={true}>NOTES: {appointment.notes}</Typography>
            <Typography paragraph={true}>CARE PROVIDER INITIALS: {appointment.provider_initials}</Typography>
            <Typography paragraph={true}>NEXT VISIT: {appointment.next_visit}</Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      );
    })}
    </CardLayout>
  );
}

Appointments.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Appointments);