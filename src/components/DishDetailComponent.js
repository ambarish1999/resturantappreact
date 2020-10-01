import React from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';

    function RenderComments({dish}){
        if(dish==null){
            return ( //empty div
                <div></div>
            );
        }
        const comments=dish.comments.map((comment)=>{
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
                    {comments}
                </CardBody>
            </Card>
        );
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
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        < RenderDish dish={props.selectedDish} />
                    </div>

                    <div className="col-12 col-md-5 m-1">
                        < RenderComments dish={props.selectedDish} />
                    </div>
                </div>
            </div>
        );
    }
export default DishDetail;