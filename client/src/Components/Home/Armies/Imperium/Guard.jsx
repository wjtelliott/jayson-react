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
            misc="Shoots his lazor"
            desc="A regular dude"
            pic="https://techraptor.net/sites/default/files/styles/herobanner_desktop/public/2022-06/Warhammer%2040k%20Imperial%20Guard%20Featured%20Artwork.jpg?itok=OaS-TD-B"
        />
    );
}
export default { element: Guard, name: 'asdasd' };
