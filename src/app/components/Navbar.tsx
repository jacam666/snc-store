// "use client"
// import React from "react";
// import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button } from "@nextui-org/react";

// export default function MyNavbar() {
//     const [isMenuOpen, setIsMenuOpen] = React.useState(false);

//     const menuItems = [
//         "Home",
//         "Products",
//         "The Studio",
//         "Basket",
//     ];

//     return (
//         <Navbar className="bg-white" onMenuOpenChange={setIsMenuOpen}>
//             <NavbarContent className="text-black">
//                 <NavbarMenuToggle
//                     aria-label={isMenuOpen ? "Close menu" : "Open menu"}
//                     className="sm:hidden"
//                 />
//                 <NavbarBrand>
//                     <p className="font-bold text-black text-2xl">UKSNC Supplements</p>
//                 </NavbarBrand>
//             </NavbarContent>

//             <NavbarContent className="hidden sm:flex gap-4" justify="center">
//                 <NavbarItem>
//                     <Link className="text-black" href="/">
//                         Home
//                     </Link>
//                 </NavbarItem>
//                 <NavbarItem >
//                     <Link className="text-black" href="#" aria-current="page">
//                         Products
//                     </Link>
//                 </NavbarItem>
//                 <NavbarItem >
//                     <Link className="text-black" href="/Proteins" aria-current="page">
//                         Proteins
//                     </Link>
//                 </NavbarItem>
//                 <NavbarItem>
//                     <Link className="text-black" href="#">
//                         The Studio
//                     </Link>
//                 </NavbarItem>
//                 <NavbarItem>
//                     <Link className="text-black" href="#">
//                         Basket
//                     </Link>
//                 </NavbarItem>
//             </NavbarContent>
//             <NavbarMenu>
//                 {menuItems.map((item, index) => (
//                     <NavbarMenuItem key={`${item}-${index}`}>
//                         <Link
//                             // color={
//                             //     index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
//                             // }
//                             className="w-full"
//                             href="#"
//                             size="lg"
//                         >
//                             {item}
//                         </Link>
//                     </NavbarMenuItem>
//                 ))}
//             </NavbarMenu>
//         </Navbar>
//     );
// }
"use client"

import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import Link from 'next/link';

function MyNavbar() {

    const [expanded, setExpanded] = useState(false);

    const handelNavClick = () => {
        setExpanded(false);
    }


    return (
        <Navbar expand="lg" className="bg-body-tertiary" expanded={expanded}>
            <Container>
                <Navbar.Brand href='/' onClick={handelNavClick}>UKSNC Supplements</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto d-flex justify-content-center align-items-center">
                        <Link href='/' className="text-dark mr-5" onClick={handelNavClick}>Home</Link>
                        <Link href='/ProteinCataloguePage' className="text-dark mr-5" onClick={handelNavClick}>Proteins</Link>
                        <Link href='/PreWorkoutCataloguePage' className="text-dark mr-5" onClick={handelNavClick}>Pre-Workouts</Link>
                        <Link href='/FatLossCataloguePage' className="text-dark mr-5" onClick={handelNavClick}>Fat Loss</Link>
                        <Link href='/WellBeingCataloguePage' className="text-dark mr-5" onClick={handelNavClick}>General Wellbeing</Link>
                        <Link href='/TrainingAndDietPage' className="text-dark mr-5" onClick={handelNavClick}>Training and Diet Plans</Link>
                        <Link href='/TheStudioPage' className="text-dark mr-5" onClick={handelNavClick}>The Studio</Link>
                        <Link href='/Basket' className="text-dark mr-5" onClick={handelNavClick}>Basket</Link>
                        {/* <Nav.Link as={Link} to='/BasketPage' className="text-dark mr-5" onClick={handelNavClick}><BasketIcon /></Nav.Link> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MyNavbar;
