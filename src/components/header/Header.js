import React from 'react';


import classes from './Header.scss';

const Header = (props) => (

        <div className="ws-header ws-gradient">
            <div className="container">
                <div className="ws-slider-cont ws-header-no-slider">
                    <div className={classes.Header} style={{backgroundImage: 'url(' + props.backgroundImg + ')'}}>
                        <p>
                            <h4>{props.title}</h4>
                            {props.description}
                        </p>
                        <div className="ws-layer">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
;

export default Header;
