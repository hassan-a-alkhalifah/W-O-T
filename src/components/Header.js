import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import homeIcon from '../assets/images/home-icon.png';
import archiveIcon from '../assets/images/archive-icon.png';
import finishIcon from '../assets/images/finish-icon.png';
import deleteIcon from '../assets/images/delete-icon.png';

function Header(props) {

  const headerStyles = {
    width: '100%',
    position: 'fixed'
  }
  const headerTitleWrapperStyles = {
    height: '68px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    fontSize: '26px',
    color: '#FFF'
  }
  const headerIconsWrapperStyles = {
    height: '47px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#DBDBDB'
  }
  const homeIconStyles = {
    width: '29px',
    height: '29px'
  }
  const exerciseArchiveIconStyles = {
    width: '30px',
    height: '26px'
  }
  const finishIconStyles = {
    width: '25px',
    height: '25px'
  }
  const deleteIconStyles = {
    width: '30px',
    height: '30px'
  }

  return(
    <div style={headerStyles}>
      <div style={headerTitleWrapperStyles}>
        <h1>W-O-T</h1>
      </div>
      <div style={headerIconsWrapperStyles}>
        <Link to='/'>
          <img src={homeIcon} alt='Home Icon' style={homeIconStyles}/>
        </Link>
        <Link to='/exerciseArchive'>
          <img src={archiveIcon} alt='Archive Icon' style={exerciseArchiveIconStyles}/>
        </Link>
        <img src={finishIcon} alt='Finish Icon' style={finishIconStyles}/>
        <img src={deleteIcon} alt='Delete Icon' style={deleteIconStyles}/>
      </div>
    </div>
  );
}

export default connect()(Header);
