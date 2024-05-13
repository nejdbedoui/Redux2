import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clear, removeitem, selectedwishlist } from '../store/wishlist';

function Wishlist() {
  const [wishlist] = useSelector(selectedwishlist);
  const dispatch=useDispatch()

  const remove=(movie)=>{
    dispatch(removeitem(movie))
  }
const removeall=()=>{
  dispatch(clear())
}
  return (
    <div>
      {wishlist ? (
      <button onClick={()=>{removeall()}}>clear</button>):null}
      {wishlist ? (
        wishlist.map((movie) => (
          <div key={movie.id}>{movie.title} <button onClick={()=>remove(movie)}>remove</button></div>
        ))
      ) : "empty"}
    </div>
  );
}

export default Wishlist;
