import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Media } from 'reactstrap';

class StaffList extends Component {
    constructor(props){
        super(props);

        this.state ={}
    }

    render(){

        const STAFFS = this.props.staffs.map((staff) => {
            return (
                <div key={staff.id} className="col col-12 col-md-6 col-lg-4">
                    <Media tag="li">
                        <p>{staff.name}</p>
                    </Media>
                </div>
            )
        })
        return (
            <Media list className="row">
                {STAFFS}
            </Media>
        )
    }
}

export default StaffList;
