import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import StarRating from '../Star/StarRating';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./CardsReview.css";

const GoogleReviews = ({ placeId }) => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          '/maps/api/place/details/json',
          {
            params: {
              place_id: placeId,
              key: process.env.REACT_APP_GOOGLE_API_KEY,
              fields: 'reviews',
            },
          }
        );
        setReviews(response.data.result.reviews);
      } catch (err) {
        setError(err.toString());
      }
    };

    fetchReviews();
  }, [placeId]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  const settings = {
    className: "card-carousel",
    useCss: true,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: false,
    adaptiveHeight: true,
    centerMode: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='card-review'>
      {reviews.length === 0 ? (
        <p>Nenhuma avaliação encontrada.</p>
      ) : (
        <Slider {...settings}>
          {reviews.map((review, index) => (
            <div className='card-comentarios' key={index}>
              <div className='topo-card'>
                <img src={review.profile_photo_url} alt='foto_comentario'/>
                <div>
                  <h3>{review.author_name}</h3>
                  <StarRating rating={review.rating} />
                </div>
              </div>
              <p>{review.text}</p>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default GoogleReviews;
