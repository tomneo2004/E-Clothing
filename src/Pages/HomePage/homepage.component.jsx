import React from 'react';
import './homepage.styles.scss';
import DirectoryMenu from '../../Components/directory/directory.component';

const HomePage = ()=>{

    return (
        
        <div className='homepage'>
            <DirectoryMenu />
        </div>
        
    );
}

export default HomePage;