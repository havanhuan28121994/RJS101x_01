import React, { Component } from 'react';
import { Card, CardBody, CardImg, CardTitle, CardText } from 'reactstrap';
import dateFormat from 'dateformat';

class DishDetail extends Component {
  render() {
    if (this.props.selectedDish !== null) {
        const dish = this.props.selectedDish;
        const comments = dish.comments.map((comment) => {
            return (
                <div key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author}, {dateFormat(comment.date, "dd/mm/yyyy")}</p>
                </div>
            )
        })
        return (
          <div className="row">
            <div className="col-12 col-md-5 m-1">
              <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                  <CardTitle>{dish.name}</CardTitle>
                  <CardText>{dish.description}</CardText>
                </CardBody>
              </Card>
            </div>
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                {comments}
            </div>
          </div>
        );
    } else {
      return <div></div>;
    }
  }
}

export default DishDetail;