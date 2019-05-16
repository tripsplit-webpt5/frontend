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
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Italy '18
                    </Typography>
                    <Typography component="p">
                        Started 4 days ago
                    </Typography>
                    <Typography component="p">
                        7 people
                    </Typography>
                    <Typography component="p">
                        $1,038 spent
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button variant="contained" color="default" className={classes.button}>
                    <Edit className={classes.rightIcon} />
                    Edit Trip
                </Button>
                <Button variant="contained" color="default" className={classes.button}>
                    <Close className={classes.rightIcon} />
                    End Trip
                </Button>
            </CardActions>
        </Card>
  );
}

CurrentTripCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CurrentTripCard
);