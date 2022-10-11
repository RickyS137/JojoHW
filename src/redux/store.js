import {createStore, combineReducers} from 'redux'
import  reducer  from './reducer'
import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

// const rootReducer = combineReducers()

export const store = createStore(reducer, applyMiddleware(thunk))