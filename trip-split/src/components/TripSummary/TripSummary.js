import React, { Component } from 'react';
import NavBar from './NavBar';
import TransactionDayList from '../TripSummary/TransactionDayList';
import TripSummaryBar from './TripSummaryBar';

class TripSummary extends Component{
    render() {
        return(
            <div>
                <NavBar />
                <TripSummaryBar />
                <TransactionDayList />
            </div>
        )
    }
}

export default TripSummary