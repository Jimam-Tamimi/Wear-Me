import { addProduct, removeCartProduct } from "@/redux/slices/cart/cartSlice";
import axios from "axios";


export async function fetchProduct(productSlug) {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}shop/api/products/${productSlug}`
    );
    return res.data;
  }


export  function updateCartProduct(context, product, setCartProduct) {
    setCartProduct(prevState => ({
        ...prevState,
        id: product.id,
        slug: product.slug,
        ...context,
        itemCount: 1,
    }))
}

export function addToCart(cartProduct, dispatch) {
    if (cartProduct.color && cartProduct.size) {
        dispatch(addProduct(cartProduct))
        return true
    }
    return false
}

 
export function removeFromCart(cartProduct, dispatch) {
    dispatch(removeCartProduct(cartProduct))
}

export function isProductInsideCart(cart, cartProduct) {
    let cartProductIndex = cart.findIndex(p => p.id == cartProduct?.id)
    if (cartProductIndex == -1) {
        return false
    }
    if (!cartProduct) {
        return false
    }
    if ((cartProduct?.size?.id == cart[cartProductIndex]?.size?.id) &&
        (cartProduct?.color?.id == cart[cartProductIndex]?.color?.id)) {
        return true
    }
}

export function buyNow(cartProduct, dispatch, router) {
 if(addToCart(cartProduct, dispatch)){  
     router.push('/checkout/')
    }

}
