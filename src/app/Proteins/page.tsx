import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import SocialsFooter from "../components/SocialsFooter";

const ProteinProducts = [
    {
        id: "1",
        name: 'THE ONLY WHEY PROTEIN',
        price: 39.99,
        image: "images/ProteinImages/only-whey-final-300x300.png",
        // image2: "./images/only-whey-nutritional-info.jpeg",
        to: "./OnlyWheyPage",
        size: "2.2 Kg",
    },
    {
        id: "2",
        name: 'THE ONLY WHEY PROTEIN',
        price: 29.99,
        image: "images/ProteinImages/only-whey-final-300x300.png", 
        // image2: "./images/only-whey-nutritional-info.jpeg",
        to: "./OnlyWheyPage",
        size: "908g",
    },
    {
        id: "3",
        name: "AFTER TRAIN ADVANCED",
        price: 39.99,
        image: "images/ProteinImages/advanced-aftertrain-strawberrylime-300x300.png",
        to: "./AfterTrainAdvancedPage",
        flavour: "Strawberry and Lime",
        size: "2Kg"
    },
    {
        id: "4",
        name: "AFTER TRAIN ADVANCED",
        price: 39.99,
        image: "images/ProteinImages/AFTER-TRAIN-ADVANCED-300x300.png",
        to: "./AfterAdvancedBlueCandyPage",
        flavour: "Blue Candy Flavour",
        size: "2Kg"
    },
    {
        id: "5",
        name: "AFTER TRAIN ADVANCED",
        price: 39.99,
        image: "images/ProteinImages/orange-mango-advanced-aftertrain-for-web-300x300.png",
        to: "./AfterAdvancedOrangePage",
        flavour: "Orange Mango Flavour",
        size: "2Kg"
    },
    {
        id: "6",
        name: "AFTER TRAIN",
        price: 24.99,
        image: "images/ProteinImages/1After_Train_Fruit_Punch-1-300x300.png",
        to: "./AfterTrainFruitPage",
        description: "",
        flavour: "Fruit Punch",
        size: "908g"
    },
    {
        id: "7",
        name: "AFTER TRAIN",
        price: 24.99,
        image: "images/ProteinImages/2After_Train_Raspberry-1-300x300.png",
        to: "./AfterTrainBluePage",
        description: "",
        flavour: "Raspberry",
        size: "908g"
    },
    {
        id: "8",
        name: "AFTER TRAIN",
        price: 24.99,
        image: "images/ProteinImages/apple-aftertrain-300x300.png",
        to: "./AfterTrainPage",
        flavour: "Apple",
        size: "908g"
    },
    {
        id: "9",
        name: "AFTER TRAIN",
        price: 24.99,
        image: "images/ProteinImages/3After_Train_Orange-1-300x300.png",
        to: "./AfterTrainOrangePage",
        flavour: "Orange",
        size: "908g"
    },
]

export default function Proteins() {
    return (
        <div>
            <img src="images/bannerImages/OnlyWheYBanner.png" alt="banner" className="protein-banner"/>
            <div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 m-3">
                    {ProteinProducts.map((ProteinProduct) => (
                        <Card key={ProteinProduct.id} className="py-4">
                            <CardHeader className="pb-0 pt-2 flex-col items-center text-center">
                                <p className="text-2xl uppercase font-bold">{ProteinProduct.name}</p>
                            </CardHeader>
                            <CardBody className="flex items-center">
                                <img src={ProteinProduct.image} alt={ProteinProduct.name} className="object-cover" />
                            </CardBody>
                            <div className="text-center">
                                {ProteinProduct.flavour && (
                                    <small className="text-black block text-xl py-2 font-bold">{ProteinProduct.flavour}</small>
                                )}
                                <small className="text-black text-lg block">{ProteinProduct.size}</small>
                            </div>
                            <small className="text-black text-center font-bold mt-3 text-xl">£{ProteinProduct.price.toFixed(2)}</small>
                        </Card>
                    ))}
                </div>
            </div>
            <SocialsFooter />
        </div>
    );
}
