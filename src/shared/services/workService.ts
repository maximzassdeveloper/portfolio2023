import axios from 'axios'
import { IWork } from '../types'

const DEV_BASE_URL = 'http://192.168.1.69:3000'
const PROD_BASE_URL = 'https://maximzass.ru'
const BASE_URL = process.env.NODE_ENV === 'production' ? PROD_BASE_URL : DEV_BASE_URL
const API_URL = `${BASE_URL}/api`

axios.defaults.baseURL = API_URL

interface GetWorkResponse {
  work: IWork | null
  nextWork: IWork | null
}

export const workService = {
  async getWorks() {
    return axios.get<IWork[]>(`/works`)
  },

  async getWork(slug: string) {
    return axios.get<GetWorkResponse>(`/works/${slug}`)
  },
}
