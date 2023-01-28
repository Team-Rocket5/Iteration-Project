import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from "@mui/material/Typography";
import Rating from '@mui/material/Rating';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import VerifiedIcon from '@mui/icons-material/Verified';

const ReviewDetails = ({content}) => {


  const {reviewer_name, rating,subject, date, review} = content;
  // const reviewerName = 'Max Zorin';
  // //const rating = '1.5';
  // const reviewSubject = 'Not a bad place'; 
  // const reviewDate = 'January 1, 2023';
  // const reviewContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
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
            <AccountCircleOutlinedIcon fontSize='large' className='pl-1'/>
            <Typography variant="p" className='p-1 text-xs'>{reviewer_name}</Typography>    
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
        </div>
      </Paper>
      
    </Box>
  );
}

// const ReviewDetails = ({ review }) => {
//   console.log('review: ', review);
//   /*The HTML Tags here are just placeholders so that way we could
// ensure that we were getting the right informationa nd rendering it, 
// so making it pretty and readable will be a whole other task in itself
// */

//   return (
//     <div className="review-details bg-secondary  p-4 rounded-md  text-gray-600 mb-3">
//       <p>
//         <strong className="mr-1">Rating:</strong>
//         {review.rating}/5
//       </p>
//       <p>
//         <strong className="mr-1">Would Rent Again:</strong>
//         {review.would_rent_again > 0 ? '✓' : '𐄂'}{' '}
//       </p>
//       <p>Date: {review.date}</p>
//       <p>
//         <strong className="mr-1">Comments:</strong>
//       </p>
//       <p>{review.text}</p>
//     </div>
//   );
// };

export default ReviewDetails;
