import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import DisplayAllItems from './components/DisplayAllItems';
import MyItems from './components/MyItems';
import AddItem from "./components/AddItem";
import UpdateItem from './components/UpdateItem';
import DeleteItem from './components/DeleteItem';
import MyNavbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';

function App() {
    return (
        <Router>
            <div className="App">
                <MyNavbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/items" element={<DisplayAllItems />} />
                    <Route path="/myitems" element={<MyItems />} />
                    <Route path="/add" element={<AddItem />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/update/:id" element={<UpdateItem />} />
                    <Route path="/delete/:id" element={<DeleteItem />} />
                </Routes>
            </div>
            <Footer />
        </Router>
        
    );
}

export default App;