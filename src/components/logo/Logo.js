import React from 'react';
import {NavLink} from 'react-router-dom';


import classes from './Logo.scss';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <NavLink
            to="/"
            exact>
            <img src={props.companyLogo} alt="Watchout Security Logo"/>
        </NavLink>
    </div>
);

export default logo;