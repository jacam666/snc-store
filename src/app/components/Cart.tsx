// "use client";

// import React from "react";
// import { useSelector, useDispatch } from 'react-redux';
// import { RootState } from '../../store';
// import Image from "next/image";
// import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCol, MDBContainer, MDBIcon, MDBInput, MDBRow, MDBTypography } from "mdb-react-ui-kit";
// import { Minus, Plus } from "lucide-react";
// import cartSlice from "../features/cart/cartSlice";


// const Cart: React.FC = () => {
//     const cartItems = useSelector((state: RootState) => state.cart.items);
//     const dispatch = useDispatch();
//     return (
//         <section style={{ backgroundColor: "#eee" }}>
//             <MDBContainer className="py-5 h-aut0">
//                 <MDBRow className="flex justify-center h-auto">
//                     <MDBCol>
//                         <MDBCard>
//                             <MDBCardBody className="p-4">
//                                 <MDBRow>
//                                     <MDBCol lg="7">
//                                         <div className="flex mb-4">
//                                             <div>
//                                                 <p className="mb-1">Shopping cart</p>
//                                                 <p className="mb-0">You have 4 items in your cart</p>
//                                             </div>
//                                             <div>
//                                             </div>
//                                         </div>
//                                         <MDBCard>
//                                             {cartItems.map((item) => (
//                                                 <MDBCard key={item.id}>
//                                                     <MDBCardBody className="flex">
//                                                         <div className="flex">
//                                                             <div>
//                                                                 <MDBCardImage
//                                                                     src={item.image}
//                                                                     fluid className="rounded-3" style={{ width: "65px" }}
//                                                                     alt="Shopping item" />
//                                                             </div>
//                                                             <div className="ms-3">
//                                                                 <MDBTypography tag="h5">
//                                                                     {item.name}
//                                                                 </MDBTypography>
//                                                                 <p className="small mb-0">{item.size}</p>
//                                                             </div>
//                                                         </div>
//                                                         <div className="flex">
//                                                             <div style={{ width: "80px" }}>
//                                                                 <MDBTypography tag="h5" className="mb-0">
//                                                                     {item.price}
//                                                                 </MDBTypography>
//                                                             </div>
//                                                             <a href="#!" style={{ color: "#cecece" }}>
//                                                                 <MDBIcon fas icon="trash-alt" />
//                                                             </a>
//                                                         </div>
//                                                     </MDBCardBody>
//                                                 </MDBCard>
//                                             ))}
//                                         </MDBCard>
//                                     </MDBCol>
//                                 </MDBRow>
//                             </MDBCardBody>
//                         </MDBCard>
//                     </MDBCol>
//                 </MDBRow>
//             </MDBContainer>
//         </section>
//     );
// }

// export default Cart;

"use client";

import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
//import Image from "next/image";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCol, MDBContainer, MDBIcon, MDBInput, MDBRow, MDBTypography } from "mdb-react-ui-kit";
import { Minus, Plus, Trash, Trash2Icon } from "lucide-react";
//import { removeFromCart } from "../features/cart/cartSlice";

const Cart: React.FC = () => {
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const dispatch = useDispatch();

    // const handleRemove = (itemId: number) => {
    //     dispatch(removeFromCart(itemId));
    // };

    const cartTotal = cartItems.reduce((total, item) => total + item.price, 0);

    return (
        <section style={{ backgroundColor: "#eee" }}>
            <MDBContainer className="py-5 h-auto">
                <MDBRow className="flex justify-center h-auto">
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
                                        <MDBCard>
                                            {cartItems.map((item) => (
                                                <MDBCard key={item.id} className="mb-3">
                                                    <MDBCardBody className="flex justify-between">
                                                        <div className="flex">
                                                            <MDBCardImage
                                                                src={item.image}
                                                                fluid
                                                                className="rounded-3"
                                                                style={{ width: "65px" }}
                                                                alt="Shopping item"
                                                            />
                                                            <div className="ms-3">
                                                                <MDBTypography>
                                                                    {item.name}
                                                                </MDBTypography>
                                                                <p className="small mb-0">{item.size}</p>
                                                            </div>
                                                        </div>
                                                        <div className="flex ml-5">
                                                            <div style={{ width: "80px" }}>
                                                                <MDBTypography tag="h5" className="mb-0">
                                                                    £{item.price}
                                                                </MDBTypography>
                                                            </div>
                                                            {/* <a href="#!" onClick={() => handleRemove(item.id)}>
                                                                <Trash2Icon/>
                                                            </a> */}
                                                        </div>
                                                    </MDBCardBody>
                                                </MDBCard>
                                            ))}
                                        </MDBCard>
                                        <MDBCard className="text-center text-3xl">
                                            <p>Total = £{cartTotal}</p>
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
