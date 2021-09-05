import { createStore, combineReducers } from "redux";
import Departments from "./Departments";
import Staffs from "./Staffs";

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            staffs: Staffs,
            departments: Departments
        })
    );

    return store;
}