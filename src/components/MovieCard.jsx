import React from 'react';

const MovieCard = ({ image, title, age, tags, description }) => {
  return (
    <div className='one-movie'>
      <img src={image} alt='' />
      <h2>{title}</h2>
      <p>{age}</p>
      <p>{tags}</p>
      <p>{description}</p>
    </div>
  );
};

export default MovieCard;
