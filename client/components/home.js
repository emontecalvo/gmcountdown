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

  startOver() {
    this.props.dispatch(actions.start_over());
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


  // stopTimeShow() {
  //   this.props.dispatch(actions.stop_time());
  // }

  myTimeUpdate(startTime) {
    // let timeL = this.props.timeLeft -= 1;
    // return timeL;

    //how many milieconds since you clicked the button
    let a = (Date.now() - this.props.dateTimeNow) / 1000;
    // console.log ("a is : ", a);

    // subtact this from whatever timeLeft is that will countdown
    let b = this.props.timeLeft - a;

    // time in minutes
    let bmin = Math.floor(b / 60000);

    // time in seconds
    // let b2 = Math.floor((b % 60000) / 1000).toFixed(0);
    let b2 = Math.floor((b % 60000) / 1000);

    if (Math.floor(b) <= 0) {
      this.props.dispatch(actions.stop_time());
    }

    if (b2 == this.props.timeLeft) {
      // console.log("IT'S HERE");
      // this.stopTimeShow();
      this.props.dispatch(actions.stop_time());
    }

    // return (b2 == 60 ? (bmin+1) + ":00" : bmin + ":" + (b2 < 10 ? "0" : "") + b2);

    // return b2;
    return b;
  }

  render() {
 
    var startTime = Date.now();

    if (this.props.isTimeLeftShow) {
      setTimeout(this.forceUpdate.bind(this), 1000);
    }


    if (this.props.isTimeLeftShow) {
      return (
        <div>
        <h3>Going Merry Countdown</h3>
        <h4>NEW PIC </h4>
        <NewPic />
        <Timer />
        <p>{Date.now()}</p>
        <p>seconds to go: {this.myTimeUpdate(this.props.timeLeft) }</p>
      </div>
      )
    } else if (this.props.isOver) {
      return (
        <div>
        <p>TIME'S UP!</p>
        <button onClick={() => this.startOver()}>set a new timer?</button>
      </div>
      )
    } else {
      return (
        <div>
        <h3>Going Merry Countdown</h3>
        <h4>NEW PIC </h4>
        <NewPic />
      </div>
      )
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
  isTimeLeftShow: state.isTimeLeftShow,
  isOver: state.isOver,
}))(Home);