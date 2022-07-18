import React, { useState } from 'react'
import Slider from "react-slick";
import $ from 'jquery'
import { Modal } from './modal'
import ImagesList from '../api/ImagesController'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

export const MovieList = ({getBanner,getSlide}) => {
  const [index, setIndex] = useState(0)
  const [open, setOpen] = useState(false)
  const [details, setDetails] = useState({})
  const [keyvideo, setKeyVideo] = useState([])
  const URL = 'https://image.tmdb.org/t/p/w500' 

  const NextArrow = ({ onClick }) => {
    return (
      <div className='arrow next' onClick={onClick}>
        <FontAwesomeIcon icon={faAngleRight}/>
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className='arrow prev' onClick={onClick}>
        <FontAwesomeIcon icon={faAngleLeft}/>
      </div>
    );
  };

  const modal = (e,param) => {
    setOpen(true)
    setKeyVideo('')
    setTimeout(function() {
      $('.modal').toggleClass('modalShow')
      setDetails(param)
      ImagesList.GetVideo(param.id, async function (resp) {
        for(var i=0; i<resp.results.length; i++){
          if(resp.results[i].type === 'Trailer'){
            setKeyVideo(resp.results[i].key)
          }
        }
      })
    }, 300)
    e.preventDefault();
  }

  let settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    cssEase:'linear',
    centerPadding: 0,
    slidesToShow: 5,
    speed: 500,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
    beforeChange: (current,next) => setIndex(next)
  }

  $(document).on('click', function(e) {
    if (!$(e.target).closest(".modal, .activeSlide").length) {
      setOpen(false)
      $("body").find('.modal').removeClass('modalShow')
      $('#contain').addClass('SlideClose')
      $('#contain').addClass('containerSlide')
    } else{
      $('#contain').removeClass('SlideClose')
    }
  })

  return (
    <>
      <Modal details={details} video={keyvideo} show={open}/>
      <div className='sliderDiv'>
        <Slider {...settings}>
          { getSlide && 
              getSlide.map((value, idx) => {
                if(idx === index){
                  getBanner(value)
                  return  (
                    <div key={value.id}>
                      <div className={`glass1 ${idx === index ? 'slide activeSlide' : 'slide'}`} onClick={event => modal(event,value)}>
                        <div id='contain' className={open ? 'SlideOpen' : 'containerSlide'}>
                          <div className='front'>
                            <div className='cover'>
                              <img src={URL + value.poster_path} alt='' className='img'/>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                } else{
                  return  (
                    <div key={value.id}>
                      <div className={`glass1 ${idx === index ? 'slide activeSlide' : 'slide'}`}>
                        <div className='containerSlide'>
                          <div className='front'>
                            <div className='cover'>
                              <img src={URL + value.poster_path} alt='' className='img'/>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }
            })
          }
        </Slider>
      </div>
    </>
  )
}
