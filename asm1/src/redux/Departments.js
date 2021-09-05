import { DEPARTMENTS } from "../shared/staffs";
import * as ActionType from './ActionType'

const Departments = (state = DEPARTMENTS, action) => {
    switch (action.type) {
    case ActionType.DEPARTMENTS_LOADING:
        return null;
    case ActionType.DEPARTMENTS_LOADED:
        return null;
    case ActionType.DEPARTMENTS_FAILED:
        return null;
    default:
        return state;
    }
};

export default Departments;