import React, { useState } from 'react';
import allMovies from './data';
import categories from './categories';
import MovieCard from './components/MovieCard';
import { ThemeProvider } from '@mui/material/styles';
import theme from './configs/theme';
import { Box, Button, Typography } from '@mui/material';

const App = () => {
  const [typeOfMovie, setTypeOfMovie] = useState('komedie');
  const [mainPage, setMainPage] = useState(true);

  const vysledneFilmy = allMovies.filter((oneMovie) => {
    return oneMovie['category'] === typeOfMovie;
  });

  return (
    <ThemeProvider theme={theme}>
      {mainPage ? (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            background: theme.palette.secondary.main,
            color: theme.palette.tertiary.main,
          }}
        >
          <Typography variant='h2' sx={{ color: theme.palette.primary.main }}>
            Netflix
          </Typography>
          <Button variant='contained' onClick={() => setMainPage(false)}>
            Categories
          </Button>
        </Box>
      ) : (
        <div>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
            }}
          >
            {categories.map((oneCategory, index) => {
              return (
                <Box>
                  <Button
                    sx={{ marginLeft: '1rem' }}
                    variant='contained'
                    key={index}
                    onClick={() => setTypeOfMovie(oneCategory)}
                  >
                    {oneCategory}
                  </Button>
                </Box>
              );
            })}
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
            }}
          >
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
          </Box>
          <Button variant='contained' onClick={() => setMainPage(true)}>
            Back
          </Button>
        </div>
      )}
    </ThemeProvider>
  );
};

export default App;
