export default {
	changeCity (state,city) {
		state.city = city
		localStorage.city = city
	},
	gallaryToggle (state,flag) {
		state.toggle = flag
	}
}