import React, { Component } from 'react';

import NavBar from './NavBar';
import CurrentTripCard from './CurrentTripCard'
import PreviousTripsBar from './PreviousTripsBar';
import PreviousTripCard from './PreviousTripCard';
import axios from 'axios';

const headers = {
  headers: {
    Authorization: localStorage.getItem("token"),
  }}

class Trips extends Component {

  constructor(props) {
    super(props);
    this.state = {
      trips: [],
      id: localStorage.getItem("id")
    }
  }

  componentDidMount(){

    axios
    .get(`https://trip-split-backend.herokuapp.com/user/trips/all/${this.state.id}`, headers)
    .then(response =>{
      this.setState({
        trips: response.data
      })
    })
    .catch(err => console.log(err))
  }

  render() {
    // const current_trip = this.state.trips[this.state.trips.length - 1];
    const previous_trips = this.state.trips.splice(0,this.state.trips.length - 1)
    
    console.log(this.state.trips)

    return (
      <div className="Trips">
        <NavBar />
        {this.state.trips.map(trip => {
          return(<CurrentTripCard 
            key={trip.id}
            id={trip.id}
            title={trip.title}
            user_id={trip.user_id}
            number_travelers={trip.number_travelers}
            destination={trip.destination}
            dates={trip.dates}
            names={trip.names}
          />)
        })}
        <PreviousTripsBar />
        {previous_trips.map(trip => {
          return(
            <PreviousTripCard
              key={trip.id}
              id={trip.id}
              title={trip.title}
              user_id={trip.user_id}
              number_travelers={trip.number_travelers}
              destination={trip.destination}
              dates={trip.dates}
              names={trip.names}
            />
          )
        })}
      </div>
    );
  }
}

// Smurf.defaultProps = {
//  smurfs: [],
// };

export default Trips;