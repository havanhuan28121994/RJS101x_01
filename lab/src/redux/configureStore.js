import { reducer, innitialState } from "./reducer";
import { createStore } from 'redux';

export const ConfigureStore = () => {
    const store = createStore(
        reducer,
        innitialState
    )

    return store;
}