import theme from '../configs/theme';
import { Card, Typography } from '@mui/material';

const MovieCard = ({ image, title, age, tags, description }) => {
  return (
    <Card
      sx={{
        background: theme.palette.secondary.dark,
        color: theme.palette.tertiary.main,
        p: '0.5rem',
      }}
    >
      <img src={image} alt='' />
      <Typography variant='h4'>{title}</Typography>
      <Typography variant='body1'>{age}</Typography>
      <Typography variant='body1' sx={{ textDecoration: 'underline' }}>
        {tags}
      </Typography>
      <Typography variant='subtitle1' sx={{ fontStyle: 'italic' }}>
        {description}
      </Typography>
    </Card>
  );
};

export default MovieCard;
