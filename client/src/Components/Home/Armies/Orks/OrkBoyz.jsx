import React from 'react';
import Unit from '../Unit';
const unitName = 'Ork Boyz';
function OrkBoyz() {
    return (
        <Unit
            name={unitName}
            toughness={5}
            wounds={1}
            strength={5}
            attack={2}
            weapon="Choppa"
        />
    );
}
export default { name: unitName, element: OrkBoyz };
