import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const CollectionItemContainer = styled.div`
    width: 22vw;
    display: flex;
    flex-direction: column;
    height: 350px;
    align-items: center;
    position: relative;

    &:hover{
        cursor: pointer;
        opacity: 0.8;

        .custom-button{
            opacity: 0.85;
            display: flex;
        }
    }

    @media screen and (max-width: 800px){
        width: 40vw;

        &:hover{
            opacity: 0.8;
    
            .custom-button{
                opacity: unset;
            }
        }
    }
`;

export const BackgroundImage = styled.div`
    background-image: ${({imageUrl})=>`url(${imageUrl})`};
    width: 100%;
    height: 95%;
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;
`;

export const Button = styled(CustomButton)`
    position: absolute;
    width: 80%;
    opacity: 0.7;
    top: 255px;
    display: none;

    @media screen and (max-width: 800px){
        display: block;
        opacity: 0.9;
        min-width: unset;
        padding: 0 10px;
    }
`;

export const FooterContainer = styled.div`
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
`;

export const NameLabel = styled.span`
    width: 90%;
    margin-bottom: 15px;
`;

export const PriceLabel = styled.span`
    width: 10%;
`;
