import { configureStore,  } from '@reduxjs/toolkit'

import accountSlice from './slices/account/accountSlice'
import loadingSlice from './slices/loading/loadingSlice'
import cartSlice from './slices/cart/cartSlice'

const store = configureStore({
  reducer: {
    account: accountSlice,
    loading: loadingSlice,
    cart: cartSlice,
  },
  devTools:true

})
export default store


 