import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'



let accData =  JSON.parse(localStorage.getItem('account'))

let initialState = {
  account: {
    access: accData?.access || null,
    refresh: accData?.refresh || null,
    isAuthenticated: accData?.isAuthenticated || false,
    userId: accData?.userId || null
  },
  isLoading: false,
  error: null,
}



export const loginUser = createAsyncThunk(
  'account/loginUser',
  async (initialData) => {
    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}account/api/token/`, initialData)
        if (response.status == 200) {
          const { data } = response
          let account = {
            ...initialState.account,
            access: data.access,
            refresh: data.refresh,
            isAuthenticated: true,
            userId: 1
          }
          localStorage.setItem("account", JSON.stringify(account))
          return account
        }
      } catch (err) {
        // console.log(err)

      }
  }

)

export const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    logout: (state) => {
      return {
        access: null,
        refresh: null,
        isAuthenticated: false,
        userId: null
      }

    }
  },
  extraReducers: builder => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isLoading = false
      state.account = action.payload
    })
  }
})


export const {logout} = accountSlice.actions

export default accountSlice.reducer