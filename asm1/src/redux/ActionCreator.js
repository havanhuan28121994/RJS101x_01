import * as ActionType from './ActionType';
import { STAFFS } from "../shared/staffs";

export const addStaff = (name, doB, startDate, department, salaryScale, annualLeave, overTime) => ({
    type: ActionType.ADD_STAFF,
    payload: {
        name,
        doB,
        startDate,
        department,
        salaryScale,
        annualLeave,
        overTime,
    }
});

export const fetchStaff = () => (dispatch) => {
    dispatch(staffsLoading(true));

    setTimeout(() => {
        dispatch(staffLoaded(STAFFS));
    }, 2000)
};

export const staffsLoading = () => ({
    type: ActionType.STAFFS_LOADING,
});

export const staffFailed = (errMes) => ({
    type: ActionType.STAFFS_LOAD_FAILED,
    payload: errMes
});

export const staffLoaded = (staffs) => ({
    type: ActionType.STAFFS_LOADED,
    payload: staffs
})