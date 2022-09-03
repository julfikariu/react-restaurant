import React from 'react';
import Menu from './Menu';
import Home from './Home';
import About from './About';
import { Routes, Route, NavLink } from 'react-router-dom';
import Contact from './Contact';

const Body = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<h1>Not Found</h1>} />
            </Routes>
        </div>
    );
}

export default Body;