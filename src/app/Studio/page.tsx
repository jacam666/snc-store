import { Card, CardBody, Image } from "@nextui-org/react"
import SocialsFooter from "../components/SocialsFooter"
import { CardHeader } from "react-bootstrap"

const StudioImages = [
    {
        id: 1,
        src: "images/studio/studioPic1_edited.jpg",
        alt: "Studio 1",
        description: "Are you looking for a personal trainer that can help you achieve your goals in a comfortable and private environment?"
    },
    {
        id: 2,
        src: "images/studio/studioPic2_edited.jpg",
        alt: "Studio 2",
        description: "Do you want to train with a bodybuilder and competitor who has won multiple competitions, is a level 4 nutritional coach and has 30 years of experience in the industry?"
    },
    {
        id: 3,
        src: "images/studio/studioPic3_edited.jpg",
        alt: "Studio 3",
        description: "If so, then you have come to the right place. Welcome to Snc Studio, where we offer one-to-one and group sessions with Mark Etherden, a certified personal trainer and successful bodybuilder."
    },
    {
        id: 4,
        src: "images/studio/studioPic4_edited.jpg",
        alt: "Studio 4",
        description: "Our studio is equipped with air conditioning and state of the art equipment."
    },
    {
        id: 5,
        src: "images/studio/studioPic5_edited.jpg",
        alt: "Studio 5",
        description: "Whether you want to lose weight, gain muscle, improve your health or prepare for a competition, we have the program for you"
    },
    {
        id: 6,
        src: "images/studio/studioPic6_edited.jpg",
        alt: "Studio 6",
        description: "Contact us today and book your free consultation with Mark Etherden. You will not regret it!"
    },
    {
        id: 7,
        src: "images/studio/studioPic7_edited.jpg",
        alt: "Studio 1",
        description: ""
    },
    {
        id: 8,
        src: "images/studio/studioPic8_edited.jpg",
        alt: "Studio 1",
        description: ""
    },
]

export default function Studio() {
    return (
        <div>
            <div>
                <img src="images/studio/studioPic9_edited1.jpg" alt="studio-banner" className="w-full" />
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-3">
                {StudioImages.map((StudioImage) => (
                    <Card className="flex flex-col h-full">
                        <CardBody  className="flex items-center">
                            <Image
                                width={500}
                                src={StudioImage.src}
                                alt={StudioImage.alt}
                            />
                        </CardBody>
                        <CardBody className="text-center">
                            {StudioImage.description}
                        </CardBody>
                    </Card>
                ))}

            </div>
            {/* <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-3">
                <div>
                    <Card className="flex flex-col h-full">
                        <CardBody className="flex items-center">
                            <Image
                                    isZoomed
                                    width={500}
                                    alt="protein Image with Zoom"
                                    src="images/studio/studioPic1_edited.jpg"
                                />
                        </CardBody>
                        <CardBody className="text-center">
                            <p>Are you looking for a personal trainer that can help you achieve your goals in a comfortable and private environment?</p>
                        </CardBody>
                    </Card>
                </div>
                <div>
                    <Card className="flex flex-col h-full">
                        <CardBody className="flex items-center">
                            <img src="images/studio/studioPic2_edited.jpg" alt="studioImage2" className="rounded-lg" />
                        </CardBody>
                        <CardBody className="text-center">
                            <p>Do you want to train with a bodybuilder and competitor who has won multiple competitions, is a level 4 nutritional coach and has 30 years of experience in the industry?</p>
                        </CardBody>
                    </Card>
                </div>
                <div>
                    <Card className="flex flex-col h-full">
                        <CardBody className="flex items-center">
                            <img src="images/studio/studioPic3_edited.jpg" alt="studioImage3" className="rounded-lg" />
                        </CardBody>
                        <CardBody className="text-center">
                            <p>If so, then you have come to the right place. Welcome to Snc Studio, where we offer one-to-one and group sessions with Mark Etherden, a certified personal trainer and successful bodybuilder.</p>
                        </CardBody>
                    </Card>
                </div>
                <div>
                    <Card className="flex flex-col h-full">
                        <CardBody className="flex items-center">
                            <img src="images/studio/studioPic4_edited.jpg" alt="studioImage4" className="rounded-lg" />
                        </CardBody>
                        <CardBody className="text-center">
                            <p>Our studio is equipped with air conditioning and state of the art equipment.</p>
                        </CardBody>
                    </Card>
                </div>
                <div>
                    <Card className="flex flex-col h-full">
                        <CardBody className="flex items-center">
                            <img src="images/studio/studioPic5_edited.jpg" alt="studioImage4" className="rounded-lg" />
                        </CardBody>
                        <CardBody className="text-center">
                            <p>Whether you want to lose weight, gain muscle, improve your health or prepare for a competition, we have the program for you.</p>
                        </CardBody>
                    </Card>
                </div>
                <div>
                    <Card className="flex flex-col h-full">
                        <CardBody className="flex items-center">
                            <img src="images/studio/studioPic6_edited.jpg" alt="studioImage4" className="rounded-lg" />
                        </CardBody>
                        <CardBody className="text-center">
                            <p>Contact us today and book your free consultation with Mark Etherden. You will not regret it!</p>
                        </CardBody>
                    </Card>
                </div>
                <div>
                    <Card className="flex flex-col h-full">
                        <CardBody className="flex items-center">
                            <img src="images/studio/studioPic7_edited.jpg" alt="studioImage4" className="rounded-lg" />
                        </CardBody>
                        <CardBody>
                            <p></p>
                        </CardBody>
                    </Card>
                </div>
                <div>
                    <Card className="flex flex-col h-full">
                        <CardBody className="flex items-center">
                            <img src="images/studio/studioPic8_edited.jpg" alt="studioImage4" className="rounded-lg" />
                        </CardBody>
                        <CardBody>
                            <p></p>
                        </CardBody>
                    </Card>
                </div>
            </div> */}
            <SocialsFooter />
        </div>
    )
}