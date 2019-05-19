import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import Button from '@material-ui/core/Button';

const headers = {
    headers: {
      Authorization: localStorage.getItem("token"),
    }
}

class EditTrip extends Component {
    constructor(props) {
        super (props);
        this.state = {
        title: props.title,
        user_id: localStorage.getItem("id"),
        number_travelers: props.number_travelers,
        destination: props.destination,
        dates: props.dates,
        names: props.names
        }
    }

    newTrip = event => {
        event.preventDefault();

        axios
        .put(`https://trip-split-backend.herokuapp.com/user/trips/${props.id}`, this.state, headers)
        .then(response => {
            console.log(response)
        },
        this.props.history.push('/trips'))
        .catch(err => console.log(err))
    }

    handleInputChange = e => {
        this.setState({[e.target.name]: e.target.value});
    }

    render(){
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Edit Trip
      </Typography>
      <form >
      <Grid container spacing={24}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="title"
            name="title"
            label="Title"
            fullWidth
            onChange={this.handleInputChange} value={this.state.title}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="destination"
            name="destination"
            label="Destination"
            fullWidth
            onChange={this.handleInputChange} value={this.state.destination}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="dates"
            name="dates"
            label="Dates"
            fullWidth
            onChange={this.handleInputChange} value={this.state.dates}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
            <TextField
            required
            id="number_travelers"
            name="number_travelers"
            label="Number of Travelers"
            fullWidth
            onChange={this.handleInputChange} value={this.state.number_travelers}
            />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="names"
            name="names"
            label="Names of Travelers"
            fullWidth
            onChange={this.handleInputChange} value={this.state.names}
          />
        </Grid>
        <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
        >
            Add Trip
        </Button>
      </Grid>
      </form>
    </React.Fragment>
  )}
}

export default EditTrip;