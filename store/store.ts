import {createStore, Store} from 'redux';
import reducer from "./reducer";
import {DispatchType, CounterState, CounterAction} from "../src/types/types";
const store: Store<CounterState, CounterAction> & {
    dispatch: DispatchType
} = createStore(reducer);

export type AppDispatch = typeof store.dispatch;

export default store;