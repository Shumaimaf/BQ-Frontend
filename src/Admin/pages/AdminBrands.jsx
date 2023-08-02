import React, { useEffect, useState } from 'react';
import AdminHome from './AdminHome';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import AdminAddBrands from './AdminAddBrands';

export default function AdminBrands() {
    const [brands, setBrands] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3000/api/get-all-brands') // <-- Add http:// to the URL
            .then(json => {
                console.log(json.data.brands);
                setBrands(json.data.brands)
            })
            .catch(err => console.log(err));
    }, []);
    return (
        <>
            <AdminHome />
            <div >
                <h3 className='d-flex justify-content-center mb-3 my-4'>Brands</h3>
                <AdminAddBrands/>
            </div>
            <div>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Brand Name</th>
                            <th>Image</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            brands.map((val,key) =>
                                <tr key={key}>
                                    <td>{key+1}</td>
                                    <td>{val.BrandName}</td>
                                    <td><img style={{width:"10%"}} className='img-fluid' src={val.BrandImage} /></td>
                                </tr>)
                        }
                    </tbody>
                </Table>
            </div>
        </>
    )
}
