import { Card, CardBody } from "@nextui-org/react"
import MyNavbar from "../components/Navbar"
import SocialsFooter from "../components/SocialsFooter"

export default function Studio() {
    return (
        <div>
            <MyNavbar />
            <div>
                <img src="images/studio/studioPic9_edited1.jpg" alt="studio-banner" className="w-full" />
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-3">
                <div>
                    <Card className="flex flex-col h-full">
                        <CardBody className="flex items-center">
                            <img src="images/studio/studioPic1_edited.jpg" alt="studioImage1" className="rounded-lg" />
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
            </div>
            <SocialsFooter />
        </div>
    )
}