import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';


class newPic extends React.Component {

	constructor(props) {
        super(props);
        this.addPic = this.addPic.bind(this);
	}

	addPic(comboToAdd) {
		this.props.dispatch(actions.add_pic(comboToAdd));
	}

	render() {
		return(
			 <div>
			 <div className="form_container">
				    <form
				      onSubmit={(e) => {
				        e.preventDefault()
				        let text = e.target.text.value
				        let fact = e.target.fact.value
				        let starttime = e.target.starttime.value
				        let endtime = e.target.endtime.value
				        this.addPic([text, fact, starttime, endtime])
				        e.target.text.value = ''
				        e.target.fact.value = ''
				        e.target.starttime.value = ''
				        e.target.endtime.value = ''
				      }}
				    >

	      <input type="text" placeholder="image path / url" name="text" />
	      <br />
	      <input type="text" placeholder="interesting fact" name="fact" />
	      <br />
	      <div className="day1input"><i className="fa fa-clock-o"></i>start time<input type="time" step="1" name="starttime" /></div>
        <div className="day1input"><i className="fa fa-clock-o"></i>end time<input type="time" step="1" name="endtime" /></div>
	    <button type="submit">
	      post pic
	    </button>
	  </form>
	  </div>
			</div>
		)
	}

}


export default connect((state, props) => ({
  picText: state.picText,
  picFact: state.picFact,
  starttime: state.starttime,
  endtime: state.endtime,
  picCombo: state.picCombo,
  showFacts: state.showFacts,
  comboToEdit: state.comboToEdit,
  comboToAdd: state.comboToAdd,
  showEdit2: state.showEdit2
}))(newPic);





