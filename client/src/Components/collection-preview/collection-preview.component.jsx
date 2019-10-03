import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import {CollectionPreviewContainer, Title, Preview} from './collection-preview.styles';
import {withRouter} from 'react-router-dom';

const CollectionPreview = ({title, items, match})=>{

    return (
        <CollectionPreviewContainer>
            <Title to={`${match.path}/${title.toLowerCase()}`}>{title}</Title>
            <Preview>
                {
                    items
                    .filter((item,index)=> index < 4)
                    .map((item)=> <CollectionItem key={item.id} item={item} />)
                }
            </Preview>
        </CollectionPreviewContainer>
    );
}

export default withRouter(CollectionPreview);