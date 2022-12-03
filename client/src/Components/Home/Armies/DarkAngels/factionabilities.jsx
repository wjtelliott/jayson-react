import React from 'react';
import Unit from '../Unit';
function SuperDA(props) {
    return (
        <Unit
            name={props.name}
            points={props.points}
            movement={props.movement}
            toughness={props.toughness ?? 4}
            wounds={props.wounds ?? 2}
            strength={4}
            attack={props.attack ?? 2}
            weapon={props.weapon}
            leadership={props.leadership ?? 8}
            misc="Grim Resolve"
            desc="NOT A regular dude"
            pic={props.pic ?? ''}
        />
    );
}
export default SuperDA;
