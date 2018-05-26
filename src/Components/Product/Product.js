import React from'react'


export default function Product(props){

    console.log(props)
  return(
    <div>
      <h3><img src={props.newProd.image} alt=""/></h3>
      <h3>{props.newProd.name}</h3>
      <h3>{props.newProd.price}</h3>
    </div>

  )
}  
