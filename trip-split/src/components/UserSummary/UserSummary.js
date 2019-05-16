import React, { Component } from 'react';

import NavBar from './NavBar';
import AvatarBar from './AvatarBar';
import TransactionDayList from './TransactionDayList';

class UserSummary extends Component {
  render() {
    return (
      <div className="UserSummary">
        <NavBar />
        <AvatarBar />
        <TransactionDayList />
      </div>
    );
  }
}

// Smurf.defaultProps = {
//  smurfs: [],
// };

export default UserSummary;