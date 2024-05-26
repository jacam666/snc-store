import { Card, CardBody, CardHeader } from "@nextui-org/react"
import MyNavbar from "../components/Navbar"
import SocialsFooter from "../components/SocialsFooter"

const FatLossProducts = [
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
        id: 1,
        name: "STAGE RIPPED",
        price: 29.99,
        image: "images/fatlossImages/Stage-Ripped-CGI-300x300.png",
        size: "60 Caps",
        flavour: "",
    },
]

export default function FatLoss() {
    return (
        <div>
            <MyNavbar />
            <img src="images/bannerImages/FatBurnerBanner.png" alt="fatLoss banner" />
            <div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 m-3">
                    {FatLossProducts.map((FatLossProduct) => (
                        <Card key={FatLossProduct.id} className="bg-white py-4">
                            <CardHeader className="pb-0 pt-2 flex-col items-center text-center">
                                <h1 className="text-2xl font-bold">{FatLossProduct.name}</h1>
                            </CardHeader>
                            <CardBody className="flex flex-col justify-between items-center">
                                <img src={FatLossProduct.image} alt={FatLossProduct.name} className="w-1/2" />
                            </CardBody>
                            <div className="text-center">
                                {FatLossProduct.flavour && (
                                    <small className="text-black block text-xl font-bold">{FatLossProduct.flavour}</small>
                                )}
                                <small className="text-black text-lg block">{FatLossProduct.size}</small>
                            </div>
                            <small className="text-black text-center font-bold mt-3 text-xl">£{FatLossProduct.price.toFixed(2)}</small>
                        </Card>
                    ))}
        
                </div>
            </div>
            <SocialsFooter />
        </div>
    )
}