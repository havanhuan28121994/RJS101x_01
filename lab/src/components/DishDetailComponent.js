import React, { Component } from 'react';
import { Card, CardBody, CardImg, CardTitle, CardText } from 'reactstrap';

class DishDetail extends Component {
  render() {
    if (this.props.selectedDish !== null) {
        const dish = this.props.selectedDish;
        return (
          <div className="col-12 col-md-5 m-1">
            <Card>
              <CardImg top src={dish.image} alt={dish.name} />
              <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
              </CardBody>
            </Card>
          </div>
        );
    } else {
      return <div></div>;
    }
  }
}

export default DishDetail;