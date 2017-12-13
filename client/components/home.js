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
    setTimeout(this.forceUpdate.bind(this), 1000);
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

  // stopTimeShow() {
  //   this.props.dispatch(actions.stop_time());
  // }

  myTimeUpdate(startTime) {
    // let timeL = this.props.timeLeft -= 1;
    // return timeL;

    //how many milieconds since you clicked the button
    let a = Date.now() - this.props.dateTimeNow;
    // console.log ("a is : ", a);

    // subtact this from whatever timeLeft is that will countdown
    let b = a - this.props.timeLeft;

    // time in seconds
    // let b2 = Math.floor((b % 60000) / 1000).toFixed(0);
    let b2 = Math.floor((b % 60000) / 1000);

    if (b2 == this.props.timeLeft) {
      // console.log("IT'S HERE");
      // this.stopTimeShow();
      this.props.dispatch(actions.stop_time());
    }

    return b2
  }

  render() {
 
    var startTime = Date.now();

    if (this.props.isTimeLeftShow) {
      setTimeout(this.forceUpdate.bind(this), 1000);
    }

    if (this.props.isTimeLeftShow) {
      return <div>
        <h3>Going Merry Countdown</h3>
        <h4>NEW PIC </h4>
        <NewPic />
        <button className="btn" onClick={ () => this.buttonCombo() }>Click me to see some cat factoids!</button>
        <Timer />
        <p>{Date.now()}</p>
        <p>seconds to go: {this.myTimeUpdate(this.props.timeLeft) }</p>
      </div>
    } else {
      return <div>
        <h3>Going Merry Countdown</h3>
        <h4>NEW PIC </h4>
        <NewPic />
      </div>
  
    }
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
  dateTimeNow: state.dateTimeNow,
  isTimeLeftShow: state.isTimeLeftShow
}))(Home);