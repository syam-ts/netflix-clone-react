import axios from 'axios'


//instnce endpoint append the given route
const instance: any = axios.create({
    baseURL: "https://api.themoviedb.org/3"
})



export default instance