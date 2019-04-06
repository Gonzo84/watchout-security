import React from 'react';
import CountTo from 'react-count-to';

import classes from './HeaderItem.scss';

const HeaderItem = (props) => (
    <div className={classes.HeaderItem} style={{backgroundImage: 'url(' + props.backgroundImg + ')'}}>


        <div className={[classes.HeadersRow, 'row'].join(' ')}>

            <div className="col-md-8 ws-slider-info">
                <h1>{props.bodyContent.title}</h1>
                <h3>{props.bodyContent.content}</h3>
            </div>

            <div className="col-md-4 ws-slide-counters">
                <div className="ws-slider-counter">
                    <h2>ispod <CountTo to={4} speed={2000}/> min</h2>
                    <p><b>{props.bodyContent.widgets[0].label}</b></p>
                </div>
                <div className="ws-slider-counter">
                    <h2>preko <CountTo to={7000} speed={2000}/></h2>
                    <p><b>{props.bodyContent.widgets[1].label}</b></p>
                </div>
                <div className="ws-slider-counter">
                    <h2>preko <CountTo to={12000} speed={2000}/></h2>
                    <p><b>{props.bodyContent.widgets[2].label}</b></p>
                </div>
            </div>
        </div>
    </div>
);


export default HeaderItem;