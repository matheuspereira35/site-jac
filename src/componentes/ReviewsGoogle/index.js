import React from 'react';
import GoogleReviews from '../ReviewsGoogle/Review';



const CardsReview = () => {
  const placeId = 'ChIJwWC82IsyWpMRITE5cD0xgtA'; // Substitua pelo ID do local desejado

  return (
    <div className='principal-cardsreview'>
      <GoogleReviews placeId={placeId} />
    </div>
  );
};

export default CardsReview;