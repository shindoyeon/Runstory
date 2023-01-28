import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import './FeedPersonalButton.css';

const FeedPersonalButton = () => {
  return (
    <div className="button">
      <Link to='/'>  
        <div><FontAwesomeIcon icon={faBars}/></div>
      </Link>
    </div>
  );
}

export default FeedPersonalButton;