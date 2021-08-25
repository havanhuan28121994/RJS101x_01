import React from "react";
import { Card, CardText, CardTitle, BreadcrumbItem, Breadcrumb } from "reactstrap";
import { DEPARTMENTS } from "../shared/staffs";
import { Link } from 'react-router-dom';

const DepList = ({departments}) => {

    const DEP = departments.map((dep) => {
      return (
          <div key={dep.id} className="col col-12 col-md-6 col-lg-4">
            <Card tag="li" className="mt-2 p-1">
              <CardTitle>{dep.name}</CardTitle>
              <CardText>Số lượng nhân viên: {dep.numberOfStaff} </CardText>
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
            <BreadcrumbItem active>Phòng ban</BreadcrumbItem>
          </Breadcrumb>
        </div>
        <h1 className="pb-3 text-dark">Danh sách phòng ban</h1>
        <div className="row">{DEP}</div>
        <div className="row">
          <Link to="/" className="col-12 pt-3">
            &#8592; Trở về Danh sách nhân viên
          </Link>
        </div>
      </div>
    );
}

export default DepList;
