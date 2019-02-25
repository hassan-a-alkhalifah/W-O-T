import React from 'react';
import commentIcon from '../assets/images/comment-icon.png';
import githubIcon from '../assets/images/github-icon.png';

function Footer() {

  const footerWrapperStyles = {
    width: '100%',
    height: '47px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: '0',
    backgroundColor: '#000',
    fontSize: '12px',
    color: '#FFF'
  }

  const footerIconStyles = {
    width: '21px'
  }


  return(
    <div style={footerWrapperStyles}>
      <p>Coded and Designed by Hassan Al-khalifah</p>
      <img src={commentIcon} alt='Comment Icon' style={footerIconStyles}/>
      <a href='https://github.com/hassan-a-alkhalifah' target='_blank'>
        <img src={githubIcon} alt='Github Icon' style={footerIconStyles}/>
      </a>
    </div>
  );
}

export default Footer;
