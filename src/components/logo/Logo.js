import React from 'react';
import {NavLink} from 'react-router-dom';

import burgerLogo from '../../assets/images/burger-logo.png';
import classes from './Logo.scss';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <NavLink
            to="/"
            exact>
            <img src={burgerLogo} alt="MyBurger"/>
        </NavLink>
    </div>
);

export default logo;