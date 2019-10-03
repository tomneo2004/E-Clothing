import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const CollectionPreviewContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 10px 30px 10px;
`;

export const Title = styled(Link)`
    font-size: 40px;
    margin-bottom: 25px;
    text-align: center;
`;

export const Preview  = styled.div`
    display: flex;
    justify-content: space-between;
`;

