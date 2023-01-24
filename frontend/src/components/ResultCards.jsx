import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import building from '../assets/building.jpg';
import Rating from '@mui/material/Rating';

const ResultCards = () => {
return (
  <div className='m-5'>
    <Card sx={{ maxWidth: 345, width: 200 }}>
      <CardActionArea>
        <CardMedia component='img' image={building} alt='building' />
        <CardContent>
          <Typography gutterBottom variant='h6' component='div'>
            Landlord: James Bond
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            Address: 007 @ MI6 Headquarters
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            Neighborhood: Southwark
          </Typography>
          <Rating name='half-rating' defaultValue={4.5} />
        </CardContent>
      </CardActionArea>
    </Card>
  </div>
);
}

export default ResultCards