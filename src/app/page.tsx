"use client"

import Footer from "./components/Footer";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Home() {
  return (
    <div className="bg-white  ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
        <div className="relative  ">
          <div>
            <div className="gap-4">
              <img src="/images/homepage-images/snc-products_edited.jpg" className="homepage-image px-2 " />
              <div className="absolute inset-0 flex justify-center items-center">
                <span className="text-white text-center text-lg rounded-lg backdrop-brightness-50 px-4 py-1" >Great tasting protein.</span>
              </div>
            </div>
          </div>
          <p className="text-black p-2 text-center">SNC Supplements are a range of products designed to help you achieve your fitness goals.</p>
        </div>
        <div className="relative  ">
          <div>
            <div className="gap-4">
              <img src="/images/homepage-images/CarouselStageB4Pump_edited.jpg" className="homepage-image px-2 " />
              <div className="absolute inset-0 flex justify-center items-center ">
                <span className="text-white text-center text-lg rounded-lg backdrop-brightness-50 px-4 py-1" >Extremely effective pre-workouts.</span>
              </div>
            </div>
          </div>
          <p className="text-black p-2 text-center">Unleash your full potential with our premium pre-workouts, meticulously designed to elevate your exercise routine to the next level.</p>
        </div>
        <div className="relative  ">
          <div>
            <div className="gap-4">
              <img src="/images/homepage-images/CarouselOnlyWheyPromotion_edited.jpg" className="homepage-image px-2 " />
              <div className="absolute inset-0 flex justify-center items-center ">
                <span className="text-white text-center text-lg rounded-lg backdrop-brightness-50 px-4 py-1">The Only Whey protein shake.</span>
              </div>
            </div>
          </div>
          <p className="text-black p-2 text-center">Each serving delivers up to 24% of protein from instantized whey protein concentrate.</p>
        </div>
        <div className="relative  ">
          <div>
            <div className="gap-4">
              <img src="/images/homepage-images/homepage-snc-display-image2_edited.jpg" className="homepage-image px-2 " />
              <div className="absolute inset-0 flex justify-center items-center ">
                <span className="text-white text-center text-lg  rounded-lg backdrop-brightness-50 px-4 py-1">Wide range of products.</span>
              </div>
            </div>
          </div>
          <p className="text-black p-2 text-center">We have products ranging from Proteins, pre-workouts to fat burners.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}