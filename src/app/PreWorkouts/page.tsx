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

const WorkoutProducts: Product[] = [
    {
        id: 1,
        name: "B4 EXTREME",
        price: 24.99,
        image: "images/PreWorkoutImages/b4-candy-extreme-300x300.png",
        flavour: "COTTON CANDY",
        size: "",
    },
    {
        id: 2,
        name: "B4 EXTREME",
        price: 24.99,
        image: "images/PreWorkoutImages/cap-b4pre-blue-300x300 copy1.png",
        flavour: "BLUE RASPBERRY",
        size: "",
    },
    {
        id: 3,
        name: "B4 TRAIN",
        price: 24.99,
        image: "images/PreWorkoutImages/B4-Rio-berry-300x300.png",
        flavour: "RIO BERRY",
        size: "",
    },
    {
        id: 4,
        name: "B4 TRAIN",
        price: 24.99,
        image: "images/PreWorkoutImages/B4-tropical-gummy-300x300.png",
        flavour: "TROPICAL GUMMY",
        size: "",
    },
    {
        id: 5,
        name: "STAGE PUMP",
        price: 29.99,
        image: "images/PreWorkoutImages/cap-stagepump-strawberry-lime-300x300.png",
        flavour: "STRAWBERRY and LIME",
        size: "",
    },
    {
        id: 6,
        name: "STAGE PUMP",
        price: 29.99,
        image: "images/PreWorkoutImages/STAGE-PUMP-BLUE-FOR-WEB-300x300.png",
        flavour: "BLUE RASPBERRY",
        size: "",
    },
]

const PreWorkouts: React.FC = () => {
    return (
        <div>
            <img src="images/bannerImages/B4ExtremeBanner.png" alt="banner" className="workout-banner" />
            <div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 m-3">
                    {WorkoutProducts.map((product) => (
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
                                    <small className="text-black block text-xl font-bold">{product.flavour}</small>
                                )}
                                <small className="text-black block">{product.size}</small>
                            </div>
                            <small className="text-black text-center mt-3 text-xl">£{product.price.toFixed(2)}</small>
                            <AddToCartButton product={product} />
                        </Card>
                    ))}
                </div>
            </div>
            <SocialsFooter />
        </div>
    )
}

export default PreWorkouts;