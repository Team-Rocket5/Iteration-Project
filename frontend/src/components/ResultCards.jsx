import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import building from '../assets/building.jpg';
import Rating from '@mui/material/Rating';
import {createSearchParams, useNavigate } from 'react-router-dom';


const ResultCards = ({ id, name, location, neighborhood, rating }) => {

    const navigate = useNavigate();

    const goToReview = ()=> {
    //e.preventDefault();
    
    //this works 
    // navigate('/landlord', {
    //     state: {landlordID: id}
    //   })
    navigate(`/landlord?ID=${id.toString()}`)
    };

    //alternatively create a link in card <Link to = `landlord/{id}`> 

  return (
    <div className='m-5' onClick={goToReview}>
      <Card sx={{ maxWidth: 345, width: 200 }}>
        <CardActionArea>
          <CardMedia component='img' image={building} alt='building' />
          <CardContent>
            <Typography gutterBottom variant='h6' component='div'>
              {name}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              {location}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              {neighborhood}
            </Typography>
            <Rating name='half-rating' defaultValue={rating} precision={0.5} />
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default ResultCards;
