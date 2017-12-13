import React from 'react';
import {connect} from 'react-redux';
import {parseString} from 'xml2js';
import xmlToJson from './xmlToJson';
import NewEdit from './newEditPicFacts';
import NewPic from './newPic';
import SliderMain from './sliderMain';
import * as actions from '../actions/actions';



class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(actions.initialText());
    this.props.dispatch(actions.initialFact());
  }

  buttonCombo() {
    this.props.dispatch(actions.make_combo());
  }

  factSort() {
    this.props.dispatch(actions.sort_facts());
  }

  render() { 
    if (this.props.showEdit2) {
      return <div><NewEdit /></div>
    }
    else if (this.props.showFacts) {
      return (
          <div>
            <div>
              <h3>CAT FACTS</h3>
              <button onClick={ () => this.factSort() }>order by short facts</button>
              <NewPic />
              <div>
                <SliderMain />
              </div>
            </div>
          </div>
        )   
    } else {

    }

    return (
      <div>
        <h3>CAT FACTS!</h3>

        <button className="btn" onClick={ () => this.buttonCombo() }>Click me to see some cat factoids!</button>
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
}))(Home);