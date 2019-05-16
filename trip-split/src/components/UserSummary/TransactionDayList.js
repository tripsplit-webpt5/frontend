import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
});

function TransactionDayList(props) {
  const { classes } = props;
  return (
      <div>
      <div>
          Today
      </div>
    <List className={classes.root}>
      <ListItem alignItems="flex-start">
        <ListItemText
          primary="Uber to Lunch"
          secondary={
            <React.Fragment>
              {"Split with Kevin, Mario, and Maryann"}
            </React.Fragment>
          }
        />
        <ListItemSecondaryAction>
          $7.25
        </ListItemSecondaryAction>
      </ListItem>
      <ListItem alignItems="flex-start">
        <ListItemText
          primary="Uber to Lunch"
          secondary={
            <React.Fragment>
              {"Split with Kevin, Mario, and Maryann"}
            </React.Fragment>
          }
        />
        <ListItemSecondaryAction>
          $7.25
        </ListItemSecondaryAction>
      </ListItem>
      <ListItem alignItems="flex-start">
        <ListItemText
          primary="Uber to Lunch"
          secondary={
            <React.Fragment>
              {"Split with Kevin, Mario, and Maryann"}
            </React.Fragment>
          }
        />
        <ListItemSecondaryAction>
          $7.25
        </ListItemSecondaryAction>
      </ListItem>
    </List>
    </div>
  );
}

TransactionDayList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TransactionDayList);