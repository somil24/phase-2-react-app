import axios from 'axios'

export const Axios = axios.create({
  baseURL: 'http://www.mrexy.com/detectFace',
  headers: {
    'Content-Type': 'multipart/form-data',
  },
})