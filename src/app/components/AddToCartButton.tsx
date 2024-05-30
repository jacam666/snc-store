"use client"

import React from "react";
import { useDispatch } from 'react-redux';
import { Button } from '@nextui-org/react';
import { addToCart } from '../features/cart/cartSlice';
import { AppDispatch } from '../../store';

interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    size: string;
    flavour: string;
}

interface AddToCartButtonProps {
    product: Product;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ product }) => {
    const dispatch = useDispatch<AppDispatch>();

    // const handleAddToCart = () => {
    //     dispatch(addToCart({ product}));
    // };
    const handleAddToCart = () => {
        const { id, name, price, image, size, flavour } = product;
        const quantity = 1; // You can set a default quantity here or fetch it from somewhere else
        dispatch(addToCart({ id, name, price, image, size, flavour, quantity }));
    };
    
    

    return (
        <div className="flex justify-center w-full my-4">
            <Button
                color="primary"
                className="w-1/2"
                onClick={handleAddToCart}
            >
                Add to Cart
            </Button>
        </div>
    );
}

export default AddToCartButton;