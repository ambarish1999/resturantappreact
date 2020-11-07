import React from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle, Breadcrumb , BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import CommentForm from './CommentFormComponent'
    function RenderComments({comments}){
        if(comments!=null){
            const comments1=comments.map((comment)=>{
                var tempdate= new Date(comment.date);
                tempdate=tempdate.toDateString();
                tempdate=tempdate.split(" ");
                var day=tempdate[2], month=tempdate[1] , year=tempdate[3];
                return (
                    <div key={comment.id}>
                        <p>{comment.comment}</p>
                        <p> -- {comment.author}, {month} {day}, {year} </p>
                    </div>
                );
            })
            return(
                <Card>
                    <CardBody>
                        <CardTitle>
                            Comments
                        </CardTitle>
                        {comments1}
                        <CommentForm/>
                    </CardBody>
                </Card>
            );
        }
        else{
            return (
                <div></div>
            );
        }
    }
    function RenderDish({ dish }){
        if(dish!=null){
            return (
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>
                            {dish.name}
                        </CardTitle>
                        <CardText>
                            {dish.description}
                        </CardText>
                    </CardBody>
                </Card>
            );
        }
        else{
            return (
                <div></div>
            );
        }
    }
    function DishDetail(props){
        //var selecteddish = this.props.selectedDish;
        console.log(props.comments);
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
                        < RenderDish dish={props.dish} />
                    </div>

                    <div className="col-12 col-md-5 m-1">
                        < RenderComments comments={props.comments} />
                    </div>
                </div>
            </div>
        );
    }
export default DishDetail;