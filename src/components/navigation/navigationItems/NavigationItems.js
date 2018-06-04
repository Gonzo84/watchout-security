import React from 'react';

import classes from './NavigationItems.scss';
import NavigationItem from './navigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>Pocetna</NavigationItem>
        <NavigationItem link="/bezbednosna-resenja">Bezbednosna resenja</NavigationItem>
        <NavigationItem link="/usluge">Usluge</NavigationItem>
        <NavigationItem link="/o-nama">O nama</NavigationItem>
    </ul>
);

export default navigationItems;