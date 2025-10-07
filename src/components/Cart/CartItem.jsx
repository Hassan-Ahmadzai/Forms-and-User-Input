import classes from './CartItem.module.css';


const CartItem = (props) => {
  const { title, quantity, total, price } = props.item;

  return (
    <li className={classes.item}>
      
    </li>
  );
};

export default CartItem;
