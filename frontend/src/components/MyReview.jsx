//for displayingin Dashboard

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from "@mui/material/Typography";
import Rating from '@mui/material/Rating';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import VerifiedIcon from '@mui/icons-material/Verified';

const myReview = ({content}) => {

const {name, subject, review, rating, landlord_id, rent_again, date, address} = content; 
const link = `/landlord?ID=${landlord_id.toString()}`
  return (
        <Box
          sx={{
            display: 'flex flex-col',
            flexWrap: 'wrap',
            '& > :not(style)': {
              m: 1,
              width: 500,
              height: 160,
            },
          }}
        >
          <Paper >
            <div className='flex-col m-2 p-2' >
              <div>
              <Link to={link} >
                <div className='ml-2 mb-1 text-dark text-sm underline decoration-olive decoration-2 underline-offset-4 hover:font-bold'>
                  <h4>Landlord : {name} </h4>
                </div>
              </Link>
                <AccountCircleOutlinedIcon fontSize='large' className='pl-1'/>
                <Typography variant="p" className='text-xs pl-2'>Reviewed on {date}  |  Verified</Typography>
                <VerifiedIcon fontSize='xs' className='pl-1' style={{ fill: '#0072ea' }} />      
              </div>
              <div className='pl-1 flex items-center'>
                <div >
                <Rating name="read-only" value={rating} precision={0.5}  size="small" className='items-center' readOnly />
                </div>
                <Typography variant="p" className='text-sm font-bold pl-3'>{subject}</Typography>    
              </div>
              <div className='overflow-y-auto max-h-20 ml-2 mt-1'>
                <Typography variant="p" className='text-sm' flexWrap='row'>{review}</Typography> 
              </div>
              <button className='mt-3 mx-2 px-5 text-sm bg-olive rounded'>Edit</button>
              <button className='mt-3 mx-2 px-4 text-sm bg-orange rounded'>Delete</button>
            </div>
          </Paper>
          
        </Box>
      );
    }
  
  export default myReview;