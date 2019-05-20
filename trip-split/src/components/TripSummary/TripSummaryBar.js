import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Close from '@material-ui/icons/Close';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

function TripSummaryBar(props) {
  const { classes } = props;
  return (
    <div>
        $1,000 spent
        {/* {props.price_total} */}
      <Button variant="contained" color="secondary" className={classes.button}>
      <Close className={classes.rightIcon} />
         End Trip
      </Button>
    </div>
  );
}

TripSummaryBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TripSummaryBar);