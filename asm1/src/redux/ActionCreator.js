import * as ActionType from './ActionType';
import { DEPARTMENTS } from "../shared/staffs";
import { baseUrl } from './baseUrl';


// staffs
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

// Departments
export const fetchDeps = () => (dispatch) => {
    dispatch(depsLoading(true));

    return fetch(baseUrl + 'departments')
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                var error = new Error(`Error${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }
        }, error => {
            var errMess = new Error(error.message);
            throw errMess;
        })
        .then(respone => respone.json())
        .then(departments => dispatch(depsLoaded(departments)))
        .catch(error => dispatch(depsFailed(error.message)))
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

// Salary
export const fetchSalaries = () => (dispatch) => {
    dispatch(salariesLoading(true));

    return fetch(baseUrl + 'staffsSalary')
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                var error = new Error(`Error${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }
        }, error => {
            var errMess = new Error(error.message);
            throw errMess;
        })
        .then(respone => respone.json())
        .then(staffsSalaries => dispatch(salariesLoaded(staffsSalaries)))
        .catch(error => dispatch(salariesFailed(error.message)))
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

// depStaffs

export const fetchDepStaffs = (dep) => (dispatch) => {
    dispatch(depStaffsLoading(true));

    return fetch(baseUrl + 'departments/' + dep)
    .then(response => {
        if (response.ok) {
            return response;
        } else {
            var error = new Error(`Error${response.status}: ${response.statusText}`);
            error.response = response;
            throw error;
        }
    }, error => {
        var errMess = new Error(error.message);
        throw errMess;
    })
    .then(response => response.json())
    .then(data => dispatch(depStaffsLoaded(data)))
    .catch(error => dispatch(depStaffsFailed(error.message)))
};

export const depStaffsLoading = () => ({
    type: ActionType.DEPSTAFFS_LOADING,
});

export const depStaffsFailed = (errMes) => ({
    type: ActionType.DEPSTAFFS_FAILED,
    payload: errMes
});

export const depStaffsLoaded = (depStaffs) => ({
    type: ActionType.DEPSTAFFS_LOADED,
    payload: depStaffs
})