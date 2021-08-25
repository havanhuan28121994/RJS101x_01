import React, { Component } from "react";
import { Card, CardBody, CardText, CardTitle } from "reactstrap";
import dateFormat from "dateformat";
import Staff from "./StaffComponent";

class StaffList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      staffSelected: null,
      depSelected: null,
    };
  }

  // Change state staffSelect from null to the selected staff
  onStaffSelected(staff) {
    this.setState({ staffSelected: staff });
  }

  // Change state depSelect from null to the selected department
  onDepSelected(dep) {
    this.setState({ depSelected: dep });
  }

  // Change stat depSelected to null to show all
  showAll() {
    this.setState({ depSelected: null });
  }

  // return staffs based on selected department, all if none is selected
  renderDep(dep) {
    if (dep != null) {
      return this.props.staffs
        .filter(
          (staff) => staff.department.name === this.state.depSelected.name
        )
        .map((staff) => {
          return (
            <div key={staff.id} className="col col-12 col-md-6 col-lg-4">
              <Card
                tag="li"
                onClick={() => this.onStaffSelected(staff)}
                className="mt-2 p-1"
              >
                <CardText>{staff.name}</CardText>
              </Card>
            </div>
          );
        });
    } else {
      return this.props.staffs.map((staff) => {
        return (
          <div key={staff.id} className="col col-12 col-md-6 col-lg-4">
            <Card
              tag="li"
              onClick={() => this.onStaffSelected(staff)}
              className="mt-2 p-1"
            >
              <CardText>{staff.name}</CardText>
            </Card>
          </div>
        );
      });
    }
  }

  render() {
    // return list of departments, click to select
    const DEPS = this.props.departments.map((dep) => {
      return (
        <div key={dep.id} className="col col-6 col-md-3 col-lg-2">
          <Card
            tag="li"
            onClick={() => this.onDepSelected(dep)}
            className="mt-2 p-1 mb-3"
          >
            <CardText>{dep.name}</CardText>
          </Card>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">{this.renderDep(this.state.depSelected)}</div>
        <p className="mt-3">Bấm vào tên nhân viên để xem thông tin.</p>
        <p className="mt-3">Bấm vào tên bộ phận để xem nhân viên trực thuộc.</p>
        <div className="row">
          {DEPS}
          <div className="col col-6 col-md-3 col-lg-2">
            <Card
              tag="li"
              onClick={() => this.showAll()}
              className="mt-2 p-1 mb-3"
            >
              <CardText>Tất cả</CardText>
            </Card>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-md-6">
            <Staff staffSelected={this.state.staffSelected}/>
          </div>
        </div>
      </div>
    );
  }
}

export default StaffList;
