"use client"

import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import Link from 'next/link';

function MyNavbar() {

    const [expanded, setExpanded] = useState(false);

    const handleLinkClick = () => {
        setExpanded(false);
    };

    return (
        <Navbar expand="lg" className="bg-body-tertiary" expanded={expanded}>
            <Container>
                <Navbar.Brand href='/'>UKSNC Supplements</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto d-flex justify-content-center align-items-center">
                        <Link href='/' className="text-dark mr-5" onClick={handleLinkClick} >Home</Link>
                        <Link href='/Proteins' className="text-dark mr-5" onClick={handleLinkClick} >Proteins</Link>
                        <Link href='/PreWorkouts' className="text-dark mr-5" onClick={handleLinkClick} >Pre-Workouts</Link>
                        <Link href='/FatLoss' className="text-dark mr-5" onClick={handleLinkClick} >Fat Loss</Link>
                        <Link href='/GeneralWellbeing' className="text-dark mr-5" onClick={handleLinkClick} >General Wellbeing</Link>
                        <Link href='/TrainingPlans' className="text-dark mr-5" onClick={handleLinkClick} >Training and Diet Plans</Link>
                        <Link href='/Studio' className="text-dark mr-5" onClick={handleLinkClick} >The Studio</Link>
                        <Link href='/Basket' className="text-dark mr-5" onClick={handleLinkClick} >Basket</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MyNavbar;