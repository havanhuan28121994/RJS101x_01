import React, { Component } from "react";
import { Card, CardText, CardTitle } from "reactstrap";
import { DEPARTMENTS } from "../shared/staffs";
import { Link } from 'react-router-dom';

class DepList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const DEP = DEPARTMENTS.map((dep) => {
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
        <h1 className="pb-3 text-dark">Danh sách phòng ban</h1>
        <div className="row">{DEP}</div>
        <div className="row">
            <Link to="/" className="col-12 pt-3"> &#8592; Trở về Danh sách nhân viên</Link>
        </div>
      </div>
    );
  }
}

export default DepList;
