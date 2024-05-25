"use client"

import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import Link from 'next/link';

function MyNavbar() {

    const [expanded, setExpanded] = useState(false);

    return (
        <Navbar expand="lg" className="bg-body-tertiary" expanded={expanded}>
            <Container>
                <Navbar.Brand href='/'>UKSNC Supplements</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto d-flex justify-content-center align-items-center">
                        <Link href='/' className="text-dark mr-5" >Home</Link>
                        <Link href='/Proteins' className="text-dark mr-5" >Proteins</Link>
                        <Link href='/PreWorkouts' className="text-dark mr-5" >Pre-Workouts</Link>
                        <Link href='/FatLoss' className="text-dark mr-5" >Fat Loss</Link>
                        <Link href='/GeneralWellbeing' className="text-dark mr-5" >General Wellbeing</Link>
                        <Link href='/TrainingPlans' className="text-dark mr-5" >Training and Diet Plans</Link>
                        <Link href='/Studio' className="text-dark mr-5" >The Studio</Link>
                        <Link href='/Basket' className="text-dark mr-5" >Basket</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MyNavbar;