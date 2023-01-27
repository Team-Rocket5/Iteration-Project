import * as React from 'react';
import { useState, useMemo } from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FormHelperText from '@mui/material/FormHelperText';
import Rating from '@mui/material/Rating';
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";
import { useFormControl } from '@mui/material/FormControl';



const SearchFilterOld =()=>{
    const [nameSearch, setNameActive] = useState(false);
    const [citySearch, setCityActive] = useState(false);
    //const [disable, setDisable] = useState("false");
    const navigate = useNavigate();
    console.log('nameActive changed', nameSearch);
    console.log('cityActive changed', citySearch);
    
    const nameActive=(e)=>{
        setNameActive(true);
        setCityActive(false);
        document.getElementById('cityInput').value = '';
        document.getElementById('neighborInput').value = '';
    }

    const cityActive=(e)=>{
        setNameActive(false);
        setCityActive(true);
        document.getElementById('landlordInput').value = '';
    }
    

    return (
        <Card sx={{ minWidth: 275, maxWidth: 800 }} className="relative pb-10">
            <CardContent>
                <div className='ml-2 pt-2 mt-4'>
                    <button className='pt-3 pl-6 text-dark' onClick={cityActive}>Search By City and Neighborhood</button>
                    <div className='pl-3 rounded text-center flex items-baseline ml-1'>
                        <FormControl sx={{ mx: 1, pt:2, minWidth: 120, width: '40%' }} >
                            {/* <InputLabel id="demo-simple-select-helper-label">City</InputLabel> */}
                            <TextField id="cityInput" onFocus={cityActive} disabled={nameSearch} variant="outlined" />
                            <FormHelperText>City Name</FormHelperText>
                        </FormControl>
                        <span className='px-8 text-slate-400 text-sm'>AND</span>
                        <FormControl sx={{ m: 1, minWidth: 120, width: '40%'}}>
                        <TextField  id="neighborInput" variant="outlined"  onFocus={cityActive} disabled={nameSearch}/>
                            <FormHelperText> Neighborhood</FormHelperText>
                        </FormControl>
                    </div>
                </div>
                <Typography color="text.secondary" className="p-1 rounded text-center">
                -or-
                </Typography>

                {/* <TextField fullWidth sx={{ m: 1, pl: 1, width: '97%' }} id="outlined-basic" label="Outlined" variant="outlined" /> */}

                <div className='ml-2 p-2'>
                    <button className='p-4 pb-4 text-dark' onClick={nameActive}>Search By Landlord Name</button>
                    <FormControl  fullWidth sx={{pl:2, width: '97%' }} variant="outlined">
                        {/* <InputLabel htmlFor="outlined-adornment-amount">Search By Name</InputLabel> */}
                        <TextField id="landlordInput" onFocus={nameActive} disabled={citySearch} variant="outlined" />
                        <FormHelperText id="outlined-weight-helper-text">Enter Landlord Name</FormHelperText>
                    </FormControl>
                </div>
                

            </CardContent>
            <CardActions>
                <div className='flex ml-10 text-dark'>
                    Filter By: 
                    <Rating
                        name="simple-controlled"
                        value={1.5}
                        precision={0.5}
                        onChange={(event, newValue) => {
                        setValue(newValue);
                        }}
                        className='pl-4'
                    />
                </div>
                <button size="medium" className="bg-yellow p-3 rounded absolute right-11 px-10">Search</button>
            </CardActions>
            <div className="text-center pt-10 text-sm">
                <span>Don't see the landlord you're looking for? </span>
                <button size="medium" className='underline decoration-solid' onClick={() => navigate('/addLandlordNew')}>Add a landlord</button>
            </div>
        </Card>
       
    );
};

export default SearchFilterOld;

{/* <form class="w-full max-w-lg">
<div class="flex flex-wrap -mx-3 mb-2">
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <div class="relative">
            <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
             <option>Test 1</option>
             <option>Test 2</option>
             <option>Test 3</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
        </div>
    </div>
</div>
</form> 
*/}

{/* 

// const [city, setCity] = React.useState(['Toronto', 'New York', 'Houston', 'Poolesville', 'Boston']);
// const [neighborhood, setNeighborhood] = React.useState(['Bayview Village', 'Danforth', 'Regent Park', 'Moss Park', 'Annex']);
// const [value, setValue] = React.useState(0);
// const handleChange = (event) => {
//     setCity(event.target.value);
// };

<FormControl sx={{ m: 1, minWidth: 120, width: '48%' }} >
<InputLabel id="demo-simple-select-helper-label">City</InputLabel>
    <Select
        id='selectCity'
        displayEmpty
        inputProps={{ 'aria-label': 'Without label' }}
        onChange={handleChange}
    >
    <MenuItem value="">
        <em>None</em>
    </MenuItem>
    <MenuItem value={city[0]}>{city[0]}</MenuItem>
    <MenuItem value={city[1]}>{city[1]}</MenuItem>
    <MenuItem value={city[2]}>{city[2]}</MenuItem>
    <MenuItem value={city[3]}>{city[3]}</MenuItem>
    <MenuItem value={city[4]}>{city[4]}</MenuItem>
    </Select>
    <FormHelperText>Please select your city</FormHelperText>
</FormControl>
<FormControl sx={{ m: 1, minWidth: 120, width: '47%'}}>
    <Select
        value={neighborhood}
        onChange={handleChange}
        displayEmpty
        inputProps={{ 'aria-label': 'Without label' }}
    >
    <MenuItem value="">
        <em>None</em>
    </MenuItem>
    <MenuItem value={neighborhood[0]}>{neighborhood[0]}</MenuItem>
    <MenuItem value={neighborhood[1]}>{neighborhood[1]}</MenuItem>
    <MenuItem value={neighborhood[2]}>{neighborhood[2]}</MenuItem>
    <MenuItem value={neighborhood[3]}>{neighborhood[3]}</MenuItem>
    <MenuItem value={neighborhood[4]}>{neighborhood[4]}</MenuItem>
    </Select>
    <FormHelperText>Please select your Neighborhood</FormHelperText>
</FormControl> */}