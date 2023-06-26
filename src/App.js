import React, { useState } from 'react';
import allMovies from './data';
import categories from './categories';
import MovieCard from './components/MovieCard';

const App = () => {
  const [typeOfMovie, setTypeOfMovie] = useState('komedie');
  const [mainPage, setMainPage] = useState(true);

  const vysledneFilmy = allMovies.filter((oneMovie) => {
    return oneMovie['category'] === typeOfMovie;
  });

  return (
    <div>
      {mainPage ? (
        <div className=''>
          <h1 className='one-movie'>Netflix</h1>
          <button className='one-button' onClick={() => setMainPage(false)}>
            Categories
          </button>
        </div>
      ) : (
        <div>
          <div className='all-buttons'>
            {categories.map((oneCategory, index) => {
              return (
                <button
                  className='one-button'
                  key={index}
                  onClick={() => setTypeOfMovie(oneCategory)}
                >
                  {oneCategory}
                </button>
              );
            })}
          </div>
          <div className='all-movies'>
            {vysledneFilmy.map((oneMovie) => {
              const { id, image, title, age, tags, description } = oneMovie;

              return (
                <MovieCard
                  key={id}
                  image={image}
                  title={title}
                  age={age}
                  tags={tags}
                  description={description}
                />
              );
            })}
          </div>
          <button className='back-button' onClick={() => setMainPage(true)}>
            Back
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
