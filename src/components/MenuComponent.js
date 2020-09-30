import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Menu extends Component{
    constructor(props){
        super();
        this.state={
            selectedDish: null
        };
    }
    onSelectDish(dish){
        this.setState({selectedDish:dish});
    }

    renderDish(dish){
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
    render(){
        //key is required when we are displaying in the form of a list
        //then all the list items will be treated seperately by their unique id
        //by react
        const menu = this.props.dishes.map((dish) => {
            return (
              <div className="col-12 col-md-5 m-1">
                <Card key={dish.id} onClick={()=> this.onSelectDish(dish)}>
                  <CardImg width="100%" src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                      <CardTitle>{dish.name}</CardTitle>
                  </CardImgOverlay>
                </Card>
              </div>
            );
        });
        return(
            <div className="container">
                <div className="row">
                    {menu}
                </div> 
                <div className="row">
                  <div className="col-12 col-md-5 m-1">
                    {this.renderDish(this.state.selectedDish)}
                  </div>
                </div> 
            </div>
        );
    }
}

export default Menu;