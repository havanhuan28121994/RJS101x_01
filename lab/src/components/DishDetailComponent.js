import React, { useState } from 'react';
import { Card, CardBody, CardImg, CardTitle, CardText, Breadcrumb, BreadcrumbItem, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import CommentForm from './CommentForm';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../redux/baseUrl';

function RenderDish({dish}) {
    return (
        <Card>
          <CardImg top src={baseUrl + dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
    );
}

function RenderComment({comments}) {
    const Comments = comments.map((comment) => {
        return (
            <div key={comment.id}>
                <p>{comment.comment}</p>
                <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
            </div>
        )
    })
    return (
      <div>
        <h4>Comments</h4>
        {Comments}
      </div>
    );
}

const DishDetail = (props) => {

    const [isModalOpen, setModalOpen] = useState(false);
    if (props.isLoading) {
        return(
            <div className="container">
                <div className="row">            
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.errMess) {
        return(
            <div className="container">
                <div className="row">            
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        );
    }
    else if (props.dish !== null) {
        return (
            <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>                
            </div>
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={props.dish} />
                </div>
                <div className="col-12 col-md-5 m-1">
                    <div>
                        <RenderComment comments={props.comments} />
                        <Button outline onClick={() => setModalOpen(!isModalOpen)} className="bg-light">
                            <span className="fa fa-sign-in fa-lg"></span> Submit comment
                        </Button>
                        <CommentForm isModalOpen={isModalOpen} setModalOpen={setModalOpen} dishId={props.dish.id} postComment={props.postComment} />
                    </div>
                </div>
            </div>
            </div>
        );
    } else {
      return <div></div>;
    }
}

export default DishDetail;