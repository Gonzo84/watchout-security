import React from 'react';


import classes from './Header.scss';

const Header = (props) => (

        <div className="ws-header ws-gradient">
            <div className="container">
                <div className="ws-slider-cont">
                    <div className={classes.Header} style={{backgroundImage: 'url(' + props.backgroundImg + ')'}}>
                        <h4>{props.title}</h4>
                        <p>{props.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
;

export default Header;