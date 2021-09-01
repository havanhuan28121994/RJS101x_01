import React, { useState } from "react";
import { Card, CardImg, CardText, Form, Input, Button } from "reactstrap";
import { Link } from "react-router-dom";

const StaffList = ({staffs}) => {
    const [Name, setName] = useState(null);
    const [SEARCH, setSEARCH] = useState(null)


    // render full staff list
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

    // render search by name results 
    const handleSearch = (event, Name) => {
      event.preventDefault();
      const name = Name.value;
      const X = staffs.filter((staff) => {
        if (name === "") {
          return staff
        } else if (staff.name.toLowerCase().includes(name.toLowerCase())){
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
      })
      setSEARCH(X);
    }

    return (
      <div className="container">
        <h1 className="pb-3 text-dark">Danh sách nhân viên</h1>

        {/* hide message when there is no search results */}
        <p>
          {SEARCH === null
            ? "* Bấm vào tên nhân viên để xem thông tin."
            : SEARCH.length === 0
            ? ""
            : "* Bấm vào tên nhân viên để xem thông tin."}
        </p>
        <div>

          {/* search form */}
          <Form>
            <Input
              type="text"
              id="name"
              name="name"
              placeholder="Nhập tên nhân viên"
              innerRef={(input) => {return setName(input)}}
              style={{ display: "inline-block", "margin-left": "2vw" }}
            ></Input>
            <Button
              type="submit"
              onClick={(event) => handleSearch(event, Name)}
              style={{ display: "inline-block" }}
            >
              Tìm
            </Button>
          </Form>
        </div>
  
        {/* Return full staffs list if user has not performed search, return message if there is no search results, return results if there is results */}
        <div className="row">
          {SEARCH === null
            ? STAFFS
            : SEARCH.length == 0
            ? "Không tìm thấy nhân viên nào"
            : SEARCH}
        </div>
      </div>
    );
  }

export default StaffList;
