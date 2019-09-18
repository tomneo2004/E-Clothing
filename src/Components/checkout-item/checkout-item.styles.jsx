import styled, {css} from 'styled-components';

const labelWidthStyle = css`
    width: 23%;
`;

export const CheckoutItemContainer = styled.div`
    width: 100%;
    display: flex;
    min-height: 100px;
    border-bottom: 1px solid darkgrey;
    padding: 15px 0;
    font-size: 20px;
    align-items: center;
`;

export const ImageContainer = styled.div`
    ${labelWidthStyle}
    padding-right: 15px;

    img {
        width: 100%;
        height: 100%;
    }
`;

export const NameLable = styled.span`
    ${labelWidthStyle}

`;

export const QuantityLabel = styled.span`
    ${labelWidthStyle}
    display: flex;

    .arrow{
        cursor: pointer;
    }

    .value{
        padding:0 20px;
    }
`;

export const PriceLabel = styled.span`
    ${labelWidthStyle}
`;

export const RemoveButton = styled.span`
    width:8%;
    padding-left: 12px;
    cursor: pointer;
`;