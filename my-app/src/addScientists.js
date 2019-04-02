import React, { Component } from 'react'

class AddScientists extends Component {
  state = {
    name: null,
    age: null
  }

  formChange = (e) => {

    this.setState({
      [e.target.id]: e.target.value
    })

  }

  formSubmit = (e) => {

    e.preventDefault()
    console.log(this.state);
    this.props.addScientists(this.state)
  }

  //basic js timer


  render(){
    return(
      <div>
      <form onSubmit={this.formSubmit}>

        <label htmlFor="name">name:</label>
        <input type="text" id="name" name="name" onChange={this.formChange} />

        <br />

        <label htmlFor="age">age:</label>
        <input type="text" id="age" name="age" onChange={this.formChange} />

        <br />

        <input type="submit" name="" value="submit" />

      </form>
      </div>
    )
  }
}

export default AddScientists;
