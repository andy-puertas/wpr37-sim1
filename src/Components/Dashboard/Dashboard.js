import React, { Component } from 'react';
import Product from '/Users/andypuertas/Desktop/webdev/devmountain/wpr37/simulations/shelfie/src/Components/Product/Product.js';

export default class Dashboard extends Component {

    render(){
    console.log(this.props)
        let inventoryDisplay = this.props.inventory.map( (item, index) => {
           return (
               <div key = {item + index} >
               <Product newProd = {item} />
               </div>
          )
    }
)
        return(
            <div>
                Dashboard
                {/* <Product /> */}
                {inventoryDisplay}
            </div>
            
        )
    }
}
