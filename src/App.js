import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useCallback, useEffect } from "react";
import { getDatabase, ref, onValue, set, push} from "firebase/database";
import { app } from "./firebase";
import { cartActions } from "./store/cart-slice";

let isIntaite = false;

function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cartItems = useSelector((state) => state.cart.items);
  const cartTotalQuantity = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch()

  useEffect(() => {
    console.log(isIntaite);
    if (!isIntaite) {
      return;
    }
    console.log("object");
    const db = getDatabase(app);
    set(ref(db, "cart/"), {
      changed: false,
      items: cartItems,
      totalQuantity: cartTotalQuantity,
    });
  }, [cartItems, cartTotalQuantity]);
  useEffect(() => {
    if (!isIntaite) {
      isIntaite = true;
        const db = getDatabase(app);
        
        const starCountRef = ref(db,'cart/');
        onValue(starCountRef, (snapshot) => {
          if(snapshot.exists()){
            const data = snapshot.val();
            let transformedData = {
              items:data.items || [],
              totalQuantity:data.totalQuantity
             }
             console.log(transformedData);
             dispatch(cartActions.repalceItemInCart(transformedData))
          }
        });
      
    }

    // return ()=>{
    //   const db = getDatabase();
    //   set(ref(db, "cart"), {
    //     changed: false,
    //     items: cartItems,
    //     totalQuantity: cartTotalQuantity,
    //   });
    // }
  }, [dispatch]);


  
  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
