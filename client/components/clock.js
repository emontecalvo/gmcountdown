import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';


class clock extends React.Component {

	constructor(props) {
        super(props);
        this.addTime = this.addTime.bind(this);
	}

	addTime(timesToAdd) {
		this.props.dispatch(actions.add_time(timesToAdd));
	}

	render() {
		return(
			 <div>
			 <div className="form_container">
				    <form
				      onSubmit={(e) => {
				        e.preventDefault()
				        let starttime = e.target.starttime.value
				        let endtime = e.target.endtime.value
				        this.addTime([starttime, endtime])
				        e.target.starttime.value = ''
				        e.target.endtime.value = ''
				      }}
				    >

	      <div className="timeInput"><i className="fa fa-clock-o"></i>start time<input type="time" step="1" name="starttime" /></div>
        <br />
        <div className="timeInput"><i className="fa fa-clock-o"></i>end time<input type="time" step="1" name="endtime" /></div>
	    	<br />
	    <button type="submit">
	      start countdown
	    </button>
	  </form>
	  </div>
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
}))(clock);





