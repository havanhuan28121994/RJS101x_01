import * as ActionType from './ActionType';
import { DEPARTMENTS } from "../shared/staffs";
import { baseUrl } from './baseUrl';

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

    return fetch(baseUrl + 'staffs')
        .then(respone => respone.json())
        .then(staffs => dispatch(staffsLoaded(staffs)))
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

    return fetch(baseUrl + 'departments')
        .then(respone => respone.json())
        .then(departments => dispatch(depsLoaded(departments)))
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

export const fetchSalaries = () => (dispatch) => {
    dispatch(salariesLoading(true));

    return fetch(baseUrl + 'staffsSalary')
        .then(respone => respone.json())
        .then(staffsSalaries => dispatch(salariesLoaded(staffsSalaries)))
};

export const salariesLoading = () => ({
    type: ActionType.SALARIES_LOADING,
});

export const salariesFailed = (errMes) => ({
    type: ActionType.SALARIES_FAILED,
    payload: errMes
});

export const salariesLoaded = (staffsSalaries) => ({
    type: ActionType.SALARIES_LOADED,
    payload: staffsSalaries
})