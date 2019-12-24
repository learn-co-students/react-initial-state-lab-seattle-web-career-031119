// your Bomb code here!
import React, {Component} from 'react';

class Bomb extends Component {
  constructor(props) {
    super(props)
    this.state = {
      secondsLeft: this.props.initialCount
    }
  }


  render() {
    let SECONDS_LEFT = this.state.secondsLeft
    return ( SECONDS_LEFT === 0 ?
      <div>Boom!</div> :
      <div>{SECONDS_LEFT} seconds left before I go boom!</div>
    )
  }

}

export default Bomb;
