import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignIn from './components/SignIn';
import Register from './components/Register';
import Trips from './components/Trips/Trips'
import UserSummary from './components/UserSummary/UserSummary';
import TripSummary from './components/TripSummary/TripSummary';
import NewTrip from './components/Trips/NewTrip';

function App() {
  return (
    <Router>
      <div>
        {/* <Header /> */}

        <Route exact path="/" component={SignIn} />
        <Route path="/register" component={Register} />
        <Route path="/trips" component={Trips} />
        <Route path="/user-summary" component={UserSummary} />
        <Route path="/trip-summary" component={TripSummary} />
        <Route path="/new-trip" component={NewTrip}/>
      </div>
    </Router>
  );
}
export default App;