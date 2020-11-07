import React, { Component } from 'react';
import Header from './HeaderComponent';
import DishDetail from './DishDetailComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}

class Main extends Component {

  constructor(props){
      super();
  }
  render(){
    const HomePage= ()=> {
        return (
            <Home 
                dish={this.props.dishes.filter((dish) => dish.featured)[0]}
                promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
                leader={this.props.leaders.filter((leader) => leader.featured)[0]}
            />
        );
    }

    const Details= ({match})=>{
      return(
          <DishDetail
              dish={this.props.dishes.filter((dish)=> dish.id===parseInt(match.params.dishId , 10))[0]}
              comments={this.props.comments.filter((comment)=> comment.dishId === parseInt(match.params.dishId , 10))}
          />
      );
    }
    return (
      <div className="Main">
        <Header/>
        <Switch>
            <Route path='/home' component={HomePage} />
            <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} />} />
            <Route path='/menu/:dishId' component={Details} />
            <Route exact path='/contactus' component ={()=> <Contact />} />
            <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Main));
