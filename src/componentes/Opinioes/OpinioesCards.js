import "./cards.css";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt, faStar as faStarOutline } from '@fortawesome/free-solid-svg-icons';
import DoctoraliaIcon from "../UI/doctoralia";
import GoogleIcon from "../UI/google";

const OpinioesCards = ({ author, content, rating, source }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FontAwesomeIcon key={i} icon={faStar} />);
      } else if (i - rating < 1) {
        stars.push(<FontAwesomeIcon key={i} icon={faStarHalfAlt} />);
      } else {
        stars.push(<FontAwesomeIcon key={i} icon={faStarOutline} />);
      }
    }
    return stars;
  };

  const renderSourceIcon = () => {
    switch (source) {
      case 'google':
        return <GoogleIcon />;
      case 'doctoralia':
        return <DoctoraliaIcon /> 
        
      default:
        return null;
    }
  };

  let google = 'https://www.google.com/search?q=psic%C3%B3loga+jacqueline+guimar%C3%A3es'
  let doctoralia = 'https://www.doctoralia.com.br/jacqueline-guimaraes-3/psicologo/brasilia'
  const renderSourceLink = () => {
      switch (source) {
        case 'google': 
          return google
        case 'doctoralia':
          return doctoralia
        default: 
        return null
      }
  }

  return (
    <div className="review-card">
      <div className="source-icon"><a target="_blank" rel="noreferrer" href={renderSourceLink()}>{renderSourceIcon()}</a></div>
      <p>{content}</p>
      <h3>– {author}</h3>
      <div className="rating">{renderStars()}</div>
    </div>
  );
};

export default OpinioesCards;
