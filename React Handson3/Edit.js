import React, { Component } from 'react'

export class Edit extends Component {
  render() {
    return (
      <div><span><input type ="text" value="Name"></input>
      <label for="Name"></label>
      <input type ="text" value="Age"></input>
      <label for="Age"></label></span>
      <span><input type ="text" value="Course"></input>
      <label for="Course"></label>
      <input type ="text" value="Batch"></input>
      <label for="Batch"></label></span>
      <span><input type ="text" placeholder='Cancel'></input>
      
      <input type ="text" placeholder='Submit'></input>
      </span>
      </div>
    )
  }
}

export default Edit