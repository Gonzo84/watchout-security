import React from 'react';
import {NavLink} from 'react-router-dom';

import companyLogo from '../../assets/images/logo2.jpg';
import classes from './Logo.scss';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <NavLink
            to="/"
            exact>
            <img src={companyLogo} alt="Watchout Security Logo"/>
        </NavLink>
    </div>
);

export default logo;