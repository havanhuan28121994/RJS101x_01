import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Media } from 'reactstrap';

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
                    {staff.name} , 
                    {staff.doB} ,
                    {staff.startDate} ,
                    {staff.annualLeave} ,
                    {staff.overTime}
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
                    <Media tag="li" onClick={ () => this.onStaffSelected(staff) }>
                        <p>{staff.name}</p>
                    </Media>
                </div>
            )
        })
        return (
            <div>
                <Media list className="row">
                    {STAFFS}
                </Media>
                <p>Bấm vào tên nhân viên để xem thông tin.</p>
                
                <div className="row">
                    {this.renderStaff(this.state.staffSelected)}
                </div>
            </div>
        )
    }
}

export default StaffList;
