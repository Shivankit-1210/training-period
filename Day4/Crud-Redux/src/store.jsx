import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './CounterSlice'
import userReducer from './UserReducer'

export const store = configureStore({
reducer:{
    counter: counterReducer,
    users: userReducer
}
});