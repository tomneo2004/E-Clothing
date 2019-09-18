import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';


export const CardDropdownContainer = styled.div`
    position: absolute;
    width: 240px;
    height: 340px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 65px;
    right: 85px;
    z-index: 5;
`;

export const CardItemsContainer = styled.div`
    height: 240px;
    display: flex;
    flex-direction: column;
    overflow: scroll;
`;

export const CardEmptyContainer = styled.span`
    font-size: 30px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Button = styled(CustomButton)`
    margin-top: auto;
`;

