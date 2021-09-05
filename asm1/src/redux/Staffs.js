import { actions } from "react-redux-form";
import { STAFFS } from "../shared/staffs";
import * as ActionType from './ActionType'

const Staffs = (state = STAFFS, action) => {
    switch (action.type) {
    case ActionType.STAFFS_LOADING:
        return null;
    case ActionType.STAFFS_LOADED:
        return null;
    case ActionType.STAFFS_LOAD_FAILED:
        return null;
    default:
        return state;
    }
};

export default Staffs;