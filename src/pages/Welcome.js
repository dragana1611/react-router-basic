import React from "react";
import { Route, Link } from "react-router-dom";


const Welcome = () => {
  return <section>
    <h1>The Welcome Page</h1>
    <p><Link to='/welcome/new-user'>CLICK ME 👈</Link></p>
    <Route path='/welcome/new-user'>
      <p>Welcome, new user!</p>
    </Route>
  </section>;
};

export default Welcome;
