import React from 'react';
import { Grid } from '@mui/material';
// import { DataGrid } from '@mui/x-data-grid';
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';

const ListHadiah = () => {
    const router = useNavigate();
    const columns = [
        {
            field: 'jenisHadiah',
            headerName: 'Jenis Hadiah',
            width: 150,
            editable: true
        }
    ];

    const rows = [
        { id: 1, jenisHadiah: 'Snow', firstName: 'Jon', age: 35 },
        { id: 2, jenisHadiah: 'Lannister', firstName: 'Cersei', age: 42 },
        { id: 3, jenisHadiah: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 4, jenisHadiah: 'Stark', firstName: 'Arya', age: 16 },
        { id: 5, jenisHadiah: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 6, jenisHadiah: 'Melisandre', firstName: null, age: 150 },
        { id: 7, jenisHadiah: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, jenisHadiah: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, jenisHadiah: 'Roxie', firstName: 'Harvey', age: 65 }
    ];
    return (
        <Grid container spacing={3}>
            <Grid item xs={12} style={{ height: 400 }}>
                <button className="btn btn-primary" style={{ float: 'right' }} onClick={() => router('/jenis-hadiah-form')}>
                    Add
                </button>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    // checkboxSelection
                    disableSelectionOnClick
                    experimentalFeatures={{ newEditingApi: true }}
                />
            </Grid>
        </Grid>
    );
};

export default ListHadiah;
