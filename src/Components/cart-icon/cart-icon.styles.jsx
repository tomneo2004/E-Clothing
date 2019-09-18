import styled from 'styled-components';
import {ReactComponent} from '../../Assets/shopping-bag.svg';

export const CardIconContainer = styled.div`
    width: 50px;
    height: 50px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

export const ShopIcon = styled(ReactComponent)`
    width: 50px;
    height: 50px;
`;

export const ItemCount = styled.span`
    position: absolute;
    font-size: 20px;
    font-weight: bold;
    bottom: 4px;
`;

