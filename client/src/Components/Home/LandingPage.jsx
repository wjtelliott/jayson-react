import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { centeredFlexBox } from '../Shared/StylePresets';
import Armies from './Armies';

const LandingPage = function () {
    const formattedArmies = () => {
        const result = [];
        for (const army in Armies)
            for (const unit in Armies[army])
                result.push(React.createElement(Armies[army][unit]));
        return result;
    };

    return (
        <Box>
            <Typography
                variant="h1"
                textAlign="center"
                sx={{
                    fontSize: '2.5em',
                }}
            >
                Welcome to the Warhammer40k test DB landing LandingPage
            </Typography>
            <Box
                sx={{
                    ...centeredFlexBox,
                    justifyContent: 'space-evenly',
                    borderRadius: '20px',
                    backgroundColor: '#525252',
                    color: 'white',
                    m: 2,
                    p: 1,
                }}
            >
                {/* Get all armies */}
                {formattedArmies()}
            </Box>
        </Box>
    );
};

export default LandingPage;
