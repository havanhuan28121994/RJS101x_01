import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardText, CardTitle, Breadcrumb, BreadcrumbItem } from "reactstrap";
import dateFormat from 'dateformat';

class Staff extends Component {
  constructor(props) {
    super(props);
  }

  // render staff information in case a staff is selected, return empty div if none is selected
  renderStaff(staff) {
    return (
      <div>
        <Card className="mb-4">
          <CardBody>
            <CardTitle tag="h5">Họ và tên:{staff.name}</CardTitle>

            {/* Format date to more easy-to-read date format */}
            <CardText>
              Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}
            </CardText>
            <CardText>
              Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}
            </CardText>

            <CardText>Phòng ban: {staff.department.name}</CardText>
            <CardText>Số ngày nghỉ còn lại: {staff.annualLeave}</CardText>
            <CardText>Số ngày đã làm thêm: {staff.overTime}</CardText>
          </CardBody>
        </Card>
      </div>
    )}

  render() {
    return (
      <div className="row">
        {/* <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/">Nhân viên</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>{this.props.staffSelected.name}</BreadcrumbItem>
        </Breadcrumb>
        <div>{this.renderStaff(this.props.staffSelected)}</div>
        <div>
          <Link to="/">Trở về Danh sách nhân viên</Link>
        </div> */}

        { this.props.staff }
      </div>
    );
  }
}

export default Staff;