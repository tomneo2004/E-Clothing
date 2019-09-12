import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectDirectorySection} from '../../Redux/directory/directory.selector';
import './directory.styles.scss';

const Directory = ({sections})=>{

  return(
    <div className='directory-menu'>

        {
            sections.map(({id, ...otherSectionProps})=>{
                return <MenuItem key={id} {...otherSectionProps}/>
            })
        }
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  sections:selectDirectorySection
})

export default connect(mapStateToProps)(Directory);