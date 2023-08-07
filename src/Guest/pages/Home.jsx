import React from 'react';
import SmartphonesPage from './SmartphonesPage';
import LaptopPage from './LaptopPage';
import HeaderSection from './Headersection';
import Carousel from './Carousel';

export default function Home() {
    return (
        <>
            <Carousel />
            <SmartphonesPage />
            <HeaderSection />
            <LaptopPage />
        </>
    )
}
