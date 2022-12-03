import SuperDA from '../factionabilities';
import React from 'react';

function RelicTerminator() {
    return (
        <SuperDA
            name="Relic Terminator"
            points={175}
            movement='5"'
            ws="3+"
            bs="3+"
            wounds={3}
            save="2+"
            weapon={['Combi-Bolter', 'Ligtning Claw']}
            pic="https://cdnb.artstation.com/p/assets/images/images/026/389/253/large/yos-bayupratama-cataphractii-pattern-by-celeng-d7uk9n2-fullview.jpg?1588653838"
        />
    );
}

export default RelicTerminator;
