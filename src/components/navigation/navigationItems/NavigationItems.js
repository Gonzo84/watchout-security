import React from 'react';

import classes from './NavigationItems.scss';
import NavigationItem from './navigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact navClickedHandler={props.navClickedHandler}>POCETNA</NavigationItem>
        <NavigationItem link="/bezbednosna-resenja" navClickedHandler={props.navClickedHandler}>BEZBEDNOSNA RESENJA</NavigationItem>
        <NavigationItem link="/usluge" navClickedHandler={props.navClickedHandler}>USLUGE</NavigationItem>
        <NavigationItem link="/o-nama" navClickedHandler={props.navClickedHandler}>O NAMA</NavigationItem>
    </ul>
);

export default navigationItems;