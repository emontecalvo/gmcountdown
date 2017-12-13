import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';

class Timer extends React.Component {

	showHome() {
		this.props.dispatch(actions.show_home());
	}

  render() { 
    return (
        <div className="Day1Div">
          <div><p>Countdown timer set for: {this.props.timeLeft} seconds</p></div>
        </div>
    )
  }
}

export default connect((state, props) => ({
  starttime: state.starttime,
  endtime: state.endtime,
  timeLeft: state.timeLeft,
  dateTimeNow: state.dateTimeNow,
  isTimeLeftShow: state.isTimeLeftShow,
  isOver: state.isOver,
}))(Timer);