import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import ReactPlayer from 'react-player'
// import Vimeo from '@u-wave/react-vimeo';

export const Modal = ({details,video,show}) => {
    return (
        <div className='containerModal'>
            <div className='modal modalEffect'>
                <div className='video'>
                    <ReactPlayer url={`https://www.youtube.com/watch?v=${video}`} width='100%' height='100%' playing={show}/>
                </div>
                <div className='content'>
                    <td className='columnFirstSide'>
                        <div className='contentLeftSide'>
                            <h2>{details.title}</h2>
                            <p className='parag'>{details.overview}</p>
                            <label>{details.vote_average}</label>
                        </div>
                    </td>
                    <td className='columnSecondSide'>
                        <div  className='contentRightSide'>
                            { details.genre_ids && 
                                details.genre_ids.map((val,i) => {
                                    return(
                                        <ul key={i}>
                                            <li>{val}</li>
                                        </ul>
                                    )
                                })
                            }
                        </div>
                    </td>
                    <td className='columnThirdSide'>
                        <button className='watch'>WATCH <span>&nbsp;<FontAwesomeIcon icon={faPlay}/></span></button>
                    </td>
                </div>
            </div>
        </div>
    )
}
