import React from 'react';

import Logo from '../../logo/Logo';
import NavigationItems from '../navigationItems/NavigationItems';
import classes from './SideDrawer.scss';
import Backdrop from '../../ui/backdrop/Backdrop';
import Aux from '../../../hoc/Auxiliary/Auxiliary';


import companyLogo from '../../../assets/images/logo/ws-logo-red-black.png';

const sideDrawer = ( props ) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo companyLogo={companyLogo}/>
                </div>
                <nav>
                    <NavigationItems navClickedHandler={props.closed}/>
                </nav>
            </div>
        </Aux>
    );
};

export default sideDrawer;