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
    var a = this.props.timeLeft - 1;
    this.setState({ timeLeft: a});
    console.log(a);
  }



  // componentDidMount() {
  //   let timeLeftVar = this.secondsToTime(this.state.seconds);
  //   this.setState({ time: timeLeftVar });
  // }

  // startTimer() {
  //   if (this.timer == 0) {
  //     this.timer = setInterval(this.countDown, 1000);
  //   }
  // }

  buttonCombo() {
    this.props.dispatch(actions.make_combo());
  }

  factSort() {
    this.props.dispatch(actions.sort_facts());
  }

  myTimeUpdate(startTime) {
    // let timeL = this.props.timeLeft -= 1;
    // return timeL;

    //how many milieconds since you clicked the button
    let a = Date.now() - this.props.dateTimeNow 

    // subtact this from whatever timeLeft is that will countdown
    let b = a - this.props.timeLeft;

    return b;
  }

  render() {
 
    var startTime = Date.now();

    setTimeout(this.forceUpdate.bind(this), 1000);
    // setTimeout(this.forceUpdate.bind(this), 1000);

    return (
      <div>
        <h3>Going Merry Countdown</h3>
        <h4>NEW PIC </h4>
        <NewPic />
        <button className="btn" onClick={ () => this.buttonCombo() }>Click me to see some cat factoids!</button>
        <Timer />
        <p>{Date.now()}</p>
        <p>{this.myTimeUpdate(this.props.timeLeft)}</p>
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
  showEdit2: state.showEdit2,
  dateTimeNow: state.dateTimeNow
}))(Home);