import { preloadModule } from "react-dom";

interface PropsCartCloseFunction {
    openCart: () => void;
    data: {}
  }

  

function Cart({ openCart, data}: PropsCartCloseFunction) {
    console.log("TESTANDO AQUI", data)
    return ( 
        <>
        <div>TEXTO AQUI ÓOOOOOOOO</div>
        <p onClick={() => openCart()}>X</p>
        </>
     );
}

export default Cart;