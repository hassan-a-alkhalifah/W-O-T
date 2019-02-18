import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import homeIcon from '../assets/images/home-icon.png';
import archiveIcon from '../assets/images/archive-icon.png';
import finishIcon from '../assets/images/finish-icon.png';
import deleteIcon from '../assets/images/delete-icon.png';

function Header(props) {
  return(
    <div>
      <div>
        <h1>W-O-T</h1>
      </div>
      <div>
        <Link to='/'>
          <img src={homeIcon} alt='Home Icon'/>
        </Link>
        <Link to='/exerciseArchive'>
          <img src={archiveIcon} alt='Archive Icon'/>
        </Link>
        <img src={finishIcon} alt='Finish Icon'/>
        <img src={deleteIcon} alt='Delete Icon'/>
      </div>
    </div>
  );
}

export default connect()(Header);
