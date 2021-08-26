import React, { useState } from "react";
import { Card, CardImg, CardText } from "reactstrap";
import { Link } from "react-router-dom";

const StaffList = ({staffs}) => {
    const [search, setSearch] = useState("");

    const STAFFS = staffs.map((staff) => {
      return (
        <Link
          to={`/staff/${staff.id}`}
          className="col col-6 col-md-4 col-lg-2 text-dark mb-2"
          style={{ textDecoration: "none" }}
        >
          <div key={staff.id}>
            <Card
              tag="li"
              className="mt-2 p-1"
            >
              <CardImg src={staff.image}></CardImg>
              <CardText>{staff.name}</CardText>
            </Card>
          </div>
        </Link>
      );
    });

    const SEARCH = staffs.filter((staff) => {
      if (search === "") {
        return staff
      } else if (staff.name.toLowerCase().includes(search.toLowerCase())){
        return staff
      }
    }).map((staff) => {
      return (
        <Link
          to={`/staff/${staff.id}`}
          className="col col-6 col-md-4 col-lg-2 text-dark mb-2"
          style={{ textDecoration: "none" }}
        >
          <div key={staff.id}>
              <div>{staff.name}</div>
          </div>
        </Link>
      );
    })

    return (
      <div className="container">
        <h1 className="pb-3 text-dark">Danh sách nhân viên</h1>
        <div className="pb-2 text-dark">
          <p> &#42; Bấm vào tên nhân viên để xem thông tin.</p>
        </div>
        <div className="bg-light" style={{ 'width' : '300px' }}>
          <input 
            type="text" 
            placeholder="Tìm kiếm theo tên nhân viên" 
            style={{ 'width' : '300px' }}
            onChange={ (event) => setSearch(event.target.value) }></input>
          { search !== "" ? SEARCH : <div></div>}
        </div>
        <div className="row"> {STAFFS}</div>
      </div>
    );
  }

export default StaffList;
