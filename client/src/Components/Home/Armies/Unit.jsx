import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { centeredFlexBox } from '../../Shared/StylePresets';
import PushPinIcon from '@mui/icons-material/PushPin';
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
    const [pinned, setPinned] = useState(false);

    function titleCase(str) {
        if (!str || str.length < 2) return str;
        return str[0].toUpperCase().concat(str.slice(1).toLowerCase());
    }
    function buildPinnedInfo(unitObject) {
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

    function handlePinClick(e) {
        if (e?.target?.tagName !== 'path') {
            //edge case, they clicked on the svg element and it still calls this due to propagation
            // recur and make target === child
            if (e.target?.children?.[0].tagName === 'path')
                handlePinClick({ target: e.target.children[0] });
            return;
        }
        const isPinned = e.target?.className?.baseVal === 'pinned';

        setPinned(!isPinned);
        e.target.setAttribute('class', `${!isPinned ? 'pinned' : 'unpinned'}`);
    }

    function buildUnpinnedInfo(unitName) {
        return (
            <Box sx={{ ...centeredFlexBox }}>
                <Typography sx={{ alignSelf: 'center' }}>{unitName}</Typography>
            </Box>
        );
    }

    return (
        <Box sx={{ ...centeredFlexBox, width: 1 }}>
            <Box
                className="unit-container"
                width="50%"
                sx={{ ...centeredFlexBox, p: 1, m: 2, position: 'relative' }}
            >
                <PushPinIcon
                    onClick={handlePinClick}
                    className="pushPin"
                    sx={{
                        position: 'absolute',
                        top: '25%',
                        left: '95%',
                        zIndex: 999,
                        cursor: 'pointer',
                    }}
                />
                {(pinned &&
                    buildPinnedInfo({
                        name,
                        toughness,
                        wounds,
                        strength,
                        attack,
                        weapon,
                        misc,
                        desc,
                        pic,
                    })) ||
                    buildUnpinnedInfo(name)}
            </Box>
        </Box>
    );
}

export default Unit;
