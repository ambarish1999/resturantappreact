import React, { Component } from 'react';
import { DISHES } from '../shared/dishes';
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
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
        <Header/>
        <Menu dishes={this.state.dishes}  onClick={(dishId)=>{
          this.onClickDish(dishId)
        }}/>
        <DishDetail selectedDish={ this.state.dishes.filter((dish)=>
          dish.id===this.state.selectedDishid )[0]} />
        <Footer />
      </div>
    );
  }
}

export default Main;
