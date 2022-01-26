import React from 'react';
import { Routes, Route } from 'react-router-dom'

// components
import AddPage from './pages/AddPage';
import EditPage from './pages/EditPage';
import HomePage from './pages/HomePage';
import SideBar from './components/Sidebar';

function App() {
  return (
    <>
        <SideBar />
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/add' element={<AddPage />} />
            <Route path='/edit/:id' element={<EditPage />} />
        </Routes>
    </>
  );
}

export default App;
