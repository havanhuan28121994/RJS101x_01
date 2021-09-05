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
    case ActionType.ADD_STAFF:
        var staff = action.payload;
        staff.id = state.length;
        staff.image = '/assets/images/alberto.png';
        return [...state, staff]
    default:
        return state;
    }
};

export default Staffs;