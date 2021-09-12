import { reducer, innitialState } from "./reducer";
import { createStore } from 'react-redux';

export const ConfigureStore = () => {
    const store = createStore(
        reducer,
        innitialState
    )

    return store;
}