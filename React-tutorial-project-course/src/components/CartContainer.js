import React from "react";
import CartItem from "./CartItem";
import { connect } from "react-redux";
import { CLEAR_CART } from "../action";
const CartContainer = ({cart=[],total,clearCart}) => {    //access to dispatch prop for mapStateToProps
  //need to set a default value thats why we write cart=[] instesd of just cart
  if (cart.length === 0) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <article>
        {cart.map(item => {
          return <CartItem key={item.id} {...item} />;
        })}
      </article>
      {/* cart footer */}
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total}</span>
          </h4>
        </div>
        {/* <button className="btn clear-btn" onClick={()=>dispatch({type : CLEAR_CART})}>clear cart</button> */}
        <button className="btn clear-btn" onClick={()=>clearCart()}>clear cart</button>
      </footer>
    </section>
  );
};

//when we need the states from the store we will use mapStateToProps
//when we need to dispatch any action to update the state we will use mapDispatchToProps
// **NOTE : when we use mapStateToProps we have access to dispatch prop(line:5) by which we can dispatch
//an action(line:38) or we can use two different argument(mapStateToProps,mapDispatchToProps)in connect 
//funtion in order to get State from store and dispatch action
//**personally I prefer to use two different argument(mapStateToProps,mapDispatchToProps)in connect 
//funtion in order to get State from store and dispatch action 
const mapStateToProps = (state)=>{
  // console.log(state)
  return{cart : state.cart,
    total : state.total,
  }
}
const mapDispatchToProps = (dispatch)=>{
  return{clearCart : ()=>dispatch({type : CLEAR_CART})}
}
export default connect(mapStateToProps,mapDispatchToProps)(CartContainer);
