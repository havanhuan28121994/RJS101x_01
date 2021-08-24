import React from 'react';
import { Card, CardText, CardTitle } from 'reactstrap';
import { STAFFS } from '../shared/staffs';

const SalaryList = () => {

    const basicSalary = 3000000;
    const overTimeSalary = 200000;

    const staffs = STAFFS.map((staff) => {
        return (
            <div key={staff.id} className="col col-12 col-md-6 col-lg-4">
                <Card tag="li" className="mt-2 p-1">
                    <CardTitle>{staff.name}</CardTitle>
                    <CardText>Mã nhân viên: {staff.id}</CardText>
                    <CardText>Hệ số lương: {staff.salaryScale}</CardText>
                    <CardText>Số giờ làm thêm: {staff.overTime}</CardText>
                    <CardText>Lương: {((staff.salaryScale * basicSalary) + (staff.overTime  * overTimeSalary)).toFixed(1)}</CardText>
                </Card>
            </div>
        )
    })

    return (
        <div className="row">
            {staffs}
        </div>
    )
}

export default SalaryList;