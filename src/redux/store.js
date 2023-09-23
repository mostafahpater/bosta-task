import { configureStore } from '@reduxjs/toolkit'
import  trackingSlice  from './tracking/TrackingSlice'

export default configureStore({
  reducer: {
    tracking:trackingSlice,
  },
})