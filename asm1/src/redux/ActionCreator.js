import * as ActionType from './ActionType';

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
})