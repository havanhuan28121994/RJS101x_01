import React, { Component } from "react";
import {
  Card,
  CardText,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Loading } from "./LoadingComponent";

// function to compare salary to sort staff array
function compare(a, b) {
  const salaryA = a.salary;
  const salaryB = b.salary;

  let comparison = 0;
  if (salaryA < salaryB) {
      comparison = -1;
    } else if (salaryA > salaryB) {
      comparison = 1;
    }
    return comparison;
  }

class SalaryList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sort: null
    }
  }

  // set sort to sort the staff array
  setSort(sort){
    this.setState(
      {sort: sort}
    )
  }

  // render sorted array when sort is not null
  rendersalary(sort) {
    if (sort === 1) {
      return this.props.staffsSalaries.sort(compare).map((staff) => {
        return (
          <div key={staff.id} className="col col-12 col-md-6 col-lg-4 p-2">
            <Card tag="li" className="mt-2 p-1">
              <CardTitle>{staff.name}</CardTitle>
              <CardText className="pl-2 pb-2">
                Mã nhân viên: {staff.id}
              </CardText>
              <CardText className="pl-2 pb-2">
                Hệ số lương: {staff.salaryScale}
              </CardText>
              <CardText className="pl-2 pb-2">
                Số giờ làm thêm: {staff.overTime}
              </CardText>
              <CardText
                className="pl-3 pb-2 bg-light"
                style={{ borderTop: "1px solid #878787" }}
              >
                Lương: {staff.salary}
              </CardText>
            </Card>
          </div>
        );
      });
    } else if (sort === 2) {
      return this.props.staffsSalaries.sort(compare).reverse().map((staff) => {
        return (
          <div key={staff.id} className="col col-12 col-md-6 col-lg-4 p-2">
            <Card tag="li" className="mt-2 p-1">
              <CardTitle>{staff.name}</CardTitle>
              <CardText className="pl-2 pb-2">Mã nhân viên: {staff.id}</CardText>
              <CardText className="pl-2 pb-2">
                Hệ số lương: {staff.salaryScale}
              </CardText>
              <CardText className="pl-2 pb-2">
                Số giờ làm thêm: {staff.overTime}
              </CardText>
              <CardText
                className="pl-3 pb-2 bg-light"
                style={{ borderTop: "1px solid #878787" }}
              >
                Lương: {staff.salary}
              </CardText>
            </Card>
          </div>
        );
      });
    }
  };

  render() {

    // render unsort staff array when sort = null
    const STAFFS = this.props.staffsSalaries.map((staff) => {
      return (
        <div key={staff.id} className="col col-12 col-md-6 col-lg-4 p-2">
          <Card tag="li" className="mt-2 p-1">
            <CardTitle>{staff.name}</CardTitle>
            <CardText className="pl-2 pb-2">Mã nhân viên: {staff.id}</CardText>
            <CardText className="pl-2 pb-2">
              Hệ số lương: {staff.salaryScale}
            </CardText>
            <CardText className="pl-2 pb-2">
              Số giờ làm thêm: {staff.overTime}
            </CardText>
            <CardText
              className="pl-3 pb-2 bg-light"
              style={{ borderTop: "1px solid #878787" }}
            >
              Lương: {staff.salary}
            </CardText>
          </Card>
        </div>
      );
    });

    return (
      <div className="container">
        <div>
          <Breadcrumb
            style={{ backgroundColor: "#ffffff", padding: 0, margin: 0 }}
          >
            <BreadcrumbItem>
              <Link to="/">Nhân viên</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Bảng lương</BreadcrumbItem>
          </Breadcrumb>
        </div>
        <h1 className="pb-3 text-dark">Danh sách bảng lương</h1>
        <div>
          <span>Sắp xếp lương theo</span>
          <button
            className="btn btn-info ml-2"
            onClick={() => {
              this.setSort(1);
            }}
          >
            Thấp &#8594; cao
          </button>
          <button
            className="btn btn-info ml-2"
            onClick={() => {
              this.setSort(2);
            }}
          >
            Cao &#8594; thấp{" "}
          </button>
        </div>
        <div className="row">{ this.props.isLoading ? <Loading />
        : this.props.errMes != null ? this.props.errMes
        : this.state.sort ? this.rendersalary(this.state.sort) : STAFFS}</div>
        <div className="row">
          <Link to="/" className="col-12 pt-3">
            &#8592; Trở về Danh sách nhân viên
          </Link>
        </div>
      </div>
    );
  }
}

export default SalaryList;
