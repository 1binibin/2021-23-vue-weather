<template>
  <div>
    <button class="btn btn-primary" @click="getWeather">현재날씨 가져오기</button>
    <button class="btn btn-primary" @click="clearWeather">날씨정보 가져오기 중지</button>
  </div>
</template>

<script>
import { apiCoords } from './api/api-coords'
// import apiDaily from './api/api-daily'

export default {
  name: 'Weather04',
  data () {
    return {
      coords: null, // 참조 변수
      daily: null,
      interval: null
    }
  },
  watch: {
    coords: async function (v, ov) {
      console.log(v)
    }
  },
  methods: {
    getWeather () {
      this.interval = setInterval(async function () {
        const { lat, lon } = await apiCoords()
        this.coords = { lat, lon }
      }.bind(this), 3000)
    },
    clearWeather () {
      clearInterval(this.interval)
    }
  }
}
</script>

<style lang='scss'>

</style>
