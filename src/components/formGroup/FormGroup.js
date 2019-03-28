import React from 'react';

import classes from './FormGroup.scss';

const FormGroup = (props) => {

    const group = props.config.map(function (item, index) {
        return (<div key={index}>
                <input type="radio"
                       value={item.value}
                       name={props.groupName + index}
                       className="btn ws-btn-option"
                       checked={props.state[props.groupName].questions[item.value]}
                       onClick={item.onChangeHandler}/>
                <label>{item.label}</label>
            </div>
        )
    });
    return (
        <div className={classes.HorizontalRuler}>
            <span>
                <i className="fas fa-question-circle"></i>
                <p>{props.question}</p>
            </span>
            {group}
        </div>)
};

export default FormGroup;
