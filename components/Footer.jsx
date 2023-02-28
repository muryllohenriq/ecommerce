import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2023 Muryllo Henrique All rights reserved</p>
      <p className='icons'>
        <a href='https://github.com/muryllohenriq' target='_blank'>
          <AiFillGithub />
        </a>
        <a href='https://www.linkedin.com/in/muryllohenrique/' target='_blank'>
          <AiFillLinkedin />
        </a>
      </p>
    </div>
  )
}

export default Footer