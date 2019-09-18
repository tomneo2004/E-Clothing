import React from 'react';
import {MenuItemContainer, BackgroundImage, 
    ContentContainer, ContentTitle, ContentSubtitle} from './menu-item.styles';
import {withRouter} from 'react-router-dom';

const MenuItem = ({title, history, match, linkUrl, ...otherProps})=> { 
    
    return (
        <MenuItemContainer {...otherProps} onClick={()=>history.push(`${match.url}${linkUrl}`)}>
            <BackgroundImage {...otherProps} className='background-image'>
            </BackgroundImage>
            <ContentContainer className='content'>
                <ContentTitle>{title.toUpperCase()}</ContentTitle>
                <ContentSubtitle>SHOP NOW</ContentSubtitle>
            </ContentContainer>
        </MenuItemContainer>

    );
}

export default withRouter(MenuItem);