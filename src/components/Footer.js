import React from 'react';
import commentIcon from '../assets/images/comment-icon.png';
import githubIcon from '../assets/images/github-icon.png';

function Footer() {
  return(
    <div>
      <p>Coded and Designed by Hassan Al-khalifah</p>
      <img src={commentIcon} alt='Comment Icon'/>
      <a href='https://github.com/hassan-a-alkhalifah' target='_blank'>
        <img src={githubIcon} alt='Github Icon'/>
      </a>
    </div>
  );
}

export default Footer;
