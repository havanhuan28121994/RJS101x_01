import * as ActionType from './ActionType';
import { DEPARTMENTS } from "../shared/staffs";
import { baseUrl } from './baseUrl';


// staffs
export const addStaff = (newStaff) => ({
    type: ActionType.ADD_STAFF,
    payload: newStaff
    
});

export const postStaff = (name, doB, startDate, departmentId, salaryScale, annualLeave, overTime) => (dispatch) => {
    const newStaff = {
        name,
        doB,
        startDate,
        departmentId,
        salaryScale,
        annualLeave,
        overTime
    }

    newStaff.image = '/asset/images/alberto.png';

    return fetch(baseUrl + 'staffs', {
        method: 'POST',
        body: JSON.stringify(newStaff),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
    })
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
    .then(newStaff => dispatch(addStaff(newStaff)))
    .catch(error => { alert("Try again") ; console.log(error.message)})
}

export const deleteStaff = (id, name, doB, startDate, departmentId, salaryScale, annualLeave, overTime, salary) => (dispatch) => {
    const delStaff = {
        id,
        name,
        doB,
        startDate,
        departmentId,
        salaryScale,
        annualLeave,
        overTime,
        salary
    }
    delStaff.image = '/asset/images/alberto.png';

    return fetch(baseUrl + 'staffs/' + id, {
        method: 'POST',
        body: id,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:3000',
            'Access-Control-Allow-Credentials': 'true'
        },
        credentials: 'same-origin'
    })
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
    .then(response => {response.json(); console.log(response)})
    .then(delStaff => dispatch(delStaff(delStaff)))
    .catch(error => { alert("Try again") ; console.log(error.message)})
}

export const delStaff = (delStaff) => ({
    type: ActionType.DELETE_STAFF,
    payload: delStaff
});

export const fetchStaffs = () => (dispatch) => {
    dispatch(staffsLoading(true));

    return fetch(baseUrl + 'staffs')
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
        .then(staffs => dispatch(staffsLoaded(staffs)))
        .catch(error => dispatch(staffsFailed(error.message)))
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
        .then(response => response.json())
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
        .then(response => response.json())
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