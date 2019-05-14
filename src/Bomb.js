import React, { Component } from 'react'

class Bomb extends Component {

  constructor(props) {
    super(props)
    this.state = {
      secondsLeft: this.props.initialCount
    }
  }

  handleCountdown = () => {
    if (this.state.secondsLeft > 0) {
      return (
        <div>
        {this.state.secondsLeft} seconds left before I go boom!
      </div>
      )
    } else {
      return (
        <div>
        Boom!
        </div>
      )
    }
  }

  render() {
    return (
      this.handleCountdown()
    )
  }
}

export default Bomb
