import React, { Component } from 'react'
import { BrowserRouter, Switch,Route, Router,Link } from "react-router-dom";
export class Home extends Component {
  render() {
    <Router>
        <Link to="/">Home</Link><Link to="/students">Students</Link><Link to="/Contact">Contact Us</Link>
        <Switch>
            <nav>
                <ul>
        
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route exact path="/students">
                        <Students/>
                    </Route>
                    <Route exact path="/Contact ">
                        <Contact Us/>
                    </Route>
                </ul>
            </nav>
        </Switch>
    </Router>
    return (
      <div></div>
    )
  }
}

export default Home