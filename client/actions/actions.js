

const update_text = data => ({
	type: 'UPDATE_TEXT',
	data
})

const update_fact = data => ({
	type: 'UPDATE_FACT',
	data
})

export const make_combo = data => ({
	type: 'MAKE_COMBO',
	data
})


export const sort_facts = data => ({
	type: 'SORT_FACTS',
	data
})

export const add_pic = data => ({
	type: 'ADD_PIC',
	data
})

export const initialText = () => dispatch => {
	 return fetch(`http://mapd-cats.azurewebsites.net/catpics`)
    	.then(res => res.text())
      .then(res => (new window.DOMParser()).parseFromString(res, "text/xml"))
      .then((data) => { dispatch(update_text(data))})
      .catch(err => console.log(err))
}

export const initialFact = () => dispatch => {
	  return fetch('http://mapd-cats.azurewebsites.net/catfacts')
      .then(res => res.json())
      .then((res) => {dispatch(update_fact(res.facts))})
      .catch(err => console.log(err))
}

export const remove_pic_facts = data => ({
	type: 'REMOVE_PIC_FACTS',
	data
})

export const edit_pic2_start = data => ({
	type: 'EDIT_PIC2_START',
	data
})

export const edit_pic2_facts = data => ({
	type: 'EDIT_PIC2_FACTS',
	data
})



