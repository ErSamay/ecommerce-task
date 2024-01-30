import React from 'react';
import "./Item.css";
import { Link } from 'react-router-dom';

const Item = (props) => {
  return (
    <div className='item w-48 hover:transform hover:scale-105 hover:transition-transform hover:duration-600'>
      <Link to={`/product/${props.id}`}>
        <img onClick={window.scrollTo(0,0)} className='h-64' src={props.image} alt="" />
      </Link>
      <p className='text-13 my-1'>{props.name}</p>
      <div className="item-prices flex gap-5">
        <div className="item-price-new text-#374151 text-18 font-semibold">
          ${props.new_price}
        </div>
        <div className="item-price-old text-#8c8c8c text-18 font-medium line-through">
          ${props.old_price}
        </div>
      </div>
    </div>
  );
}

export default Item;
