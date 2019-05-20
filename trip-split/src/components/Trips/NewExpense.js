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

class NewExpense extends Component {
    constructor(props) {
        super (props);
        this.state = {
            title: '',
            trip_id: '',
            number_paid: '',
            price: '',
            names: ''
        }
    }

    componentDidMount() {
        this.setState({trip_id: this.props.match.params.id})
    }
    newExpense = event => {

        event.preventDefault();

        axios
        .post('https://trip-split-backend.herokuapp.com/trips/expense', this.state, headers)
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
        New Expense
      </Typography>
      <form onSubmit={this.newExpense}>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="title"
            name="title"
            label="Name of Expense"
            fullWidth
            onChange={this.handleInputChange} value={this.state.title}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="number_paid"
            name="number_paid"
            label="Number of People"
            fullWidth
            onChange={this.handleInputChange} value={this.state.number_paid}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="price"
            name="price"
            label="Price"
            fullWidth
            onChange={this.handleInputChange} value={this.state.price}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
            <TextField
            required
            id="names"
            name="names"
            label="Names of People Who Paid"
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
            Add Expense
        </Button>
      </Grid>
      </form>
    </React.Fragment>
  )}
}

export default NewExpense;