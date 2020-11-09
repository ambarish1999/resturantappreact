import React, { Component } from 'react';
import {LocalForm , Errors ,Control } from 'react-redux-form'
import {Row, Col, Button, Label, Modal, ModalBody, ModalHeader } from 'reactstrap'

const required=(val)=> val&&val.length;
const minLength=(len) => (val) => val && val.length>=len;
const maxLength=(len) => (val) => val && val.length<=len;
class CommentForm extends Component{
    constructor(props){
        super();
        this.state={
            isModalOpen:false
        };
        this.toggleModal=this.toggleModal.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    handleSubmit(values){
        this.toggleModal();
        // console.log("Current State is "+JSON.stringify(values));
        // 
        //alert(this.props.dishId, values.rating , values.comment);
        //alert("Current State is "+ JSON.stringify(values));
        this.props.postComment(this.props.dishId, values.rating , values.author, values.comment);
    }

    render(){
        return(
            //this will return a modal react redux form
            <div>
                <Button outline onClick={this.toggleModal}>
                    <span className="fa fa-pencil fa-lg"> Submit Comment </span>
                </Button>
                
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>
                        Submit Comment
                    </ModalHeader>

                    <ModalBody>
                    <div className="col-18 col-md-18">
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="rating" md={4}>Rating</Label>
                                {/* md=2 means no of columns we wish to span for medium devices 
                                xs={number} is “the number of columns you wish to span for Extra small devices Phones */}
                                <Col md={10}>
                                    <Control.select model=".rating" name="rating" 
                                        className="form-control">
                                        <option>5</option>
                                        <option>4</option>
                                        <option>3</option>
                                        <option>2</option>
                                        <option>1</option>
                                    </Control.select>
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Label htmlFor="author" md={4}>Your Name</Label>
                                <Col md={10}>
                                    <Control.text model=".author" id="author" name="author" placeholder="Your Name"
                                    className="form-control" validators={{required, minLength:minLength(3), maxLength:maxLength(15)
                                    }}/>
                                    <Errors className="text-danger"
                                            model=".author"
                                            show="touched"
                                            messages={{
                                                required:"Required ",
                                                minLength:"Name must be minimum 3 length ",
                                                maxLength:"Name must be maximum 15 length "
                                            }}
                                    />
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Label htmlFor="comment" md={8}>Your Feedback</Label>
                                <Col md={10}>
                                    <Control.textarea model=".comment" id="comment" name="comment"
                                        rows="6"
                                        className="form-control" validators={{required}} />
                                    <Errors className="text-danger"
                                            model=".comment"
                                            show="touched"
                                            messages={{
                                                required:"Required "
                                            }}
                                    />
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Col md={{size: 10}}>
                                    <Button type="submit" color="primary">
                                        Send Feedback
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                        </div>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default CommentForm;