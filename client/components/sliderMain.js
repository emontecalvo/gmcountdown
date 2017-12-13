import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';
import Slider from 'react-image-slider';


class sliderMain extends React.Component {

  removePic2Post(picPost) {
    this.props.dispatch(actions.remove_pic_facts(picPost));
  }

  editPic2Start(picPost) {
    this.props.dispatch(actions.edit_pic2_start(picPost));
  }



	render () {
  	return (
    	<div>
              <Slider images={this.props.picCombo} isInfinite delay={5000}>
                {this.props.picCombo.map((picture, key) => <div key={key}>
                                                              <div className="keeper">
                                                                <img src={picture[0].url} className="imgDisplay" />
                                                                <p className="factDisplay">{picture[1]}</p>
                                                                <button className="edit" onClick={() => this.editPic2Start(picture)}>edit</button>
                                                                <button className="remove" onClick={() => this.removePic2Post(picture)}>remove</button>
                                                                <button>save me!</button>
                                                              </div>
                                                        </div>)}
               </Slider>
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
  showEdit2: state.showEdit2
}))(sliderMain);