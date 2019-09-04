import React, {Component} from 'react';
import ShopData from './shop.data';
import CollectionPreview from '../../Components/collection-preview/collection-preview.component';

class Shop extends Component{

    constructor(){
        super();

        this.state = {
            collections:ShopData
        }
    }

    render(){

        const {collections} = this.state;

        return (

            <div>
                {
                    collections.map(({id, ...otherProps})=>{

                        return <CollectionPreview key={id} {...otherProps} />
                    })
                }
            </div>
        );
    }
}

export default Shop;