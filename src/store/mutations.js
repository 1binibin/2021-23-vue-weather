// 상태(History)를 관리 함 => state의 값을 변화 시킨다, 모든 데이터를 거쳐감
export default {
  MUT_COORDS (state, v) {
    state.coords = v
  },
  MUT_DAILY (state, v) {
    state.daily = v
  },
  MUT_DAYS (state, v) {
    state.days = v
  },
  MUT_CITY (state, v) {
    state.city = v
  }
}
