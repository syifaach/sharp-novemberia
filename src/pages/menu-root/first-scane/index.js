import React from 'react';
import { Grid, Card, Button } from '@mui/material';
// import { DataGrid } from '@mui/x-data-grid';
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import { getAll, getById } from 'services/global-service';

const Header = () => {
    const imageStyle = {
        width: 200,
        height: 90,
        marginLeft: 'auto',
        display: 'block'
    };
    return (
        <Card
            className="px-5"
            style={{
                backgroundColor: '#DD5353',
                color: 'white',
                padding: '50px',
                borderBottomLeftRadius: '20px',
                borderBottomRightRadius: '20px'
            }}
        >
            <img alt="sharp" src={require('assets/images/logo/sharp-logo-white.png')} style={imageStyle} />
            <div style={{ marginTop: '80px', marginBottom: '80px' }}>
                <h3>Welcome to</h3>
                <h3>SHARP NOVEMBERIA</h3>
                <span>Have you always grateful and get more happiness</span>
            </div>
        </Card>
    );
};

const FirstScane = () => {
    const router = useNavigate();
    const style = {
        buttonStyle: {
            marginTop: '80px',
            padding: '20px',
            backgroundColor: '#DD5353',
            color: 'white',
            borderRadius: '25px',
            text: 'center'
        }
    };
    const onClickBtn = () => {
        router('/form-submit');
    };
    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Header />
                <div
                    className="d-flex justify-content-center"
                    style={{ marginTop: '80px', marginBottom: '80px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
                >
                    <Button style={style.buttonStyle} onClick={onClickBtn}>
                        Submit All Data and Play the Game
                    </Button>
                </div>
            </Grid>
        </Grid>
    );
};

export default FirstScane;
