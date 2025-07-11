import axios from "axios";

//api instance;
const Api = axios.create({
    baseURL: "http://www.omdbapi.com"
});


export const getRequest = (value, page) => {
    return Api.get(`/?i=tt3896198&apikey=d0ed228b&s=${value}&page=${page}`);
}

// http://www.omdbapi.com/?i=tt3896198&apikey=d0ed228b&s=avengers&page=1