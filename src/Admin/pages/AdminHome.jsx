import React from 'react';
import { Link } from 'react-router-dom';

export default function AdminHome() {
    return (
        <div className='d-flex justify-content-center mb-3 my-4'>
            <div className='btn-group'>
                <Link to='/admin/home' className='btn btn-dark mr-2'>
                    Home
                </Link>
                <Link to='/admin/category' className='btn btn-dark'>
                    Category
                </Link>
                <Link to='/admin/brands' className='btn btn-dark'>
                    Brands
                </Link>
            </div>
        </div>
    );
}
