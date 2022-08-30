import React, { Component } from 'react';
import DISHES from '../../data/dishes.js';
import MenuItem from './MenuItem'
import DishDetail from './DishDetail.js';

class Menu extends Component {
    state = {
        dishes: DISHES,
        selectedDish: null
    }

    DeshDetail = (dish) => {

        this.setState({
            selectedDish: dish
        });


    }


    render() {

        const menu = this.state.dishes.map(item => {
            return (
                <MenuItem dish={item} key={item.id} deshDetail={() => this.DeshDetail(item)} />
            );
        });

        let dishdetails = null;
        if (this.state.selectedDish != null) {
            dishdetails = <DishDetail dish={this.state.selectedDish} />;
        }


        return (
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        {menu}
                    </div>
                    <div className="col-6">
                        {dishdetails}
                    </div>
                </div>
            </div>
        )
    }
}


export default Menu;
