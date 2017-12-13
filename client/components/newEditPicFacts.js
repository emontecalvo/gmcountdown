import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';


class newEditPicFacts extends React.Component {

  constructor(props) {
    super(props);
  }

  editPicPost(comboToEdit) {
    console.log("I AM THE EDIT BUTTON");
    this.props.dispatch(actions.edit_pic2_facts(comboToEdit));
  }

  render() {
    return(
          <div>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              let text = e.target.text.value
              let fact = e.target.fact.value
              this.props.comboToEdit[0].url = text
              this.props.comboToEdit[1] = fact
              this.editPicPost(this.props.comboToEdit)

            }}
          >

      <input type="text" name="text" defaultValue={this.props.comboToEdit[0].url}/>
      <input type="text" name="fact" defaultValue={this.props.comboToEdit[1]}/>

    <button type="submit">
      save
    </button>
  </form>
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
}))(newEditPicFacts);