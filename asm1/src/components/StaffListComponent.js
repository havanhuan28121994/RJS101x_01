import React, { useEffect, useState } from "react";
import { Card, CardImg, CardText, Form, Input, Button, Modal, ModalBody, ModalHeader, FormGroup, Label, Col, Row } from "reactstrap";
import { Link } from "react-router-dom";
import { LocalForm, Control } from 'react-redux-form';
import { checkPropTypes } from "prop-types";

const StaffList = ({staffs}) => {

    // set state for name & search for search function
    const [Name, setName] = useState(null);
    const [SEARCH, setSEARCH] = useState(null);

    // set state to toggle add modal
    const [modalOpen, setModalOpen] = useState(false);

    // set state for doB & startDate
    const [doB, setdoB] = useState(null);
    const [startDate, setstartDate] = useState(null);

    //test 
    useEffect(() => {
      console.log(doB, startDate)
    }, [doB, startDate])

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

    // handle add submit
    const handleSubmit = (values) => {
      console.log(values);
      alert(JSON.stringify(values))

      const newStaff = {
        id: staffs.length,
        name: values.name,
        doB: doB,
        startDate: startDate,
        department: values.department,
        salaryScale: values.salaryScale,
        annualLeave: values.annualLeave,
        overTime: values.overTime,
        image: '/assets/images/alberto.png'
      }

      staffs.push(newStaff);
      console.log(staffs, newStaff);
      setModalOpen(!modalOpen)
    }

    // return part
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

        <Button className="btn btn-primary" onClick={() => setModalOpen(!modalOpen)} >+</Button>
        <div>

          {/* search form */}
          <Form row>
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

        <div>
        <Modal isOpen={modalOpen} toggle={(modalOpen) => setModalOpen(!modalOpen)} >
            <ModalHeader isOpen={modalOpen} toggle={(modalOpen) => setModalOpen(!modalOpen)}>Thêm nhân viên</ModalHeader>
            <ModalBody>
              <LocalForm onSubmit={(values) => handleSubmit(values)}>
                <Row>
                  <Label htmlFor="name" md={2}>Ten nhan vien</Label>
                  <Col md={10}>
                    <Control.text model=".name" id="name" name="name"></Control.text>
                  </Col>
                </Row>
                <Row>
                  <Label htmlFor="doB" md={2}>Ngay sinh</Label>
                  <Col md={10}>
                    <Input type="date" id="doB" name="doB" value={doB} onChange={(event) => setdoB(event.target.value)}></Input>
                  </Col>
                </Row>
                <Row>
                  <Label htmlFor="startDate" md={2}>Ngay bat dau</Label>
                  <Col md={10}>
                    <Input type="date" id="startDate" name="startDate" value={startDate} onChange={(event) => setdoB(event.target.value)}></Input>
                  </Col>
                </Row>
                <Row>
                  <Label htmlFor="department" md={2}>Phong ban</Label>
                  <Col md={10}>
                    <Control.select model=".department" id="department" name="department">
                      <option>Sale</option>
                      <option>HR</option>
                      <option>Marketing</option>
                      <option>IT</option>
                      <option>Finance</option>
                    </Control.select>
                  </Col>
                </Row>
                <Row>
                  <Label htmlFor="salaryScale" md={2}>He so luong</Label>
                  <Col md={10}>
                    <Control.text model=".salaryScale" id="salaryScale" name="salaryScale"></Control.text>
                  </Col>
                </Row>
                <Row>
                  <Label htmlFor="annualLeave" md={2}>Nghi phep</Label>
                  <Col md={10}>
                    <Control.text model=".annualLeave" id="annualLeave" name="annualLeave"></Control.text>
                  </Col>
                </Row>
                <Row>
                  <Label htmlFor="overTime" md={2}>Lam them gio</Label>
                  <Col md={10}>
                    <Control.text model=".overTime" id="overTime" name="overTime"></Control.text>
                  </Col>
                </Row>
                <Row>
                  <Col md={10}>
                    <Button md={2}>Them</Button>
                  </Col>
                </Row>
              </LocalForm>
            </ModalBody>
        </Modal>
        </div>
      </div>
    );
  }

export default StaffList;
