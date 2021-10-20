import axios from 'axios'
import {getDate} from '../utils/date'


export const getAllRepos = page => {
    const date = getDate()
    return axios.get(`https://api.github.com/search/repositories?q=${date}&sort=stars&order=desc&page=${page}`)
}