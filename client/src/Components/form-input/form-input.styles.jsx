import styled, {css} from 'styled-components';

const labelShrinkStyle = css`
    top: -14px;
    font-size: 12px;
    color: black;
`;

export const FormGroup = styled.div`
    position: relative;
    margin: 45px 0;
`;

export const Input = styled.input`
    background: none;
    background-color: white;
    color: grey;
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 100%;
    border: none;
    border-radius: 0;
    border-bottom: ${({highlight})=>(highlight?'2px solid red':' 1px solid grey')};
    margin: 25px 0;

    &:focus {
        outline: none;
    }

    &:focus ~ .form-input-label {
        
        ${labelShrinkStyle}
    }
`;

export const InputLabel = styled.label`
    color: grey;
    font-size: 20px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: 300ms ease all;

    ${({shrink})=>`${shrink?`${labelShrinkStyle}`:''}`}
`;

