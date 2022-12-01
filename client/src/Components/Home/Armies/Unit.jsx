import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { centeredFlexBox } from '../../Shared/StylePresets';
function Unit({
    name,
    toughness,
    wounds,
    strength,
    attack,
    weapon,
    desc,
    misc,
    pic,
}) {
    const [showUnit, setShowUnit] = useState(false);

    function titleCase(str) {
        if (!str || str.length < 2) return str;
        return str[0].toUpperCase().concat(str.slice(1).toLowerCase());
    }
    function buildUnitInfo(unitObject) {
        const formattedUnitProperties = [];
        for (const property in unitObject) {
            if (!unitObject[property]) continue;

            // edge case for picture! we can use starts with or by property name!
            //if (unitObject[property].toString().startsWith('http')) {
            if (property === 'pic') {
                formattedUnitProperties.push(
                    <Box sx={{ ...centeredFlexBox }}>
                        <Typography
                            variant="p"
                            fontSize="1.5em"
                            textAlign="center"
                            sx={{ width: '100%', display: 'block' }}
                        >
                            {titleCase(property)}:{' '}
                        </Typography>
                        <img
                            height="auto"
                            width="50%"
                            src={unitObject[property]}
                        />
                    </Box>
                );
                continue;
            }

            formattedUnitProperties.push(
                <Typography
                    variant="p"
                    fontSize="1.5em"
                    textAlign="center"
                    sx={{ width: '100%' }}
                >
                    {titleCase(property)}: {unitObject[property]}
                </Typography>
            );
        }
        return formattedUnitProperties;
    }
    function handleUnitClick() {
        setShowUnit(!showUnit);
    }
    return (
        <Box sx={{ ...centeredFlexBox, width: 1 }}>
            {(showUnit && (
                <Box
                    className="unit-container"
                    width="50%"
                    sx={{ ...centeredFlexBox, p: 1, m: 2 }}
                >
                    <button onClick={handleUnitClick}>Close Unit</button>
                    {buildUnitInfo({
                        name,
                        toughness,
                        wounds,
                        strength,
                        attack,
                        weapon,
                        misc,
                        desc,
                        pic,
                    })}
                </Box>
            )) || (
                <button onClick={handleUnitClick}>{name ?? 'unnamed'}</button>
            )}
        </Box>
    );
}

export default Unit;
