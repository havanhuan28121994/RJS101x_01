import React, { Component } from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";

class StaffList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      depSelected: null,
    };
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
            <Link to={`/staff/${staff.id}`} className="col col-6 col-md-4 col-lg-2 text-dark" style={{ textDecoration: 'none' }}>
              <div key={staff.id}>
                <Card
                  tag="li"
                  onClick={() => this.props.onClick(staff.id)}
                  className="mt-2 p-1"
                >
                  <CardImg src={staff.image}></CardImg>
                  <CardText>{staff.name}</CardText>
                </Card>
              </div>
            </Link>
          );
        });
    } else {
      return this.props.staffs.map((staff) => {
        return (
          <Link to={`/staff/${staff.id}`} className="col col-6 col-md-4 col-lg-2 text-dark" style={{ textDecoration: 'none' }}>
            <div key={staff.id}>
              <Card
                tag="li"
                onClick={() => this.props.onClick(staff.id)}
                className="mt-2 p-1"
              >
                <CardImg src={staff.image}></CardImg>
                <CardText>{staff.name}</CardText>
              </Card>
            </div>
          </Link>
        );
      });
    }
  }

  render() {
    // return list of departments, click to select
    const DEPS = this.props.departments.map((dep) => {
      return (
        <div key={dep.id}>
          <div
            tag="li"
            onClick={() => this.onDepSelected(dep)}
            className="p-1 mb-1"
          >
            <button className="btn btn-info">{dep.name}</button>
          </div>
        </div>
      );
    });

    return (
      <div className="container">
        <h1 id="staff-list-h1" className="pb-3 text-dark">Danh sách nhân viên</h1>
        <div id="button-list">
          {DEPS}
          <div>
            <div
              tag="li"
              onClick={() => this.showAll()}
              className="p-1 mb-1"
            >
              <button className="btn btn-info">Tất cả</button>
            </div>
          </div>
        </div>
        <div className="pb-2 text-dark">
          <p> &#42; Bấm vào tên bộ phận để xem nhân viên trực thuộc.</p>
          <p> &#42; Bấm vào tên nhân viên để xem thông tin.</p>
        </div>
        <div className="row">{this.renderDep(this.state.depSelected)}</div>
      </div>
    );
  }
}

export default StaffList;
