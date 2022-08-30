import React from 'react';
import {
    Navbar,
    NavbarBrand
} from 'reactstrap';

const NavigationBar = () => {
    return (
        <div>
            <Navbar dark color="dark">
                <div className="container">
                    <NavbarBrand>Restaurant</NavbarBrand>
                </div>

            </Navbar>
        </div >
    );
}

export default NavigationBar;