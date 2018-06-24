import React from 'react';

import FormItem from './formItem/FormItem'

const FormGroup = (props) => {

    const group = props.config.map(function (item, index) {
        return (
            <FormItem {...item} key={index}/>
        )
    });
    return (
        <div>
            <span>
                <i className="fas fa-question-circle"></i>
                <p>{props.question}</p>
            </span>
            {group}
        </div>)
};

export default FormGroup;