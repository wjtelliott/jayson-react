import SuperDA from '../factionabilities';
import React from 'react';

function DwTerminator() {
    return (
        <SuperDA
            name="Deathwing Terminator"
            points={185}
            movement='5"'
            ws="3+"
            bs="3+"
            wounds={3}
            save="2+"
            weapon={['Storm Bolter', 'Chain Fist']}
            pic="https://static1.dualshockersimages.com/wordpress/wp-content/uploads/2013/09/SpaceHulkDeathwingCrop.jpg?q=50&fit=contain&w=1140&h=570&dpr=1.5"
        />
    );
}

export default DwTerminator;
