import React from 'react';
import { Card, CardBody, CardImg, CardTitle, CardText } from 'reactstrap';

function RenderDish({dish}) {
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
}

function RenderComment({dish}) {
    const comments = dish.comments.map((comment) => {
        return (
            <div key={comment.id}>
                <p>{comment.comment}</p>
                <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
            </div>
        )
    })
    return (
      <div className="col-12 col-md-5 m-1">
        <h4>Comments</h4>
        {comments}
      </div>
    );
}

const DishDetail = (props) => {
    if (typeof props.dish !== 'undefined') {
        return (
          <div className="row">
            <RenderDish dish={props.dish} />
            <RenderComment dish={props.dish} />
          </div>
        );
    } else {
      return <div></div>;
    }
}

export default DishDetail;