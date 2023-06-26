import {createSlice} from '@reduxjs/toolkit'
const loadingSlice = createSlice({
    name: 'loading',
    initialState:0,
    reducers: {
        updateLoader: (state, action) => {
            return  action.payload
        }
    }
})

export const {updateLoader} = loadingSlice.actions
export default loadingSlice.reducer