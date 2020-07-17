import React, { Component } from 'react';

class Window extends Component {
  constructor(props) {
    super(props);
    this.state = {
      limit: '',
      bases: []
    }
  }

  handleClick(e) {
    console.log(e);
    e.preventDefault();
    this.setState((state, props) => {

    })
  }

  render() {
    return (
      <form>
        <label>Limit</label>
        <input type="text" name="limit" id="limit" /> <br/>
        <label>Bases</label>
        <input type="text" name="bases" id="bases" />
        <input type="submit" value="Calculate" onClick={e=>this.handleClick(e)}/>
      </form>
    )
  }
}

export default Window;
