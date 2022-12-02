import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { centeredFlexBox } from '../Shared/StylePresets';
import Armies from './Armies';
import { useParams } from 'react-router-dom';

const LandingPage = function () {
    const [unitData, setUnitData] = useState([]);

    const param = useParams()['*'];

    useEffect(() => {
        if (param === '') {
            return;
        }
        const result = [];
        const unitNames = [];
        // todo: ew
        const _fix = param[0].toUpperCase().concat(param.slice(1));
        for (const unitFile in Armies[_fix]) {
            const unit = Armies[_fix][unitFile];
            unitNames.push(unit.name);
            result.push(React.createElement(unit.element));
        }
        setUnitData(result);
    }, [param]);

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
            {(!(param === '') && (
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
                    {unitData}
                </Box>
            )) || (
                // todo: style
                <Box>
                    <p>Click on an army above</p>
                </Box>
            )}
        </Box>
    );
};

export default LandingPage;
