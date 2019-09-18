import React from 'react';
import {FormGroup, Input, InputLabel} from'./form-input.styles'

const FormInput = ({handleChange, label, ...otherProps})=>{

    return (

        <FormGroup>
            <Input onChange={handleChange} {...otherProps} />
            {
                label?
                (<InputLabel className='form-input-label' shrink={otherProps.value.length?true:false}>
                {label}
                </InputLabel>)
                :
                null
            }
        </FormGroup>
    );
}

export default FormInput;