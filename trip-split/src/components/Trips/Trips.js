import React, { Component } from 'react';

import NavBar from './NavBar';
import CurrentTripCard from './CurrentTripCard'
import PreviousTripsBar from './PreviousTripsBar';
import PreviousTripCard from './PreviousTripCard';

class Trips extends Component {
  render() {
    return (
      <div className="Trips">
        <NavBar />
        <CurrentTripCard />
        <PreviousTripsBar />
        <PreviousTripCard />
      </div>
    );
  }
}

// Smurf.defaultProps = {
//  smurfs: [],
// };

export default Trips;