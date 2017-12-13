import React from 'react';
import {connect} from 'react-redux';
import Clock from './clock';
import Timer from './timer';
import * as actions from '../actions/actions';


class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  startOver() {
    this.props.dispatch(actions.start_over());
  }

  myTimeUpdate(startTime) {
    //how many milliseconds/1000 since user clicked the button
    let milli = (Date.now() - this.props.dateTimeNow) / 1000;
    // countdown
    let countdown = this.props.timeLeft - milli;
    // time in minutes:
    // let bmin = Math.floor(b / 60000);
    // time in seconds:
    // let b2 = Math.floor((b % 60000) / 1000);
    // return (b2 == 60 ? (bmin+1) + ":00" : bmin + ":" + (b2 < 10 ? "0" : "") + b2);
    if (Math.floor(countdown) <= 0) {
      this.props.dispatch(actions.stop_time());
    }

    return countdown;
  }

  render() {
 
    var startTime = Date.now();

    if (this.props.isTimeLeftShow) {
      setTimeout(this.forceUpdate.bind(this), 1000);
    }


    if (this.props.isTimeLeftShow) {
      return (
        <div>
          <h1>Going Merry</h1>
          <h2>...countdown coding challenge</h2>
          <Clock />
          <Timer />
          <p>{Date.now()}</p>
          <p>seconds to go: {this.myTimeUpdate(this.props.timeLeft) }</p>
        </div>
      )
    } else if (this.props.isOver) {
      return (
        <div>
          <h1>Going Merry</h1>
          <h2>...countdown coding challenge</h2>
          <p>TIME'S UP!</p>
          <button onClick={() => this.startOver()}>set a new timer?</button>
        </div>
      )
    } else {
      return (
        <div>
          <h1>Going Merry</h1>
          <h2>...countdown coding challenge</h2>
          <Clock />
      </div>
      )
    }
  }

}



export default connect((state, props) => ({
  starttime: state.starttime,
  endtime: state.endtime,
  timeLeft: state.timeLeft,
  dateTimeNow: state.dateTimeNow,
  isTimeLeftShow: state.isTimeLeftShow,
  isOver: state.isOver,
}))(Home);