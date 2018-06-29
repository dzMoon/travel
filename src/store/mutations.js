export default {
  changeCity (state, city) {
    state.city = city
    try {
      localStorage.city = city
    } catch (e) {}
  },
  gallaryToggle (state, flag) {
    state.toggle = flag
  }
}
