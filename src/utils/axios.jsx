// axios ko bhi out source kr diya tabki bar bar object create krke use na krna pade
import axios from "axios";

const instance = axios.create({
    baseURL:'https://fakestoreapi.com/'
})

export default instance;