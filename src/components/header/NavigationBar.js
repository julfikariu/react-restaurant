import React, { Component } from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarToggler,
    Collapse,
} from 'reactstrap';

import { Link } from 'react-router-dom';

class NavigationBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }

    }

    toggleNav = () => this.setState({
        isOpen: !this.state.isOpen
    });

    render() {
        return (
            <div>

                <Navbar dark color="dark" expand="sm">
                    <div className="container">
                        <NavbarBrand>Restaurant</NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="me-auto" navbar>
                                <NavItem>
                                    <Link to="/" className="nav-link active">Home</Link>
                                </NavItem>
                                <NavItem>
                                    <Link to="/menu" className="nav-link">Menu </Link>
                                </NavItem>
                                <NavItem>
                                    <Link to="/about" className="nav-link">About </Link>
                                </NavItem>
                                <NavItem>
                                    <Link to="/contact" className="nav-link">Contact </Link>
                                </NavItem>
                            </Nav>

                        </Collapse>
                    </div>
                </Navbar>


            </div >
        );
    }

}

export default NavigationBar;