import React from 'react';
import { Card, CardText, CardTitle } from 'reactstrap';
import { DEPARTMENTS } from '../shared/staffs';

const DepList = () => {

    const DEP = DEPARTMENTS.map((dep) => {
        return (
            <div key={dep.id} className="col col-12 col-md-6 col-lg-4">
                <Card tag="li" className="mt-2 p-1">
                    <CardTitle>{dep.name}</CardTitle>
                    <CardText>Số lượng nhân viên: {dep.numberOfStaff} </CardText>
                </Card>
            </div>
        )
    })

    return (
        <div className="container">
            <div className="row">
                {DEP} 
            </div>
        </div>
    )
}

export default DepList;