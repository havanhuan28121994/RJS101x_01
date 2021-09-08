import React, { useEffect } from "react";
import { Card, CardText, CardTitle, BreadcrumbItem, Breadcrumb } from "reactstrap";
import { Link } from 'react-router-dom';
import { Loading } from "./LoadingComponent";

const DepList = ({departments, isLoading, errMes}) => {

    const DEP = departments.map((dep) => {
      return (
        <Link to={`/department/${dep.id}`}
        style={{ textDecoration: "none" }}>
          <div key={dep.id} className="col col-12 col-md-6 col-lg-4">
              <Card tag="li" className="mt-2 p-1">
                <CardTitle>{dep.name}</CardTitle>
                <CardText>Số lượng nhân viên: {dep.numberOfStaff} </CardText>
              </Card>
          </div>
          </Link>
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
        <div className="row">
          {isLoading ? <Loading /> : errMes != null ? errMes : DEP}
        </div>
        <div className="row">
          <Link to="/" className="col-12 pt-3">
            &#8592; Trở về Danh sách nhân viên
          </Link>
        </div>
      </div>
    );
}

export default DepList;
