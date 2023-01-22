import React from "react";
import Card from '@mui/material/Card';
import { CardContent, TextField } from "@mui/material";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

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
  ];

const AddLandlordNew = () => {
    return (
        <Card sx={{ maxWidth: 400 }}>
            <CardContent>
                <Box
                    component="form"
                    sx={{
                      '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <Grid
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        gap={1}
                    >
                         <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
                            Add a New Landlord
                        </Typography>
                        <TextField
                        required
                        id="outlined-required"
                        label="Landlord Name"
                        />
                        <TextField
                            id="outlined-select-city"
                            select
                            label="Select City"
                        >
                            {cities.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.value}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField
                            id="outlined-select-neighborhood"
                            select
                            label="Select Neighborhood"
                        >
                            {neighborhoods.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.value}
                                </MenuItem>
                            ))}
                        </TextField>
                        <Button variant="contained" >Submit</Button>
                        </Grid>
                </Box>
            </CardContent>
        </Card>
    );
};

export default AddLandlordNew;