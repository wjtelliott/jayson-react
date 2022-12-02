import React from 'react';
import Unit from '../Unit';
const unitName = 'Ork Slugga';
function OrkSlugga() {
    return (
        <Unit
            name={unitName}
            toughness={5}
            wounds={1}
            strength={5}
            attack={2}
            weapon="Slugga"
        />
    );
}
export default { name: unitName, element: OrkSlugga };
