import React from 'react';
import Unit from '../Unit';
function Guard() {
    return (
        <Unit
            name="Imperial Guard"
            toughness={3}
            wounds={1}
            strength={3}
            attack={3}
            weapon="LAZZOR"
        />
    );
}
export default Guard;
