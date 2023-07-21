import { configureStore } from '@reduxjs/toolkit'
import UserReduxAction from './actions/UserReduxAction'

export default configureStore({
  reducer: {
    car:UserReduxAction
  },
})