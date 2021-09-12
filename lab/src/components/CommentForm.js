import React, { Component } from 'react';
import { Control, LocalForm } from 'react-redux-form';
import { Col, Row, ModalBody, Modal, Label, Button, ModalHeader } from 'reactstrap';

class CommentForm extends Component{

  constructor(props){
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(values){
    console.log(values);
    alert(JSON.stringify(values))
  }

    render(){
        return (
          <Modal
            isOpen={this.props.isModalOpen}
            toggle={() => this.props.setModalOpen(!this.props.isModalOpen)}
          >
            <ModalHeader
              isOpen={this.props.isModalOpen}
              toggle={() => this.props.setModalOpen(!this.props.isModalOpen)}
            >
              Submit comment
            </ModalHeader>
            <ModalBody>
              <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                <Row className="form-group">
                  <Label htmlFor="rating" md={2}>
                    Rating
                  </Label>
                  <Col md={9}>
                    <Control.select
                      model=".rating"
                      id="rating"
                      name="rating"
                      className="form-control"
                    >
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Control.select>
                  </Col>
                </Row>
                <Row className="form-group">
                  <Label htmlFor="name" md={2}>
                    Name
                  </Label>
                  <Col md={9}>
                    <Control.text
                      model=".name"
                      id="name"
                      name="name"
                      className="form-control"
                    />
                  </Col>
                </Row>
                <Row className="form-group">
                  <Label htmlFor="comment" md={2}>
                    Comment
                  </Label>
                  <Col md={9}>
                    <Control.textarea
                      rows="6"
                      model=".comment"
                      id="comment"
                      name="comment"
                      className="form-control"
                    />
                  </Col>
                </Row>
                <Row className="form-group">
                  <Col md={{ size: 2, offset: 2 }}>
                    <Button
                      type="submit"
                      value="submit"
                      color="primary"
                      
                    >
                      Submit
                    </Button>
                  </Col>
                </Row>
              </LocalForm>
            </ModalBody>
          </Modal>
        );
    }
}

export default CommentForm;