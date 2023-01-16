import React from 'react';
import Item from "./item";
import Data from "../../data"
const Menu = (props) => {
  const handleCart = (data) => {
    if(props.cart.find(item => item.id === data.id)){
      let array = props.cart
      let new_array = array.filter(i => i.id !== data.id);
      new_array.push(data)
      return props.setCart(new_array);
    } else {
      return props.setCart([...props.cart, data])
    }
  }

  return(
    <div>
      <ul style={{listStyleType: "none"}}>
        {Data.map((item, index) => <Item key = {index} item = {item} setCart = {handleCart} cart = {props.cart}/>)}
      </ul>
    </div>
  )
}


export default Menu;
