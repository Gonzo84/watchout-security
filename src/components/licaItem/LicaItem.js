import React from 'react';

const LicaItem = (props) => {
    let licaItm = null;
    if (props.left) {
        licaItm = <div className="ws-box ws-alt" id={props.id}>
            <div className="row">
                <div className="col-lg-6">
                    <div className="ws-txt">
                        <h3>{props.title}</h3>
                        <p className="ws-stronger-color">
                            {props.description}
                        </p>
                        <p>
                            {props.content}
                        </p>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="ws-img-cont">
                        <img src={props.imageUrl} alt="alt"/>
                    </div>
                </div>
            </div>
        </div>
    } else {
        licaItm = <div className="ws-box ws-alt ws-left-img" id={props.id}>
            <div className="row">
                <div className="col-lg-6">
                    <div className="ws-img-cont">
                        <img src={props.imageUrl} alt="alt"/>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="ws-txt">
                        <h3>{props.title}</h3>
                        <p className="ws-stronger-color">
                            {props.description}
                        </p>
                        <p>
                            {props.content}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    }
    return (
        licaItm
    )
};

export default LicaItem;