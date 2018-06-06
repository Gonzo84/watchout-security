import React from 'react';

import classes from './NavigationItems.scss';
import NavigationItem from './navigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>POCETNA</NavigationItem>
        <NavigationItem link="/bezbednosna-resenja">BEZBEDNOSNA RESENJA</NavigationItem>
        <NavigationItem link="/usluge">USLUGE</NavigationItem>
        <NavigationItem link="/o-nama">O NAMA</NavigationItem>
    </ul>
);

export default navigationItems;