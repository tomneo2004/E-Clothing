import React from 'react';
import {HomePageContainer} from './homepage.styles';
import DirectoryMenu from '../../Components/directory/directory.component';

const HomePage = ()=>{

    return (
        
        <HomePageContainer>
            <DirectoryMenu />
        </HomePageContainer>
        
    );
}

export default HomePage;