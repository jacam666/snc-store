import { Card, CardBody, CardHeader, Image } from "@nextui-org/react"
import SocialsFooter from "../components/SocialsFooter"
import AddToCartButton from "../components/AddToCartButton"
import React from "react";

interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    size: string;
    flavour: string;
}

const WellbeingProducts: Product[] = [
    {
        id: 1,
        name: "CONTEST P.C.T",
        price: 29.99,
        image: "images/wellbeingImages/PCT-NEW-300x300.png",
        size: "240 Caps",
        flavour: "",
    },
    {
        id: 2,
        name: "YEAR ROUND",
        price: 19.99,
        image: "/images/wellbeingImages/Year-round-300x300.png",
        size: "60 Caps",
        flavour: "",
    },
]

const GeneralWellbeing: React.FC = () => {
    return (
        <div>
            <img src="images/bannerImages/after_train_banner_test_01_2545px.png-1.png" alt="banner" />
            <div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 m-3">
                    {WellbeingProducts.map((product) => (
                        <Card key={product.id} className="py-4">
                            <CardHeader className="pb-0 pt-2 flex-col items-center text-center">
                                <p className="text-2xl uppercase font-bold">{product.name}</p>
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
                                    <small className="text-black block text-xl py-2 font-bold">{product.flavour}</small>
                                )}
                                <small className="text-black text-lg block">{product.size}</small>
                            </div>
                            <small className="text-black text-center font-bold mt-3 text-xl">£{product.price.toFixed(2)}</small>
                            
                            <AddToCartButton product={product} />
                        </Card>
                    ))}
                    <Card>
                        <CardBody className="flex items-center">
                            <img src="images/wellbeingImages/more-stock copy.jpg" alt="stock-image" />
                        </CardBody>
                    </Card>
                </div>
            </div>
            <SocialsFooter />
        </div>
    )
}
export default GeneralWellbeing;