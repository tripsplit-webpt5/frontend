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
import RemoveRedEye from '@material-ui/icons/RemoveRedEye';
import { Link } from 'react-router-dom'

const styles = {
    card: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
};

function PreviousTripCard(props) {
    const { classes } = props;
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
                    <RemoveRedEye className={classes.rightIcon} />
                    View Trip
                </Button>
                </Link>
            </CardActions>
        </Card>
  );
}

PreviousTripCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PreviousTripCard);