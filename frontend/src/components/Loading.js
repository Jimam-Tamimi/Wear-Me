import React from 'react'
import LoadingBar from 'react-top-loading-bar'

import {  useSelector, useDispatch } from 'react-redux'
import { updateLoader } from '@/redux/slices/loading/loadingSlice'
export default function Loading() {
    const loading = useSelector(state => state.loading)
    const dispatch = useDispatch()
  return (
    <LoadingBar  height={3} color="rgb(79, 70, 229)" progress={loading} onLoaderFinished={() => dispatch(updateLoader(0))} />
    )
}
