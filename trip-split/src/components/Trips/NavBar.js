import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import DirectionsCar from '@material-ui/icons/DirectionsCar';
import People from '@material-ui/icons/People';
import MonetizationOn from '@material-ui/icons/MonetizationOn';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add'
import { Link } from 'react-router-dom'

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    button: {
        margin: theme.spacing.unit,
    },
    leftIcon: {
        marginRight: theme.spacing.unit,
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
    },
    iconSmall: {
        fontSize: 20,
    },
    fab: {
        margin: theme.spacing.unit,
    },
    extendedIcon: {
        marginRight: theme.spacing.unit,
    },
});

function NavBar(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" color="inherit" className={classes.grow}>
                        Trips
                    </Typography>
                    <Link to="/trips">
                    <Button variant="contained" color="default" className={classes.button}>
                        Trips
                        <DirectionsCar className={classes.rightIcon} />
                    </Button>
                    </Link>
                    <Button variant="contained" color="default" className={classes.button}>
                        People
                        <People className={classes.rightIcon} />
                    </Button>
                    <Button variant="contained" color="default" className={classes.button}>
                        Transactions
                        <MonetizationOn className={classes.rightIcon} />
                    </Button>
                    <Link to='/new-trip'>
                        <Fab variant="extended" aria-label="Delete" className={classes.fab}>
                            <AddIcon className={classes.extendedIcon} />
                                New Trip
                        </Fab>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    );
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);