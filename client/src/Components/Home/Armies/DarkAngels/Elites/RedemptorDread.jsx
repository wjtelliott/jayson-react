import SuperDA from '../factionabilities';
import React from 'react';

function RedemtorDread() {
    return (
        <SuperDA
            name="Redemptor Dreadnought"
            points={195}
            movement='8"'
            ws="3+"
            bs="3+"
            strength={7}
            toughness={7}
            wounds={13}
            save="3+"
            weapon={[
                'Onslaught Gatling Cannon',
                'Redemptor Fist',
                'Icarus Rocket Pod',
                'Macro Plasma Incinerator',
            ]}
            pic="https://static.wikia.nocookie.net/warhammer40k/images/5/58/DeathwatchRedemptor.png"
        />
    );
}

export default RedemtorDread;
