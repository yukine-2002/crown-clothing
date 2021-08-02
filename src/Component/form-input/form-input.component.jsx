import React from 'react';

import './form-input.style.css';

const FormInput = ({HandelChange,label,...otherProps}) => (
    <div className="group">
        <input type="text" className='form-input' onChange={HandelChange} {...otherProps}/>
        {
            label?
            <label className={`${otherProps.value.length ? 'shrink':''} form-input-label `}>
            {label}
            </label>
            :null
        }
    </div>
)

export default FormInput;