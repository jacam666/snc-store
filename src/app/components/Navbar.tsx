"use client"
import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button } from "@nextui-org/react";

export default function MyNavbar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [
        "Home",
        "Products",
        "The Studio",
        "Basket",
    ];

    return (
        <Navbar className="bg-white" onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent className="text-black">
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <p className="font-bold text-black text-2xl">UKSNC Supplements</p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link className="text-black" href="/">
                        Home
                    </Link>
                </NavbarItem>
                <NavbarItem >
                    <Link className="text-black" href="#" aria-current="page">
                        Products
                    </Link>
                </NavbarItem>
                <NavbarItem >
                    <Link className="text-black" href="/Proteins" aria-current="page">
                        Proteins
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className="text-black" href="#">
                        The Studio
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className="text-black" href="#">
                        Basket
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            // color={
                            //     index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                            // }
                            className="w-full"
                            href="#"
                            size="lg"
                        >
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}
