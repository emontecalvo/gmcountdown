import React from 'react';
import {connect} from 'react-redux';
import {parseString} from 'xml2js';
import xmlToJson from './xmlToJson';
import NewEdit from './newEditPicFacts';
import NewPic from './newPic';
import SliderMain from './sliderMain';

import Timer from './timer';

import * as actions from '../actions/actions';



class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // this.props.dispatch(actions.initialText());
  }

  buttonCombo() {
    this.props.dispatch(actions.make_combo());
  }

  factSort() {
    this.props.dispatch(actions.sort_facts());
  }

  render() { 
    return (
      <div>
        <h3>Going Merry Countdown</h3>
        <h4>NEW PIC </h4>
        <NewPic />
        <button className="btn" onClick={ () => this.buttonCombo() }>Click me to see some cat factoids!</button>
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
}))(Home);