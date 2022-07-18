import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export const Header = () => {
  return (
    <div className='container'>
        <header className='header'>
            <div className='leftside'>
                <label className='D'>D<span><label className='X'>X</label></span></label>
            </div>
            <div className='rightside'>
              <span>
                <div className='searchDiv'>
                  <input className='bar' type='text' placeholder='Search...'/>
                  <i className='search'><FontAwesomeIcon icon={faMagnifyingGlass}/></i>
                </div>
                <Link to="/"><label className='rightnav mv'>Movies</label></Link>
                <label className='rightnav sr'>Series</label>
                <label className='rightnav gn'>Genres</label>
                <label className='btn'>SIGN IN</label>
              </span>
            </div>
        </header>
    </div>
  )
}
