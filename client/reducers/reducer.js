const initialState = {
	startime: null,
	endtime: null,
	dateTimeNow: null,
	isTimeLeftShow: false,
	isOver: false,
	timeLeft: 0,
}
	
const reducer = (state, action) => {
	let copyState = state || initialState;
	state = Object.assign({}, copyState);

	if (action.type === 'STOP_TIME') {
		return {...state, isTimeLeftShow: false, isOver: true}
	}

	if (action.type === 'START_OVER') {
		return {...state, isTimeLeftShow: false, isOver: false}
	}

	if (action.type === 'ADD_TIME') {

		let starttime = action.data[0];
		let endtime = action.data[1];

		var a = starttime.split(':');
		var b = endtime.split(':');

		var startSeconds = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]);
		var endSeconds = (+b[0]) * 60 * 60 + (+b[1]) * 60 + (+b[2]);
		var timeL = endSeconds - startSeconds;

		console.log("* * * * * * start time", startSeconds);
		console.log("* * * * * * end time", endSeconds);
		console.log("time left in seconds! :", timeL);

		let dtn = Date.now();

		if (timeL <= 0) {
			return alert("Your ending time must be greater than your start time");
		} else if (isNaN(timeL)) {
			return alert("Please use the time slots to select a start & end time");
		}else {
			return {...state, timeLeft: timeL, dateTimeNow: dtn, isTimeLeftShow: true }
		}
	}

	return state;
}

exports.reducer = reducer;


