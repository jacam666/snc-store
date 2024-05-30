"use client";

import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCol, MDBContainer, MDBRow, MDBTypography } from "mdb-react-ui-kit";
import { Minus, Plus, Trash2Icon } from "lucide-react";
import { decrementQuantity, incrementQuantity, removeFromCart } from "../features/cart/cartSlice";
import { Image } from "@nextui-org/react";

const Cart: React.FC = () => {
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const dispatch = useDispatch();

    const handleRemove = (itemId: number) => {
        dispatch(removeFromCart(itemId));
    };

    const handleDecrement = (itemId: number) => {
        dispatch(decrementQuantity(itemId));
    };

    const handleIncrement = (itemId: number) => {
        dispatch(incrementQuantity(itemId));
    };

    const cartTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <section style={{ backgroundColor: "#eee" }}>
            <MDBContainer className="py-5 h-auto">
                <MDBRow className="flex justify-center h-auto w-auto">
                    <MDBCol>
                        <MDBCard>
                            <MDBCardBody className="p-4">
                                <MDBRow>
                                    <h1 className="text-center text-5xl mb-5">Shopping Cart</h1>
                                    <MDBCol>
                                        <div className="flex mb-4 justify-center">
                                            <div>
                                                <p className="mb-0">You have {cartItems.length} items in your cart</p>
                                            </div>
                                        </div>
                                        {cartItems.map((item) => (
                                            <MDBCard key={item.id} className="mb-3">
                                                <MDBCardBody className="flex justify-between">
                                                    <div className="flex">
                                                        {/* <MDBCardImage
                                                            src={item.image}
                                                            fluid
                                                            className="rounded-3"
                                                            style={{ width: "65px" }}
                                                            alt="Shopping item"
                                                        /> */}
                                                        <Image
                                                            src={item.image}
                                                            width={65}
                                                            height={65}
                                                            className="rounded-3"
                                                            alt="Shopping item"
                                                        />
                                                        <div className="ms-3">
                                                            <MDBTypography>
                                                                {item.name}
                                                            </MDBTypography>
                                                            <p className="small mb-0">{item.size}</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex ml-2">
                                                        <div>
                                                            <button className="btn btn-primary btn-sm me-2" onClick={() => handleDecrement(item.id)}>
                                                                <Minus size={16} />
                                                            </button>
                                                            <span>{item.quantity}</span>
                                                            <button className="btn btn-primary btn-sm ms-2" onClick={() => handleIncrement(item.id)}>
                                                                <Plus size={16} />
                                                            </button>
                                                        </div>
                                                        <div style={{ width: "80px" }} className="ml-2">
                                                            <MDBTypography tag="h5" className="mb-0">
                                                                £{(item.price * item.quantity).toFixed(2)}
                                                            </MDBTypography>
                                                        </div>
                                                        <a href="#!" onClick={() => handleRemove(item.id)}>
                                                            <Trash2Icon />
                                                        </a>
                                                    </div>
                                                </MDBCardBody>
                                            </MDBCard>
                                        ))}
                                        <MDBCard className="text-center text-3xl mt-4">
                                            <p>Total = £{cartTotal.toFixed(2)}</p>
                                        </MDBCard>
                                    </MDBCol>
                                    <MDBBtn className="flex bg-green-50 border border-black rounded-2xl px-3 py-2 mx-auto mt-4">
                                        Go to Checkout
                                    </MDBBtn>
                                </MDBRow>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
    );
}

export default Cart;
