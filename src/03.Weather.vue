<template>
  <div></div>
</template>

<script>
import { apiCoords } from './api/api-coords.js'
import apiDaily from './api/api-daily.js'

export default {
  name: 'Weather03',
  data () {
    return {
      lat: 0,
      lon: 0,
      daily: null
    }
  },
  async created () {
    const { lat, lon } = await apiCoords()
    this.lat = lat
    this.lon = lon
    const { data } = await apiDaily({ lat, lon })
    console.log(data)
  }
}
</script>

<style lang='scss'>

</style>
