import * as ActionType from './ActionType';
import { DEPARTMENTS, STAFFS } from "../shared/staffs";

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

export const fetchStaffs = () => (dispatch) => {
    dispatch(staffsLoading(true));

    setTimeout(() => {
        dispatch(staffsLoaded(STAFFS));
    }, 2000)
};

export const staffsLoading = () => ({
    type: ActionType.STAFFS_LOADING,
});

export const staffsFailed = (errMes) => ({
    type: ActionType.STAFFS_LOAD_FAILED,
    payload: errMes
});

export const staffsLoaded = (staffs) => ({
    type: ActionType.STAFFS_LOADED,
    payload: staffs
})

export const fetchDeps = () => (dispatch) => {
    dispatch(depsLoading(true));

    setTimeout(() => {
        dispatch(depsLoaded(DEPARTMENTS));
    }, 2000)
};

export const depsLoading = () => ({
    type: ActionType.DEPARTMENTS_LOADING,
});

export const depsFailed = (errMes) => ({
    type: ActionType.DEPARTMENTS_FAILED,
    payload: errMes
});

export const depsLoaded = (deps) => ({
    type: ActionType.DEPARTMENTS_LOADED,
    payload: deps
})