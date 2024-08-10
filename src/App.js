import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import DisplayAllItems from './components/DisplayAllItems';
import AddNewItem from './components/AddNewItem';
import UpdateItem from './components/UpdateItem';
import DeleteItem from './components/DeleteItem';
import Contact from './components/Contact';
import MyNavbar from './components/Navbar';

function App() {
    return (
        <Router>
            <div className="App">
                <MyNavbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/items" element={<DisplayAllItems />} />
                    <Route path="/add" element={<AddNewItem />} />
                    <Route path="/update/:id" element={<UpdateItem />} />
                    <Route path="/delete/:id" element={<DeleteItem />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;