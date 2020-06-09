
import React, { Component } from "react";

class Form extends React.Component {
    constructor(props) {
      super(props);
      
      this.onChange = this.onChange.bind(this);
      
      this.state = {
        name: ''
      };
    }
    
    onChange(e) {
      this.setState({
        name: e.target.value
      });
    }
    
    render() {
      return (
        <div>
          <label for='name-input'>Name: </label>
          <input
            id='name-input'
            onChange={this.onChange}
            value={this.state.name} />
        </div>
      )
    }
  }