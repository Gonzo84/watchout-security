import React from 'react';

const FormItem = (props) => {
    return (
        <div>
            <input type="radio"
                   value={props.value}
                   className="btn ws-btn-option"
                   checked={props.state.selectedOption === 'option1'}
                   onClick={props.onChangeHandler}/>
            <label>{props.label}</label>
        </div>
    );
};

export default FormItem;
