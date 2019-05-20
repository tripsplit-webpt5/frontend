import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Edit from '@material-ui/icons/Edit';
import Close from '@material-ui/icons/Close';
import AddIcon from '@material-ui/icons/Add'
import { Link } from 'react-router-dom'

const styles = {
    card: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
};

function CurrentTripCard(props) {
    const { classes } = props;
    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image="https://feature.veltra.com/en/promotion/ctg_img/31606.jpg"
                    title={props.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.title}
                    </Typography>
                    <Typography component="p">
                        {props.dates}
                    </Typography>
                    <Typography component="p">
                    {props.number_travelers} people
                    </Typography>
                    <Typography component="p">
                        $1,038 spent
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Link to={{pathname:`/new-expense/${props.id}`}}>
                    <Button variant="contained" color="default" className={classes.button}>
                        <AddIcon className={classes.rightIcon} />
                        Add Expense
                    </Button>
                </Link>
                <Link to={{pathname:`/edit-trip/${props.id}`}}>
                <Button variant="contained" color="default" className={classes.button}>
                    <Edit className={classes.rightIcon} />
                    Edit Trip
                </Button>
                </Link>
            </CardActions>
        </Card>
  );
}

CurrentTripCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CurrentTripCard
);