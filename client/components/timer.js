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
          <div className="input">
            <form
              onSubmit={(e) => {
                e.preventDefault()
                let title = e.target.title.value
                let content = e.target.content.value
                let tags = e.target.tags.value
                this.addBlog(title, content, tags)
                e.target.title.value = ''
                e.target.content.value = ''
                e.target.tags.value = ''
              }}
            >

        <input type="text" placeholder="enter title" name="title" />
        <textarea rows="4" cols="50" placeholder="enter content" name="content" />
        <input type="text" placeholder="enter tags" name="tags" />

      <button type="submit">
        post
      </button>
    </form>
          
            <form onSubmit={(e) => {
            	e.preventDefault() }}>
              <div className="day1input"><i className="fa fa-clock-o"></i>start time<input type="time" step="1" name="name" /></div>
              <div className="day1input"><i className="fa fa-clock-o"></i>end time<input type="time" step="1" name="name" /></div>
              <button className="Day1Btn" type="submit" onClick={() => this.showDay1b()}>&nbsp;&nbsp;start <i className="fa fa-fw fa-chevron-right"></i></button>
            </form>
          </div>
        </div>
    )
  }
}

export default connect((state, props) => ({
  picText: state.picText,
  picFact: state.picFact,
  picCombo: state.picCombo,
  showFacts: state.showFacts,
  comboToEdit: state.comboToEdit,
  comboToAdd: state.comboToAdd,
  showEdit2: state.showEdit2
}))(Timer);