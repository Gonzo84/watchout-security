import React from 'react';

import classes from './Toolbar.scss';
import Logo from '../../logo/Logo';
import NavigationItems from '../navigationItems/NavigationItems';
import DrawerToggle from '../sideDrawer/drawerToggle/DrawerToggle';

import companyLogo from '../../../assets/images/logo/ws-logo-white.png';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <DrawerToggle clicked={props.drawerToggleClicked}/>
        <div className={classes.Logo}>
            <Logo companyLogo={companyLogo}/>
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems/>
        </nav>
    </header>
);

export default toolbar;