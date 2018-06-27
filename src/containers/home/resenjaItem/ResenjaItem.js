import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import Aux from '../../../hoc/Auxiliary/Auxiliary';

const ResenjaItem = (props) => {
    const slideItems = props.widgets.map(function (item, index) {
        let slideItem = <div className="col-12 col-sm-4" key={index}>
            <div className="ws-icon-holder">
                <img src={item.iconUrl} alt="icon"/>
            </div>
            <Link smooth to={item.nav} style={{textDecoration: 'none', color: '#58585a'}}>
                <p>{item.label}</p>
            </Link>
        </div>;
        return (
            slideItem
        )
    });
    return (
        <Aux>
            <div className="ws-title">
                <h5 className="ws-stronger-color">{props.title}</h5>
            </div>
            <div className="ws-body">
                <div className="row">
                    {slideItems}
                </div>
            </div>
        </Aux>
    )

};


export default ResenjaItem;