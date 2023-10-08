import React from 'react'
import '../assets/footer.css'
import github_black from '../assets/github-logo.png'
import github_white from '../assets/github-logow.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="img-container">
            <img src={github_black} alt="" />
        </div>
        <div className='text-container'>
            <p>Inspiration from <a href="https://github.com/jacky-liang">Jacky Liang</a> app <a href="https://github.com/jacky-liang/age-timer">age-timer</a></p> 
        </div>
    </div>
  )
}

export default Footer