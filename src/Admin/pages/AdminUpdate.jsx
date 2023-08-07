import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import { storage } from '../utils/FirebaseConfig';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { GrUpdate } from 'react-icons/gr';

export default function AdminUpdate() {
    const [show, setShow] = useState(false);
    const [brandname, setBrandname] = useState("");
    const [ID, setID] = useState("");
    const [brandImage, setBrandImage] = useState(null);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const updateBrand = (e) => {
        e.preventDefault();

        const storageRef = ref(storage, `images/brands/${brandImage.name}`);
        uploadBytes(storageRef, brandImage).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                const payload = { ID, BrandName: brandname, BrandImage: url }; // Include ID for updating

                // Assuming you have an API endpoint for updating brands
                axios.put('http://localhost:3000/api/update-brand', payload)
                    .then(json => {
                        console.log(json.data);
                        setShow(false);
                    })
                    .catch(err => console.log(err));
            });
        });
    };

    return (
        <>
            <button className='bg-white rounded nav-item d-flex btn bg-white text-primary m-5' onClick={handleShow}><GrUpdate /></button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Brand</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={updateBrand}>
                        <div className='mb-3'>
                            <label htmlFor='inputID' className='form-label'>
                                ID
                            </label>
                            <input
                                type='text'
                                className='form-control'
                                id='inputID'
                                aria-describedby='brandnameHelp'
                                value={ID}
                                onChange={(e) => setID(e.target.value)}
                            />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='inputBrandName' className='form-label'>
                                Brand Name
                            </label>
                            <input
                                type='text'
                                className='form-control'
                                id='inputBrandName'
                                aria-describedby='brandnameHelp'
                                value={brandname}
                                onChange={(e) => setBrandname(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="formFile" className="form-label">
                                Brand Image
                            </label>
                            <input className="form-control" onChange={(e) => setBrandImage(e.target.files[0])} type="file" id="formFile" />
                        </div>
                        <button type='submit' className='btn btn-primary'>
                            Update Brand
                        </button>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    );
}
