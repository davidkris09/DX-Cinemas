import axios from 'axios'
import { Component } from 'react'

class ImagesController extends Component{
    NowPlayingImages = function (callback) {
        axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=ab082e0f7b61afb10990a73a747055e0&language=en-US&page=1')
        .then((res)=>{
            return callback(res.data)
        })
        .catch(error=>{
            if(error.response){
                return callback(error.response.data.message)
            } else if(error.request){
                return callback(error.request)
            } else{
                return callback('Error', error.message)
            }
        })
    }

    GetVideo = async (param, callback) => {
        const movieID = param
        axios.get(`https://api.themoviedb.org/3/movie/${movieID}/videos?api_key=ab082e0f7b61afb10990a73a747055e0&language=en-US`)
        .then((res)=>{
            return callback(res.data)
        })
        .catch(error=>{
            if(error.response){
                return callback(error.response.data.message)
            } else if(error.request){
                return callback(error.request)
            } else{
                return callback('Error', error.message)
            }
        })
    }
}

export default new ImagesController();