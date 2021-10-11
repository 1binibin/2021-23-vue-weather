// state의 변수들에 접근.

export default {
  GET_COORDS: function (state) {
    return state.coords
  },
  GET_DAILY: function (state) {
    return state.daily
  },
  GET_DAYS: function (state) {
    return state.days
  }
}
