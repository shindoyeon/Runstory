import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import './GoSettingButton.css';

const GoSettingButton = () => {
  return (
    <div className="button">
      <Link to='/settingIntro'>  
        <div><FontAwesomeIcon icon={faBars}/></div>
      </Link>
    </div>
  );
}

export default GoSettingButton;