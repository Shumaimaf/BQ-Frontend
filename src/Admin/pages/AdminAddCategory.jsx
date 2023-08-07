import React from 'react'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';

export default function AdminAddCategory() {
    const [show, setShow] = useState(false);
    const [CategoryName, setCategoryName] = useState("");
    const [categoryImage, setCategoryImage] = useState("");


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const addCategory = (e) => {
        e.preventDefault();

        const payload = { CategoryName: CategoryName, CategoryImage : categoryImage };
        axios.post('http://localhost:3000/api/create-category', payload)
            .then(json => {
                // console.log(json.data);
                setShow(false);
            })
            .catch(err => console.log(err));
    }

return (
    <>
        <button className='bg-white rounded nav-item d-flex btn bg-white text-primary ms-2' onClick={handleShow}>Add Category</button>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add Category</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={addCategory}>
                    <div className='mb-3'>
                        <label htmlFor='inputEmail' className='form-label'>
                            Category Name
                        </label>
                        <input
                            type='text' // Change type to 'text'
                            className='form-control'
                            id='inputEmail'
                            aria-describedby='categorynameHelp'
                            value={CategoryName}
                            onChange={(e) => setCategoryName(e.target.value)}
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='categoryImageInput'>Brand Image</label>
                        <input
                            type='text' // Change type to 'text' or 'file' as needed
                            className='form-control'
                            id='categoryImageInput'
                            aria-describedby='categorynameHelp'
                            value={categoryImage}
                            onChange={(e) => setCategoryImage(e.target.value)}
                        />
                    </div>


                    {/* <div className="mb-3">
                            <label htmlFor="formFile" className="form-label">
                                Category Image
                            </label>
                            <input className="form-control" onChange={(e) => setCategoryImage(e.target.files[0])} type="file" id="formFile" />
                        </div> */}
                    <button type='submit' className='btn btn-primary'>
                        Add Brand
                    </button>
                </form>
            </Modal.Body>
        </Modal>
    </>
)
}
