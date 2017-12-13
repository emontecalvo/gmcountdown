import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';

class Timer extends React.Component {

	showHome() {
		this.props.dispatch(actions.show_home());
	}

  showDay1b() {
    this.props.dispatch(actions.view_day_one_b());
  }


  render() { 
    return (
        <div className="Day1Div">
          <div><p>{this.props.timeLeft}</p></div>
        </div>
    )
  }
}

export default connect((state, props) => ({
  picText: state.picText,
  picFact: state.picFact,
  starttime: state.starttime,
  endtime: state.endtime,
  timeLeft: state.timeLeft,
  picCombo: state.picCombo,
  showFacts: state.showFacts,
  comboToEdit: state.comboToEdit,
  comboToAdd: state.comboToAdd,
  showEdit2: state.showEdit2
}))(Timer);