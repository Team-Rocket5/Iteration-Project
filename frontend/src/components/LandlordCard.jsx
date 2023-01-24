//renders multiple of these upon search in home page if they fit search criteria
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import building from '../assets/building.jpg';


const LandlordCard = () => {
  const landlord = 'James Bond';
  return (
    <Card sx={{ maxWidth: 600, minWidth: 400 }} className='relative pb-10'>
      <div className='flex flex-row justify-around items-center'>
        <CardMedia
          component='img'
          sx={{ maxWidth: 100 }}
          image={building}
          alt='building'
          className='rounded-full pt-10'
        />
        <Rating name='half-rating' defaultValue={4} />
      </div>
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          Landlord Name
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          Best place I have ever lived in!!!!
        </Typography>
      </CardContent>
    </Card>
  );
};





// import React from 'react';
// import { Link } from 'react-router-dom';

// const LandlordCard = ({ landlord }) => {
//   return (
//     <div className="landlordCards bg-secondary  p-4 rounded-md  text-gray-600 ">
//       <h4 className="font-bold text-xl">{landlord.name}</h4>
//       <td>
//         <div className="flex space-x-1">
//           <div className="font-medium">Location: </div>
//           <p> {landlord.location}</p>
//         </div>
        
//         <div className="flex ">
//           <div className="font-medium mr-1">Rating: </div>
//           {landlord.averageRating ? landlord.averageRating : 'N/A'}
//         </div>
//       </td>

//       {/* <strong className="font-medium">Would Rent Again: </strong>
//         {landlord.would_rent_again} */}

//       <div className="flex flex-col items-end">
//         <Link
//           to="/landlord"
//           state={{ landlord: landlord, from: 'LandlordCard' }}
//           className="text-gray-800 text-md "
//         >
//           <button
//             type="button"
//             className="cursor-pointer w-full py-2 text-gray-600 hover:text-dark-purple"
//           >
//             See Landlord Reviews
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// };

export default LandlordCard;
