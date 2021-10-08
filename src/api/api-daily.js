import axios from 'axios'

const appid = '170deeb7b5aa46780d060e302f27ad70'
const url = 'https://api.openweathermap.org/data/2.5/weather'
// const icons = ['https://openweathermap.org/img/wn/', '@2x.png']
const params = { units: 'metric', appid }

const apiDaily = (lat, lon) => {
  params.lat = lat
  params.lon = lon
  return axios.get(url, { params })
}

export default apiDaily
