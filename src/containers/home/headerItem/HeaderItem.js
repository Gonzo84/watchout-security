import React from 'react';

import classes from './HeaderItem.scss';

const HeaderItem = (props) => (
    <div className={classes.HeaderItem} style={{backgroundImage: 'url(' + props.backgroundImg + ')'}}>


        <div className="row">

            <div className="col-md-6">
                <h1>{props.bodyContent.title}</h1>
                <h3>{props.bodyContent.content}</h3>
            </div>

            <div className="col-md-6">
                <div>
                    <h2>{props.bodyContent.widgets[0].number}</h2>
                    <p>{props.bodyContent.widgets[0].label}</p>
                </div>
                <div>
                    <h2>{props.bodyContent.widgets[1].number}</h2>
                    <p>{props.bodyContent.widgets[1].label}</p>
                </div>
                <div>
                    <h2>{props.bodyContent.widgets[2].number}</h2>
                    <p>{props.bodyContent.widgets[2].label}</p>
                </div>
            </div>
        </div>
    </div>
);


export default HeaderItem;