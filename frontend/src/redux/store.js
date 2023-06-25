import { configureStore,  } from '@reduxjs/toolkit'

import accountSlice from './slices/account/accountSlice'

const store = configureStore({
  reducer: {
    account: accountSlice
  },

})
export default store


 