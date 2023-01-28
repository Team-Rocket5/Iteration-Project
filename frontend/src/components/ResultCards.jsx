import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import  building from '../assets/building.jpg';
import  building2 from '../assets/building2.jpg';
import  building3 from '../assets/building3.jpg';
import  building4 from '../assets/building4.jpg';
import  building5 from '../assets/building5.jpg';
import  building6 from '../assets/building6.jpg';
import  building7 from '../assets/building7.jpg';
import  building8 from '../assets/building8.jpg';
import  building9 from '../assets/building9.jpg';
import Rating from '@mui/material/Rating';
import {createSearchParams, useNavigate } from 'react-router-dom';


const buildings = [building, building2, building3, building4, building5, building6, building7, building8, building9]

let buildingDisplay = buildings[Math.floor(9 * Math.random())];



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
          <CardMedia component='img' image={buildings[Math.floor(9 * Math.random())]} alt='building' className='max-h-36' />
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
