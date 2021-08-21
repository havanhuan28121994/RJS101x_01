import React, { Component } from 'react';
import { Card, CardBody, CardText, CardTitle } from 'reactstrap';
import dateFormat from 'dateformat';

class StaffList extends Component {
    constructor(props){
        super(props);

        this.state = {
            staffSelected : null
        }
    }

    // Change state staffSelect from null to the selected staff 
    onStaffSelected(staff) {
        this.setState(
            {staffSelected : staff}
        );
    }

    // render staff information in case a staff is selected, return empty div if none is selected
    renderStaff(staff){
        if ( staff != null ) {
            return (
                <div>
                    <Card className="mb-4">
                        <CardBody>
                            <CardTitle tag="h5">Họ và tên:{staff.name}</CardTitle>

                            {/* Format date to more easy-to-read date format */}
                            <CardText>Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}</CardText>
                            <CardText>Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}</CardText>
                            
                            <CardText>Phòng ban: {staff.department.name}</CardText>
                            <CardText>Số ngày nghỉ còn lại: {staff.annualLeave}</CardText>
                            <CardText>Số ngày đã làm thêm: {staff.overTime}</CardText>
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
                    <Card tag="li" onClick={ () => this.onStaffSelected(staff) } className="mt-2 p-1">
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
                <p className="mt-3">Bấm vào tên nhân viên để xem thông tin.</p>
                
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
