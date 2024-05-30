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

const TrainingProducts: Product[] = [
    {
        id: 1,
        name: "Training Plan",
        price: 30,
        image: "images/trainingImages/620-620-traininngplan-1-300x300.jpg",
        size: "",
        flavour: "",
    },
    {
        id: 2,
        name: "Diet Plan",
        price: 30,
        image: "images/trainingImages/personal-training-image-1_edited.jpg",
        size: "",
        flavour: "",
    },
]

const TrainingPlans: React.FC = () => {
    return (
        <div>
            <div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 m-3">
                    {TrainingProducts.map((TrainingProduct) => (
                        <Card key={TrainingProduct.id} className="py-4">
                            <CardHeader className="pb-0 pt-2 flex-col items-center text-center">
                                <p className="text-2xl uppercase font-bold">{TrainingProduct.name}</p>
                            </CardHeader>
                            <CardBody className="flex items-center">
                                <Image
                                    isZoomed
                                    width={400}
                                    alt="protein Image with Zoom"
                                    src={TrainingProduct.image}
                                />
                            </CardBody>
                            {TrainingProduct.price !== undefined && (
                                <small className="text-black text-center font-bold mt-3 text-xl">£{TrainingProduct.price.toFixed(2)}</small>
                            )}
                            <AddToCartButton product={TrainingProduct} />
                        </Card>
                    ))}
                    <Card key="certified-nutrition-coach">
                        <CardBody>
                            <CardHeader className="pb-0 pt-2 flex-col items-center text-center">
                                <p className="text-2xl uppercase font-bold">Certified Nutrition Coach</p>
                            </CardHeader>
                            <CardBody className="flex items-center">
                                <Image
                                    isZoomed
                                    width={400}
                                    alt="protein Image with Zoom"
                                    src="images/trainingImages/nutritionCertificate.jpg" 
                                />
                            </CardBody>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <SocialsFooter />
        </div>
    )
}

export default TrainingPlans;