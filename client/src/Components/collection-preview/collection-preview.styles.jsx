import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const CollectionPreviewContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 10px 30px 10px;

    @media screen and (max-width: 800px){
        align-items: center;
    }
`;

export const Title = styled(Link)`
    font-size: 40px;
    margin-bottom: 25px;
    text-align: center;
`;

export const Preview  = styled.div`
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 800px){
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 15px;
    }
`;

