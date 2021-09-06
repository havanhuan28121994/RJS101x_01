import React, { Component } from "react";
import { Breadcrumb, BreadcrumbItem, CardImg } from "reactstrap";
import { Link } from 'react-router-dom';
import dateFormat from "dateformat";
import { Loading } from './LoadingComponent';

class Staff extends Component {
  constructor(props) {
    super(props);
  }

  // render staff information in case a staff is selected, return empty div if none is selected
  renderStaff(staff) {
    console.log(staff.image);
    return (
      <div className="mb-4 row mt-4">
        <div className="col-lg-2"></div>
        <div className="col-12 col-lg-3">
          <CardImg src={staff.image} className="staff-card-img"></CardImg>
        </div>
        <div className="col-lg-1"></div>
        <div className="col-12 col-lg-6">
          <h5>Họ và tên: {staff.name}</h5>

          {/* Format date to more easy-to-read date format */}
          <p>Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}</p>
          <p>Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}</p>
          <p>Phòng ban: {staff.departmentId || staff.departmentId.name }</p>
          <p>Số ngày nghỉ còn lại: {staff.annualLeave}</p>
          <p>Số ngày đã làm thêm: {staff.overTime}</p>
        </div>
      </div>
    );
  }

  render() {
    let rendered = <div></div>;
    let name = <div></div>;
    console.log(this.props.staffSelected);
    if (this.props.isLoading) {
      return (
        <div className="container">
          <div className="row">
            <Loading />
          </div>
        </div>
      )
    } else if (this.props.errMes != null) {
      return (
        <div className="container">
          <div className="row">
            {this.props.errMes}
          </div>
        </div>
      )
    } else if (this.props.staffSelected) {
      rendered = this.renderStaff(this.props.staffSelected);
      name = this.props.staffSelected.name;
    }

    return (
      <div className="container">

        {/* Breadcrumb */}
        <div>
          <Breadcrumb
            style={{ backgroundColor: "#ffffff", padding: 0, margin: 0 }}
          >
            <BreadcrumbItem>
              <Link to="/">Nhân viên</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{name}</BreadcrumbItem>
          </Breadcrumb>
        </div>

        <h1 className="pb-3 text-dark">Thông tin nhân viên</h1>

        <div>{rendered}</div>

        <div className="row">
          <Link to="/" className="col-12 pt-3">
            &#8592; Trở về Danh sách nhân viên
          </Link>
        </div>
      </div>
    );
  }
}

export default Staff;


