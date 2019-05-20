import React, { Component } from 'react';
import NavBar from './NavBar';
import TransactionDayList from '../TripSummary/TransactionDayList';
import TripSummaryBar from './TripSummaryBar';
import axios from 'axios';

const headers = {
    headers: {
      Authorization: localStorage.getItem("token"),
    }
}

class TripSummary extends Component{
    constructor(props){
        super(props)
        this.state={
            trip_title: '',
            expenses: []
        }
    }

    componentDidMount(){
        axios
        .get(`https://trip-split-backend.herokuapp.com/user/trips/${this.props.match.params.id}`, headers)
        .then(response => {
            this.setState({
                trip_title: response.data.title
            })
        })
        .catch(err => console.log(err))

        axios
        .get(`https://trip-split-backend.herokuapp.com/trips/expense/all/${this.props.match.params.id}`, headers)
        .then(response => {
            this.setState({
                expenses: response.data
            })
        })
        .catch(err => console.log(err))
    }

    render() {
        return(
            <div>
                <NavBar 
                    title={this.state.trip_title}/>
                <TripSummaryBar />
                <TransactionDayList 
                    expenses={this.state.expenses}
                />
            </div>
        )
    }
}

export default TripSummary