import React from 'react';
import { TextField, Select, MenuItem, FormControl, InputLabel, Button, Grid, Container, Typography } from '@mui/material';

const MMRequestForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <Container maxWidth="xl">
      <Typography variant="h4" align="center" gutterBottom>
        Form
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <TextField label="Total No of Products" fullWidth />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField label="Weight (In Tons)" fullWidth />
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Pickup Location</InputLabel>
              <Select>
                <MenuItem value="default">Default Location</MenuItem>
                <MenuItem value="other">Other Location</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField label="Pickup Address" multiline rows={4} fullWidth />
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Pickup Country</InputLabel>
              <Select>
              <MenuItem value="other">India</MenuItem>
                <MenuItem value="other">United States</MenuItem>
                <MenuItem value="other">UK</MenuItem>
                <MenuItem value="other">Japan</MenuItem>
                <MenuItem value="other">Africa</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Pickup State</InputLabel>
              <Select>
                {/* Add dropdown options for Pickup State */}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField label="Pickup City" fullWidth />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField label="Drop Location Address Line 1" fullWidth />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField label="Drop Location Address Line 2" fullWidth />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField label="Drop Location Address Line 3" fullWidth />
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Drop Location Country</InputLabel>
              <Select>
              <MenuItem value="other">India</MenuItem>
                <MenuItem value="other">United States</MenuItem>
                <MenuItem value="other">UK</MenuItem>
                <MenuItem value="other">Japan</MenuItem>
                <MenuItem value="other">Africa</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Drop Location State</InputLabel>
              <Select>
                {/* Add dropdown options for Drop Location State */}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField label="Drop Location City" fullWidth />
          </Grid>
          <Grid item xs={12} sm={4}>
            <input type="file" id="invoice-upload" />
            <label htmlFor="invoice-upload">Invoice Upload</label>
          </Grid>
          <Grid item xs={12} sm={4}>
            <input type="file" id="material-images-upload" multiple />
            <label htmlFor="material-images-upload">Material / Stock Images</label>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField label="Pick Up Date" type="date" fullWidth />
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Preferred Pick Up Time Slot</InputLabel>
              <Select>
                <MenuItem value="8am-4pm">8AM - 4PM</MenuItem>
                <MenuItem value="4pm-12pm">4PM - 12PM</MenuItem>
                <MenuItem value="12pm-8am">12PM - 8AM</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField label="Additional Remarks" multiline rows={4} fullWidth />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField label="Contact Person Name" fullWidth />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField label="Contact Person Phone" fullWidth />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField label="Contact Person Email Id" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default MMRequestForm;
