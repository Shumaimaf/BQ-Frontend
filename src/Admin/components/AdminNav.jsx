import React from 'react';
import { Button, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function AdminNav() {
    return (
        <div className="d-flex bg-primary p-3 text-white">
            <div className="container-fluid d-flex justify-content-between align-items-center">
                <div>
                    <h1 className="mt-3">Welcome to Admin Dashboard</h1>
                    <a href="#login" className="text-dark">Admin name</a>
                    <Button className='btn bg-white text-primary ms-2'>Logout</Button>
                </div>
                <Nav className='bg-white rounded nav-item d-flex'>
                    <Link to='/admin/home' className='nav-link'>
                        Home
                    </Link>
                    <Link to='/admin/category' className='nav-link'>
                        Category
                    </Link>
                    <Link to='/admin/brands' className='nav-link'>
                        Brands
                    </Link>
                </Nav>
            </div>
        </div>
    );
}

export default AdminNav;
