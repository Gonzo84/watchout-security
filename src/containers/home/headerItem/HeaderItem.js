import React from 'react';

import classes from './HeaderItem.scss';

const HeaderItem = (props) => (
    <div className={classes.HeaderItem}>
        <img src={props.backgroundImg} alt=""/>
        <div>{props.children}</div>
    </div>
);


export default HeaderItem;