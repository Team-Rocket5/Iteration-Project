import React, { useState } from 'react';
import Card from '@mui/material/Card';
import { CardContent, TextField } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import axios from 'axios';

const cities = [
  {
    value: 'Houston',
  },
  {
    value: 'Austin',
  },
  {
    value: 'Marfa',
  },
  {
    value: 'Terlingua',
  },
];

const neighborhoods = [
  {
    value: 'Heights',
  },
  {
    value: 'Museum District',
  },
  {
    value: 'Midtown',
  },
  {
    value: 'Downtown',
  },
  {
    value: 'Uptown',
  },
];



const AddLandlordNew = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    landlord: '',
    city: '',
    neighborhood: '',
  });

  //on Change
  const onChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  //on Submit
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log('In side add landlord!');
    const { landlord, city, neighborhood } = formData;
    const sentData = {name: landlord, location: city, neighborhood: neighborhood}
    
    const response = await axios.post('landlord', sentData);
    if (response.data) console.log(response.data);
    else console.log('error');
    navigate('/home');
  };


  return (
    <Card sx={{ maxWidth: 400 }} className='w-[100%] mx-auto mt-64'>
      <CardContent>
        <Box
          component='form'
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete='off'
        >
          <Grid
            container
            direction='column'
            justifyContent='center'
            alignItems='center'
            gap={1}
          >
            <Typography
              sx={{ fontSize: 16 }}
              color='text.secondary'
              gutterBottom
            >
              Add a New Landlord
            </Typography>
            <TextField
              required
              id='outlined-required'
              label='Landlord Name'
              value={formData.landlord}
              name='landlord'
              onChange={onChange}
            />
            <TextField
              id='outlined-select-city'
              select
              label='Select City'
              value={formData.city}
              name='city'
              onChange={onChange}
            >
              {cities.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.value}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id='outlined-select-neighborhood'
              select
              label='Select Neighborhood'
              value={formData.neighborhood}
              name='neighborhood'
              onChange={onChange}
            >
              {neighborhoods.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.value}
                </MenuItem>
              ))}
            </TextField>
            <button
              size='medium'
              className='bg-yellow p-3 rounded right-9 px-8'
              onClick={onSubmit}
            >
              Submit
            </button>
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
};

export default AddLandlordNew;
