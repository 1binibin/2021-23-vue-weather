/**
  * ? vuex의 큰 역할 두가지
  * 1. app의 모든 Component가 접근 가능한 전역변수 -> 사용의 편리성
  * 2. Immutable data로 만듬 -> history로 쌓는다.
 */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 변수를 등록, Store
  },
  getters: {
    // Store에 데이터 요청, UI
  },
  mutations: {
    // Reducer: Store 데이터 상태 관리 (History)
  },
  actions: {
    // Store 데이터 상태 변화
  }
})
