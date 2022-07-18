import React, { useState, useEffect } from 'react'
import { Header } from './header'
import { Footer } from './footer'
import { MovieList } from './movieList'
import ImagesList from '../api/ImagesController'
import './home.css'

export const Movies = () => {
  const [banner, setBanner] = useState([]);
  const [images, setImages] = useState([]);
  const URL_PATH = 'https://image.tmdb.org/t/p/original'

  const getBanner = v => {
    setBanner(URL_PATH + v.backdrop_path)
  }

  useEffect(() => {
    ImagesList.NowPlayingImages((res) => {
      setImages(res.results)
    })
  }, []);

  return (
    <>
        <div id='backgroundSlide' className='bgSlideShow' style={{backgroundImage: `linear-gradient(black,transparent,black), url(${banner})`}}>
        </div>
        <Header/>
        <MovieList getBanner={getBanner} getSlide={images}/>
        <Footer/>
    </>
  )
}
