import React from 'react';

const LicaItem = (props) => {
    let licaItm = null;
    if (props.left) {
        licaItm = <div className="ws-box ws-alt" id={props.id}>
            <div className="row">
                <div className="col-lg-6">
                    <div className="ws-txt">
                        <h4>{props.title}</h4>
                        <p className="ws-stronger-color">
                            {props.description}
                        </p>
                        <p class={`ws-lica-content ws-lica-content-font ${props.id}`}>
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
    } else if (props.up) {
        licaItm = <div className="ws-analitika-container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="ws-img-cont ws-analitika-img">
                        <img src={props.imageUrl} alt="alt"/>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="ws-txt">
                        <h4>{props.title}</h4>
                        <p className="ws-stronger-color">
                            {props.description}
                        </p>
                        <p className={`ws-lica-content ws-lica-content-font ${props.id}`}>
                            {props.content}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    } else {
        licaItm = <div className="ws-box ws-left-img" id={props.id}>
            <div className="row">
                <div className="col-lg-6">
                    <div className="ws-img-cont">
                        <img src={props.imageUrl} alt="alt"/>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="ws-txt">
                        <h4>{props.title}</h4>
                        <p className="ws-stronger-color">
                            {props.description}
                        </p>
                        <p className={`ws-lica-content ws-lica-content-font ${props.id}`}>
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
