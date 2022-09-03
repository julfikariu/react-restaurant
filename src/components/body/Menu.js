import React, { Component } from 'react';
import DISHES from '../../data/dishes.js';
import MenuItem from './MenuItem'
import DishDetail from './DishDetail.js';
import { CardColumns, Modal, ModalBody, ModalFooter, Button } from 'reactstrap';

class Menu extends Component {
    state = {
        dishes: DISHES,
        selectedDish: null,
        modalOpen: false
    }

    DeshDetail = (dish) => {
        this.setState({
            selectedDish: dish,
            modalOpen: !this.state.modalOpen
        });

    }

    toogleModal = () => {
        this.setState({
            modalOpen: !this.state.modalOpen
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

                    <CardColumns>
                        {menu}
                    </CardColumns>

                    <Modal isOpen={this.state.modalOpen} onClick={this.toogleModal}>

                        <ModalBody>
                            {dishdetails}
                        </ModalBody>
                        <ModalFooter>
                            <Button className="bg-secondary" onClick={this.toogleModal}>
                                Close
                            </Button>
                        </ModalFooter>
                    </Modal>

                </div>
            </div>
        )
    }
}


export default Menu;
