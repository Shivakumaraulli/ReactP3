import React, { Component } from 'react'
import { BrowserRouter, Switch, Browser, Route,Link } from "react-router-dom";
export class Students extends Component {
  render() {
    return (
      <div><span><h1>Students Details</h1><input type="text" placeholder='Add new student'></input></span>
      <table>
        <th>Name</th><th>Age</th><th>Course</th><th>Batch</th><th>Change</th>
        <tr>John</tr><tr>26</tr><tr>MERN</tr><tr>October</tr><tr><Link to="/desc-3">Edit</Link></tr>
        <tr>Doe</tr><tr>25</tr><tr>MERN</tr><tr>November</tr><tr><Link to="/desc-3">Edit</Link></tr>
        <tr>Biden</tr><tr>26</tr><tr>MERN</tr><tr>September</tr><tr><Link to="/desc-3">Edit</Link></tr>
        <tr>Barar</tr><tr>22</tr><tr>MERN</tr><tr>September</tr><tr><Link to="/desc-3">Edit</Link></tr>
        <tr>Christ</tr><tr>23</tr><tr>MERN</tr><tr>October</tr><tr><Link to="/desc-3">Edit</Link></tr>
        <tr>Elent</tr><tr>24</tr><tr>MERN</tr><tr>November</tr><tr><Link to="/desc-3">Edit</Link></tr>
        <tr>Harshita Sharma</tr><tr>24</tr><tr>MERN</tr><tr>October</tr><tr><Link to="/desc-3">Edit</Link></tr>
      </table>
      </div>
    )
  }
}

export default Students