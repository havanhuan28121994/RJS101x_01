import React, { useEffect } from "react";
import {
  Card,
  CardImg,
  CardText,

} from "reactstrap";
import { Link } from "react-router-dom";
import { Loading } from "./LoadingComponent";

const DepStaffs = ({ depStaffs, errMes, isLoading, depId, fetchDepStaffs }) => {

  useEffect(() => {
    console.log(depStaffs, errMes, isLoading, depId);
    fetchDepStaffs(depId);
    console.log(depStaffs)
  }, [])


  // render full staff list
  const STAFFS = depStaffs.map((staff) => {
    return (
      <Link
        to={`/staff/${staff.id}`}
        className="col col-6 col-md-4 col-lg-2 text-dark mb-2"
        className="col col-6 col-md-4 col-lg-2 text-dark mb-2"
        style={{ textDecoration: "none" }}
      >
        <div key={staff.id}>
          <Card tag="li" className="mt-2 p-1">
            <CardImg src={staff.image}></CardImg>
            <CardText>{staff.name}</CardText>
          </Card>
        </div>
      </Link>
    );
  });

  return (
    <div className="container">
      <h1 className="pb-3 text-dark">Danh sách nhân viên</h1>

      <div>
        <p>
          * Bấm vào tên nhân viên để xem thông tin.
        </p>
      </div>

      <div className="row">
        {isLoading? <Loading /> 
        : errMes != null ? errMes 
        : STAFFS} 
      </div>

    </div>
  );
};

export default DepStaffs;
