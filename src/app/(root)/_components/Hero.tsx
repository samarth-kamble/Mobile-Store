"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image1 from "../../../../public/img/images/hero/headphone.png";
import Image2 from "../../../../public/img/images/hero/vr.png";
import Image3 from "../../../../public/img/images/hero/macbook.png";
import Image4 from "../../../../public/img/images/hero/gaming.png";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  slideIn,
} from "@/components/animations/animations";

const HeroData = [
  {
    id: 1,
    img: Image1,
    subtitle: "Experience Premium Sound",
    title: "Crystal Clear",
    title2: "Headphones",
    description:
      "Immerse yourself in rich, high-quality sound with crystal-clear headphones designed for ultimate comfort and style.",
  },
  {
    id: 2,
    img: Image2,
    subtitle: "Step Into the Future",
    title: "Immersive",
    title2: "Virtual",
    description:
      "Discover a new dimension of gaming and entertainment with immersive VR technology that takes you beyond reality.",
  },
  {
    id: 3,
    img: Image3,
    subtitle: "Unleash Your Productivity",
    title: "Powerful",
    title2: "Laptops",
    description:
      "Stay ahead with powerful laptops tailored for performance, mobility, and style. Work smarter, not harder.",
  },
  {
    id: 4,
    img: Image4,
    subtitle: "Level Up Your Gaming",
    title: "Dynamic",
    title2: "Playstation",
    description:
      "Elevate your gaming experience with dynamic PlayStation gear built for immersive play and endless fun.",
  },
];

const Hero = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="container mx-auto mt-6 px-4">
      <div className="overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] hero-bg-color flex items-center justify-center p-5 dark:bg-gray-900">
        <div className="w-full">
          <Slider {...settings}>
            {HeroData.map((data) => (
              <motion.div
                key={data.id}
                initial="initial"
                animate="animate"
                variants={staggerContainer}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 items-center">
                  {/* Text Content Section */}
                  <motion.div
                    variants={fadeInUp}
                    className="flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10"
                  >
                    <h1 className="text-2xl sm:text-6xl lg:text-2xl font-bold dark:text-white">
                      {data.subtitle}
                    </h1>
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold dark:text-gray-300">
                      {data.title}
                    </h1>
                    <h1 className="text-5xl uppercase text-white sm:text-[80px] md:text-[100px] xl:text-[150px] font-bold dark:text-gray-200">
                      {data.title2}
                    </h1>
                    <div>
                      <Button className="hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10 dark:bg-gray-700 dark:text-white">
                        Shop Now
                      </Button>
                    </div>
                  </motion.div>
                  {/* Image Content Section */}
                  <motion.div
                    variants={slideIn("right")}
                    className="order-1 sm:order-2 flex justify-center"
                  >
                    <div>
                      <Image
                        src={data.img}
                        alt="hero"
                        className="w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] sm:scale-105 lg:scale-120 object-contain drop-shadow-[-8px_4px_6px_rgba(0,0,0,0.4)] relative z-40"
                      />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Hero;