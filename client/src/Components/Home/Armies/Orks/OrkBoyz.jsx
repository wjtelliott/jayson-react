import React from 'react';
import Unit from '../Unit';
const unitName = 'Ork Boyz';
function OrkBoyz() {
    //todo: abilities here
    const abilities = [];
    return (
        <Unit
            name={unitName}
            toughness={5}
            wounds={1}
            strength={5}
            attack={2}
            weapon="Choppa"
            abilities={abilities}
        />
    );
}
export default OrkBoyz;
