import React, { Component } from 'react';

import NavBar from './NavBar';

class UserSummary extends Component {
  render() {
    return (
      <div className="UserSummary">
        <NavBar />
      </div>
    );
  }
}

// Smurf.defaultProps = {
//  smurfs: [],
// };

export default UserSummary;