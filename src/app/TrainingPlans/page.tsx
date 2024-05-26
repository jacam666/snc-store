import { Card, CardBody, CardHeader } from "@nextui-org/react"
import SocialsFooter from "../components/SocialsFooter"

const TrainingProducts = [
    {
        id: 1,
        name: "Training Plan",
        price: 30,
        image: "images/trainingImages/620-620-traininngplan-1-300x300.jpg",
        size: "",
    },
    {
        id: 2,
        name: "Diet Plan",
        price: 30,
        image: "images/trainingImages/personal-training-image-1_edited.jpg",
        flavour: "",
        size: "",
    },
]

export default function TrainingPlans() {
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
                                <img src={TrainingProduct.image} alt={TrainingProduct.name} className="object-cover" />
                            </CardBody>
                            <div className="text-center">
                                {TrainingProduct.flavour && (
                                    <small className="text-black block text-xl py-2 font-bold">{TrainingProduct.flavour}</small>
                                )}
                                <small className="text-black text-lg block">{TrainingProduct.size}</small>
                            </div>
                            <small className="text-black text-center font-bold mt-3 text-xl">£{TrainingProduct.price.toFixed(2)}</small>
                        </Card>
                    ))}
                    <Card>
                        <CardHeader className="pb-0 pt-2 flex-col items-center text-center">
                            <p className="text-2xl uppercase font-bold">
                                Certified Nutrition Coach
                            </p>
                        </CardHeader>
                        <CardBody>
                            <img src="images/trainingImages/nutritionCertificate.jpg" className="object-cover" />
                        </CardBody>
                    </Card>
                </div>
            </div>
            <SocialsFooter />
        </div>
    )
}