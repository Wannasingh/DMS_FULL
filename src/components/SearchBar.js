import React from 'react';
import { Grid, TextField, FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material';

const SearchBar = ({ dropdownOptions, onSearch }) => {
    return (
        <Grid container spacing={2} alignItems="center" sx={{ mb: 2, backgroundColor: '#0D47A1', p: 2, borderRadius: '5px' }}>
            <Grid item md={3}>
                <FormControl fullWidth>
                    <InputLabel sx={{ color: 'white' }}>ประเภทการเปลี่ยนแปลง</InputLabel>
                    <Select size="small" sx={{ color: 'white', backgroundColor: 'white' }}>
                        {dropdownOptions.map((option, index) => (
                            <MenuItem value={option.value} key={index}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item md={3}>
                <TextField fullWidth placeholder="เลขบัตรประชาชน" size="small" sx={{ backgroundColor: 'white' }} />
            </Grid>
            <Grid item md={3}>
                <TextField
                    fullWidth
                    type="date"
                    size="small"
                    sx={{ backgroundColor: 'white' }}
                    InputLabelProps={{ shrink: true }}
                />
            </Grid>
            <Grid item md={3}>
                <Button variant="contained" sx={{ backgroundColor: 'white', color: '#0D47A1' }} fullWidth>
                    ค้นหา
                </Button>
            </Grid>
        </Grid>
    );
};

export default SearchBar;
