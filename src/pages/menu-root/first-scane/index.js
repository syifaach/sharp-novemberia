import React from 'react';
import { Grid } from '@mui/material';
// import { DataGrid } from '@mui/x-data-grid';
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';

const FirstScane = () => {
    const router = useNavigate();
    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                DISINI MBA SIPA
            </Grid>
        </Grid>
    );
};

export default FirstScane;
