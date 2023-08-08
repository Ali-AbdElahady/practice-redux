import { useDispatch } from 'react-redux';
import classes from './CartItem.module.css';
import { cartActions } from '../../store/cart-slice';
import { useEffect } from 'react';

const CartItem = (props) => {
  const {id, title, quantity, total, price } = props.item;
  const dispatch = useDispatch()

  const onAddHadler = ()=>{
    dispatch(
      cartActions.addItemToCart({
        id,
        price,
        name: title,
      })
    );
  } 
  useEffect(()=>{console.log(id);},[])
  const onRemoveHadler = ()=>{
    dispatch(cartActions.removeItemfromCart(id))
  } 

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={onRemoveHadler}>-</button>
          <button onClick={onAddHadler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
