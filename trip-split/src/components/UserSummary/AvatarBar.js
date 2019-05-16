import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

const styles = {
    avatar: {
        margin: 10,
    },
    bigAvatar: {
        margin: 10,
        width: 60,
        height: 60,
    },
};

function AvatarBar(props) {
    const { classes } = props;
    return (
        <Grid container justify="center" alignItems="center">
            <Grid direction='column'>
                <Typography>
                    $58
                </Typography>
                <Typography>
                    spent
                </Typography>
            </Grid>
            <Grid direction='column'>
                <Avatar alt="Remy Sharp" src="https://www.telegraph.co.uk/content/dam/fashion/2017/06/19/TELEMMGLPICT000131421802_trans_NvBQzQNjv4BqkUE_BTgBOQu3VWKvpDGX9fr7sARQy7EgBjwPUzvqL_M.jpeg?imwidth=450" className={classes.bigAvatar} />
                <Typography>
                    Dany
                </Typography>
            </Grid>
            <Grid direction='column'>
                <Typography>
                    $71
                </Typography>
                <Typography>
                    used
                </Typography>
            </Grid>
        </Grid>
  );
}

AvatarBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AvatarBar);