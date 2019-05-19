import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

class NewTrip extends Component {
    constructor(props) {
        super (props);
        this.state = {
        title: '',
        number_travelers: '',
        destination: '',
        dates: '',
        names: ''
        }
    }
    render(){
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        New Trip
      </Typography>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="title"
            name="title"
            label="Title"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="destination"
            name="destination"
            label="Destination"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="dates"
            name="dates"
            label="Dates"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
            <TextField
            id="standard-number"
            label="Number of Travelers"
            type="number"
            margin="normal"
            />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="names"
            name="names"
            label="Names of Travelers"
            fullWidth
          />
        </Grid>
      </Grid>
    </React.Fragment>
  )}
}

export default NewTrip;