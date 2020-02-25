import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://react-my-burger-701f0.firebaseio.com/'
})

export default instance