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
            trip_title: ''
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
    }

    render() {
        return(
            <div>
                <NavBar 
                title={this.state.trip_title}/>
                <TripSummaryBar />
                <TransactionDayList />
            </div>
        )
    }
}

export default TripSummary