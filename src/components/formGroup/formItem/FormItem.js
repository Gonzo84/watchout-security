import React from 'react';

const FormItem = (props) => (
    <div>
        <input type="radio"
               name={props.groupName}
               value={props.value}
               className="btn ws-btn-option"
               onChange={props.onChangeHandler}
               required/>
        <label>{props.label}</label>
    </div>
);

export default FormItem;