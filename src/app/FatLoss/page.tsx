"use client"

import React from "react"
import { Card, CardBody, CardHeader, Image } from "@nextui-org/react"
import SocialsFooter from "../components/SocialsFooter"
import AddToCartButton from "../components/AddToCartButton"

interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    size: string;
    flavour: string;
}


const FatLossProducts: Product[] = [
    {
        id: 1,
        name: "STAGE RIPPED EXTREME",
        price: 34.99,
        image: "images/fatlossImages/RIPPED-EXTREME-300x300.png",
        size: "60 Caps",
        flavour: "",
    },
    {
        id: 2,
        name: "NO MORE HUNGER",
        price: 24.99,
        image: "images/fatlossImages/NO-HUNGER-300x300.png",
        size: "90 Caps",
        flavour: "",
    },
    {
        id: 3,
        name: "STAGE RIPPED",
        price: 29.99,
        image: "images/fatlossImages/Stage-Ripped-CGI-300x300.png",
        size: "60 Caps",
        flavour: "",
    },
]

const FatLoss: React.FC = () => {

    return (
        <div>
            <img src="images/bannerImages/FatBurnerBanner.png" alt="fatLoss banner" />
            <div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 m-3">
                    {FatLossProducts.map((product) => (
                        <Card key={product.id} className="bg-white py-4">
                            <CardHeader className="pb-0 pt-2 flex-col items-center text-center">
                                <h1 className="text-2xl font-bold">{product.name}</h1>
                            </CardHeader>
                            <CardBody className="flex items-center">
                                <Image
                                    isZoomed
                                    width={240}
                                    alt="protein Image with Zoom"
                                    src={product.image}
                                />
                            </CardBody>
                            <div className="text-center">
                                {product.flavour && (
                                    <small className="text-black block text-xl font-bold">{product.flavour}</small>
                                )}
                                <small className="text-black text-lg block">{product.size}</small>
                            </div>
                            <small className="text-black text-center font-bold mt-3 text-xl">£{product.price.toFixed(2)}</small>
                            <AddToCartButton product={product} />
                        </Card>
                    ))}
                </div>
            </div>
            <SocialsFooter />
        </div>
    )
}

export default FatLoss;