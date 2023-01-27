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
import axios from 'axios';

const AddReview =()=> {
    //temporary data, waiting for global state
    const landlord = 'James Bond';
    const landlordID = 1;
    const reviewerID = 1;
    

    //adding state to temporarily store form data
    const [checked, setChecked] = React.useState(true);
    const rent_again = !checked;
    const handleChange = (event) => {
        setChecked(event.target.checked);
        console.log(checked);
        console.log('rent_again', rent_again);
    };

    const [formData, setFormData] = useState({
        review: '',
        rating:'',
        date:'',
        address:'',
        reviewerName: '',
        subject: '',

        //data point to be discussed
        picture: '',
    });

    //on Change
    const onChange = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        const {name, value} = e.target
        setFormData((prev) => ({
        ...prev,
        [name]: value,
        }));
    };

    //get current date for review
    const [date, setDate] = useState('');
    const event = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const currentDate = event.toLocaleDateString(undefined, options)
    //hard coded rating
    //const rating = 5; 
    //on Submit
    const onSubmit = async (e) => {
        e.preventDefault();
        setDate(currentDate);
        console.log(date);
        console.log("On Submit for Review fired!")
        const {review, subject, reviewerName, address, rating} = formData;
        console.log('rating onSubmit', rating);
        const response = await axios.post('review', {landlordID, reviewerID, date, review, rent_again, rating, subject, reviewerName, address});
        if(response.data) console.log('success');
        else console.log('error');
        //navigate('/landlord');
    };

    
    return (
        <Card sx={{ maxWidth: 560 }} className="relative pb-5">
            <CardContent >
                <div className='flex py-4 '>
                    <Typography gutterBottom variant="h5" component="div" className='pl-4  text-dark' sx={{width:'75%', color:'dark'}}>
                    {landlord}
                    </Typography>
                    <Rating name="rating" value={formData.rating} precision={0.5} 
                        onChange={onChange
                            // (e, newValue) => {
                            // setRating(Number(e.target.value));
                            // console.log(rating);
                            // }
                        }
                    />
                </div>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                    maxWidth: '95%',
                }}
                noValidate
                autoComplete="on"
                >
                <div className='flex flex-col'>
                    <TextField 
                        id="outlined-basic" 
                        label="Your Name" 
                        variant="outlined" 
                        sx={{width:'40%'}}
                        name='reviewerName'
                        value={formData.reviewerName}
                        required={true}
                        onChange={onChange}
                    />
                    <div className='flex content-center items-center justify-between'>
                        <TextField 
                            id="outlined-basic" 
                            label="Property Address" 
                            variant="outlined" 
                            sx={{width:'40%'}}
                            name='address'
                            value={formData.address}
                            onChange={onChange}
                        />
                        <div className='pl-3 flex items-center justify-end text-dark'>    
                            <span className='w-44 pr-4'>Willing to Rent Again?</span>
                            <FormControlLabel 
                                className='' 
                                control={<Checkbox 
                                name='rent_again'
                                required={true}
                                checked={checked}
                                onChange={handleChange} />} 
                            />
                        </div>
                    </div>
                    <FormControl fullWidth sx={{ m: 1}}>
                        <InputLabel htmlFor="outlined-adornment-amount">Subject</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-amount"
                            label="Amount"
                            name='subject'
                            value={formData.subject}
                            required={true}
                            onChange={onChange}
                        />
                    </FormControl>
                    <FormControl fullWidth sx={{ m: 1 }}>
                        <InputLabel htmlFor="outlined-adornment-amount">Review</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-amount"
                            label="Amount"
                            multiline
                            rows={6}
                            name='review'
                            value={formData.review}
                            required={true}
                            onChange={onChange}
                        />
                    </FormControl>
                </div>        
            </Box>
            </CardContent>
            <CardActions>
                <input type="file" className="block w-full text-sm text-slate-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-olive file:text-dark
                    hover:file:bg-orange ml-4
                "/>
                <button className='ml-3'></button>
                <button size="medium" className="bg-yellow p-3 rounded absolute right-9" onClick={onSubmit}>Add Review</button>
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
