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
    uterus_depth: '6ft',
    fetal_presentation:'',
    fcf: 'fcf',
    fetal_movement: '',
    proteinuria: '',
    next_appointment: '',
    notes: 'TEST NOTE NOTE NOTES TEST',
    provider_initials: '',
    next_visit: 'DD/MM/YYYY'
  },{
    date: 'TIME DD/MM/YYYY',
    provider: 'DR. GOMEZ',
    facility: 'PERQUIN WAITING HOUSE',
    gestation_day: 'DD',
    weight: '100.0',
    blood_pressure: '0/0',
    uterus_depth: '6ft',
    fetal_presentation:'',
    fcf: 'fcf',
    fetal_movement: '',
    proteinuria: '',
    next_appointment: '',
    notes: 'TEST NOTE NOTE NOTES TEST',
    provider_initials: '',
    next_visit: 'DD/MM/YYYY'
  },{
    date: 'TIME DD/MM/YYYY',
    provider: 'DR. GOMEZ',
    facility: 'PERQUIN WAITING HOUSE',
    gestation_day: 'DD',
    weight: '100.0',
    blood_pressure: '0/0',
    uterus_depth: '6ft',
    fetal_presentation:'',
    fcf: 'fcf',
    fetal_movement: '',
    proteinuria: '',
    next_appointment: '',
    notes: 'TEST NOTE NOTE NOTES TEST',
    provider_initials: '',
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
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Expansion Panel 1</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Expansion Panel 2</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Expansion Panel 3</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </CardLayout>
  );
}

Appointments.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Appointments);