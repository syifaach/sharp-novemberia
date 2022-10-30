import React from 'react';
import { Grid } from '@mui/material';
// import { DataGrid } from '@mui/x-data-grid';
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import WheelComponent from 'react-wheel-of-prizes';
// import 'react-wheel-of-prizes/dist/index.css';
// import 'react-wheel-of-prizes/dist/index.css';

const SpinWhelee = () => {
    const router = useNavigate();
    const segments = [
        'better luck next time',
        'won 70',
        'won 10',
        'better luck next time',
        'won 2',
        'won uber pass',
        'better luck next time',
        'won a voucher'
    ];
    const segColors = ['#e20202'];
    const onFinished = (winner) => {
        console.log(winner);
    };
    return (
        <div style={{ display: 'flex', width: '20px' }}>
            <WheelComponent
                segments={segments}
                segColors={segColors}
                onFinished={(winner) => onFinished(winner)}
                primaryColor="black"
                contrastColor="white"
                buttonText="Spin"
                isOnlyOnce={true}
                size={200}
                upDuration={700}
                downDuration={1000}
                fontFamily="Arial"
            />
        </div>
    );
};

export default SpinWhelee;
