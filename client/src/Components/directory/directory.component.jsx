import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectDirectorySection} from '../../Redux/directory/directory.selector';
import {DirectoryMenu} from './directory.styles';

const Directory = ({sections})=>{

  return(
    <DirectoryMenu>

        {
            sections.map(({id, ...otherSectionProps})=>{
                return <MenuItem key={id} {...otherSectionProps}/>
            })
        }
    </DirectoryMenu>
  );
}

const mapStateToProps = createStructuredSelector({
  sections:selectDirectorySection
})

export default connect(mapStateToProps)(Directory);