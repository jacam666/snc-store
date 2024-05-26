import { Card, CardBody, CardHeader } from "@nextui-org/react"
import MyNavbar from "../components/Navbar"
import SocialsFooter from "../components/SocialsFooter"

const WellbeingProducts = [
    {
        id: 1,
        name: "CONTEST P.C.T",
        price: 29.99,
        image: "images/wellbeingImages/PCT-NEW-300x300.png",
        size: "240 Caps",
        flavour: "",
    },
    {
        id: 1,
        name: "YEAR ROUND",
        price: 19.99,
        image: "/images/wellbeingImages/Year-round-300x300.png",
        size: "60 Caps",
        flavour: "",
    },
]

export default function GeneralWellbeing() {
    return (
        <div>
            <MyNavbar />
            <img src="images/bannerImages/after_train_banner_test_01_2545px.png-1.png" alt="banner" />
            <div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 m-3">
                    {WellbeingProducts.map((WellbeingProduct) => (
                            <Card>
                                <CardHeader  className="pb-0 pt-2 flex-col items-center text-center">
                                    <p className="text-2xl uppercase font-bold">{WellbeingProduct.name}</p>
                                </CardHeader>
                                <CardBody className="flex items-center">
                                    <img src={WellbeingProduct.image} alt={WellbeingProduct.name} className="w-1/2" />
                                </CardBody>
                                <div className="text-center">
                                    {WellbeingProduct.flavour && (
                                        <small className="text-black block text-xl py-2 font-bold">{WellbeingProduct.flavour}</small>
                                    )}
                                    <small className="text-black text-lg block">{WellbeingProduct.size}</small>
                                </div>
                                <small className="text-black text-center font-bold mt-3 text-xl">£{WellbeingProduct.price.toFixed(2)}</small>
                            </Card>
                    ))}
                    <Card>
                        <CardBody className="flex items-center">
                            <img src="images/wellbeingImages/more-stock copy.jpg" alt="stock-image"  />
                        </CardBody>
                    </Card>
                </div>
            </div>
            <SocialsFooter />
        </div>
    )
}