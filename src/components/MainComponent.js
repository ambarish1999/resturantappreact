import React, { Component } from 'react';
import { Navbar , NavbarBrand } from 'reactstrap';
import { DISHES } from '../shared/dishes';
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';
class Main extends Component {

  constructor(props){
      super();

      this.state={
        dishes: DISHES,
        selectedDishid : null
      };
  }
  onClickDish(dishid){
    this.setState({selectedDishid : dishid});
  }
  render(){
    return (
      <div className="Main">
        <Navbar dark color="primary">
            <div className="container">
              <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
            </div>
        </Navbar>

        <Menu dishes={this.state.dishes}  onClick={(dishId)=>{
          this.onClickDish(dishId)
        }}/>
        <DishDetail selectedDish={ this.state.dishes.filter((dish)=>
          dish.id===this.state.selectedDishid )[0]} />
      </div>
    );
  }
}

export default Main;
