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
import { Link } from 'react-router-dom';
import axios from 'axios';

const styles = {
    card: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
};

const headers = {
    headers: {
      Authorization: localStorage.getItem("token"),
    }
}

function PreviousTripCard(props) {
    const { classes } = props;

    function deleteTrip() {
        console.log(props.id)
        axios
        .delete(`https://trip-split-backend.herokuapp.com/user/trips/${props.id}`, headers)
        .then(response => console.log(response))
        .catch(err => console.log(err));
    };

    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image="https://www.bbcgoodfood.com/sites/default/files/editor_files/2019/01/santorini-main.jpg"
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
                        $2,000 spent
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Link to={{pathname:`/edit-trip/${props.id}`}}>
                <Button variant="contained" color="default" className={classes.button}>
                    <Edit className={classes.rightIcon} />
                    Edit Trip
                </Button>
                </Link>
                <Button variant="contained" color="default" className={classes.button} onClick={deleteTrip}>
                    <Close className={classes.rightIcon} />
                    End Trip
                </Button>
            </CardActions>
        </Card>
  );
}

PreviousTripCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PreviousTripCard);