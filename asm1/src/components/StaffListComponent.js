import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, CardBody, CardText, CardTitle } from 'reactstrap';
import dateFormat from 'dateformat';

class StaffList extends Component {
    constructor(props){
        super(props);

        this.state = {
            staffSelected : null
        }
    }

    onStaffSelected(staff) {
        this.setState(
            {staffSelected : staff}
        );
    }

    renderStaff(staff){
        if ( staff != null ) {
            return (
                <div>
                    <Card>
                        <CardBody>
                            <CardTitle tag="h5">{staff.name}</CardTitle>
                            <CardText>{dateFormat(staff.doB, "dd/mm/yyyy")}</CardText>
                            <CardText>{dateFormat(staff.startDate, "dd/mm/yyyy")}</CardText>
                            <CardText>{staff.department.name}</CardText>
                            <CardText>{staff.annualLeave}</CardText>
                            <CardText>{staff.overTime}</CardText>
                        </CardBody>
                    </Card>
                </div>
            )

        } else {
            return (
                <div></div>
            )
        }
    }

    render(){

        const STAFFS = this.props.staffs.map((staff) => {
            return (
                <div key={staff.id} className="col col-12 col-md-6 col-lg-4">
                    <Card tag="li" onClick={ () => this.onStaffSelected(staff) }>
                        <CardText>{staff.name}</CardText>
                    </Card>
                </div>
            )
        })
        return (
            <div className="container">
                <div className="row">
                    {STAFFS}
                </div>
                <p>Bấm vào tên nhân viên để xem thông tin.</p>
                
                <div className="row">
                    <div className="col-12 col-md-6">
                        {this.renderStaff(this.state.staffSelected)}
                    </div>
                </div>
            </div>
        )
    }
}

export default StaffList;
