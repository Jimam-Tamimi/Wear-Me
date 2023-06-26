import { configureStore,  } from '@reduxjs/toolkit'

import accountSlice from './slices/account/accountSlice'
import loadingSlice from './slices/loading/loadingSlice'

const store = configureStore({
  reducer: {
    account: accountSlice,
    loading: loadingSlice,
  },

})
export default store


 