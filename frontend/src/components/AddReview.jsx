//if logged in, renders form to submit new review to relevant landlord and updates review components
//if not logged in, prompt user in some way to log in/disallow entry of a new review

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import AttachFileIcon from '@mui/icons-material/AttachFile';

const AddReview =()=> {
    const landlord = 'James Bond';
    return (
        <Card sx={{ maxWidth: 600 }} className="relative pb-10">
            <CardContent >
                <div className='flex py-4 '>
                    <Typography gutterBottom variant="h5" component="div" className='pl-4  text-dark' sx={{width:'75%', color:'dark'}}>
                    {landlord}
                    </Typography>
                    <Rating name="half-rating" defaultValue={0} precision={0.5} 
                        onChange={(event, newValue) => {
                        setValue(newValue);
                        }}
                    />
                </div>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                    maxWidth: '95%',
                }}
                noValidate
                autoComplete="off"
                >
                <div className='flex flex-col'>
                    <TextField id="outlined-basic" label="Your Name" variant="outlined"/>
                    <div className='flex content-center items-center'>
                        <TextField id="outlined-basic" label="Property Address" variant="outlined" sx={{width:'45%'}}/>
                        <div className='pl-10 text-dark'>
                        Willing to Rent Again? <FormControlLabel className='pl-4' control={<Checkbox defaultChecked />} />
                        </div>
                    </div>
                    <FormControl fullWidth sx={{ m: 1 }}>
                        <InputLabel htmlFor="outlined-adornment-amount">Subject</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-amount"
                            label="Amount"
                        />
                    </FormControl>
                    <FormControl fullWidth sx={{ m: 1 }}>
                        <InputLabel htmlFor="outlined-adornment-amount">Review</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-amount"
                            label="Amount"
                            multiline
                            rows={6}
                        />
                    </FormControl>
                </div>        
            </Box>
            </CardContent>
            <CardActions>
                <button className='ml-3'><AttachFileIcon fontSize='large'/></button>
                <button size="medium" className="bg-yellow p-3 rounded absolute right-9">Add Review</button>
            </CardActions>
        </Card>
        
    )
}
// import Container from '../css/Container.jsx';
// import Submit from '../css/form/Submit.jsx';
// import Title from '../css/form/Title.jsx';
// import FormInput from '../css/form/FormInput.jsx';
// const AddReview = ({ landlord }) => {
    
//     const [id, setId] = useState(landlord._id)
//     const [rating, setRating] = useState('') //should be out of 5 (don't accept a value higher in submit, so throw error)
//     const [would_rent_again, setRentAgain] = useState('') //should be yes/no boolean
//     const [text, setText] = useState('') // bigger text box
//     const [date, setDate] = useState('') // MM/YY Format
//     const [submitted, setSubmitted] = useState(false)
//     const [error, setError] = useState(null)

//     const handleSubmit = async (e) => {
//         e.preventDefault()
//         would_rent_again === true ? setRentAgain(1) : setRentAgain(0)
//         const review = {id, text, rating, date, would_rent_again}

//         const response = await fetch('/api/postReviews', {
//             method: 'POST',
//             body: JSON.stringify(review),
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         })
//         const json = await response.json()

//         if (!response.ok) {
//             setError(json.error);
//         }
//         if (response.ok) {
//             setRating('') // int
//             setRentAgain('') // 1 or 0
//             setText('') // str
//             setDate('') // str
//             setError(null)
//             console.log('new review added', json)
//             setSubmitted(true);
//             setInterval(setSubmitted(false), 3000)
//         }
//     }
//     return (

//         <div className="inset-0  flex justify-center items-center ">
//             <Container>

//             {/* <div className=" bg-primary flex justify-center items-center h-screen -z-10 "> */}
//             <form
//                 onSubmit={handleSubmit}
//                 className={' bg-white drop-shadow rounded p-6 space-y-6 w-80'}
//             >
//           <Title>Add Review</Title>
//           <FormInput
//             value={rating}
//             onChange={(e) => setRating(e.target.value)}
//             label="Rating:"
//             placeholder="_"
//             name="rating"
//           />
//           <FormInput
//             value={would_rent_again}
//             onClick={(e) => setRentAgain(true)}
//             label="Rent Again"
//             placeholder="_"
//             name="RentAgain"
//             type="checkbox"
//           />
//           <FormInput
//             value={text}
//             onChange={(e) => setText(e.target.value)}
//             label="Comments"
//             placeholder="_"
//             name="Comments"
//             type="Text"
//           />
//           <Submit value="Submit" />
//         {error && <div className="error">{error}</div>}
//         {submitted && <h3>Submission success!</h3>}  
//         </form> 

//             </Container>
//             {error && <div className="error">{error}</div>}
//         </div> 
//     )
// }

export default AddReview;
