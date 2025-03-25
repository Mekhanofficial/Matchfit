import React from "react";
import bg5 from "../../pictures/wall/jk12.jpg";
import fx1 from "../../pictures/hue/fx1.jpg";
import fx2 from "../../pictures/hue/fx2.jpg";
import fx3 from "../../pictures/hue/fx3.jpg";
import fx4 from "../../pictures/hue/fx4.jpg";
import fx5 from "../../pictures/hue/fx5.webp";
import fx6 from "../../pictures/hue/fx6.webp";
import pic4 from "../../pictures/wall/pic4.webp";
import px21 from "../../pictures/hue/px21.png"
import jk6 from "../../pictures/wall/jk6.jpg";
import jk9 from "../../pictures/wall/jk9.jpg";
import px1 from "../../pictures/hue/px1.jpg";
import px2 from "../../pictures/hue/px2.jpg";
import px3 from "../../pictures/hue/px3.jpg";
import px4 from "../../pictures/hue/px4.jpg";
import px9 from "../../pictures/hue/px9.webp";
import px10 from "../../pictures/hue/px10.webp";
import px11 from "../../pictures/hue/px11.jpg";
import px12 from "../../pictures/hue/px12.jpg";
import px13 from "../../pictures/hue/px13.jpg";
import px14 from "../../pictures/hue/px14.jpg";
import px15 from "../../pictures/hue/px15.jpg";
import px16 from "../../pictures/hue/px16.jpg";
import px18 from "../../pictures/hue/px18.jpg";
import px19 from "../../pictures/hue/px19.png";
import px20 from "../../pictures/hue/px20.png";
import { useState,useEffect } from "react";
import HeaderPage from "../../components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRotateBack, faLocationDot, faLock, faStar, faTruck } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const popularItems = [
  { src: fx1, name: "Monty jacket", price: "$150.00" },
  { src: fx2, name: "Monty jacket", price: "$150.00" },
  { src: fx3, name: "Monty jacket", price: "$150.00" },
  { src: fx4, name: "Monty jacket", price: "$150.00" },
  { src: fx5, name: "Monty jacket", price: "$150.00" },
  { src: fx6, name: "Monty jacket", price: "$150.00" },
];

const totalStars = 5; // Adjust as needed


const HomeHeroSection = () => {
   const [currentIndex, setCurrentIndex] = useState(0);

 
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true, // Enable auto-slide
    autoplaySpeed: 3000, // Set autoplay interval to 3 seconds
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const images = [
    { src: px1, cate: "Activewear", text: "Professional Pinstripe Blazer", price: "$250.00" },
    { src: px2, cate: "Work & Office", text: "Relaxed Fit Joggers", price: "$199.99" },
    { src: px3, cate: "Evening Dresses", text: "Urban Chic Ensemble", price: "$210.50" },
    { src: px4, cate: "Image 4", text: "Weekend Wanderlust Wardrobe", price: "$150.34" },
  ];

  const images2 = [
    { src: px9, text: "Rowing Blazers x Paddington™" },
    { src: px10, text: "Après-ski Capsule" },
  ];

  const images3 = [
    { src: px11 },
    { src: px12, },
    { src: px13,  },
    { src: px14,  },
    { src: px15,  },
    { src: px16,  },
  ];

  return (
    <>
      <HeaderPage />
      <section className="overflow-x-hidden ">
        <div
          className="w-full h-screen bg-cover bg-center lg:bg-fixed flex flex-col justify-center items-center"
          style={{ backgroundImage: `url(${bg5})` }}
        >
          {/* Semi-transparent black overlay */}
          <div className="absolute inset-0 bg-black opacity-50"></div>

          {/* Text Content Container */}
          <div className="text-center text-gray-200 px-4 sm:px-6 md:px-8 max-w-4xl relative z-10">
            {/* Subheading */}
            <h2 className="text-sm sm:text-base lg:text-xs font-bold mb-1 uppercase tracking-widest">
              Casual & Everyday
            </h2>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Effortlessly blend comfort <br className="hidden sm:block" /> &
              style!
            </h1>

            {/* Description */}
            <h3 className="text-sm sm:text-base lg:text-md mb-8 text-gray-300 font-semibold">
              Effortlessly blend comfort and style with our Casual & Everyday
              collection, featuring cozy sweaters, versatile denim, laid-back
              tees, and relaxed-fit joggers for your everyday adventures.
            </h3>

            {/* Call-to-Action Button */}
            <a
              href="#"
              className="inline-block px-8 py-3 text-sm border border-white text-white font-semibold  hover:bg-white hover:text-black transition-all duration-300 "
            >
              VIEW COLLECTION
            </a>
          </div>
        </div>
        <div className="bg-zinc-950 text-white py-[120px]">
          <div className="text-center mx-[70px]">
            {/* Section Heading */}
            <h1 className="text-2xl font-semibold">Our Featured Products</h1>
            <hr className="w-[70px] h-[3px] mx-auto my-5 bg-orange-500 border-none" />

            {/* Product Slider */}
            <Slider {...settings}>
              {popularItems.map((item, index) => (
                <div
                  key={index}
                  className="relative px-2 group transition-transform hover:scale-105"
                >
                  {/* Product Image */}
                  <div className="relative overflow-hidden rounded-lg shadow-md">
                    <img
                      className="w-full h-[350px] object-cover"
                      src={item.src}
                      alt={item.name}
                    />

                    {/* Quick View Button (Visible on Hover) */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black bg-opacity-50 transition-opacity duration-300">
                      <button className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300">
                        Quick View
                      </button>
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="mt-4 text-left">
                    <h3 className="text-base font-medium">{item.name}</h3>
                    <div className="flex items-center mt-1">
                      {/* Star Rating */}
                      {Array.from({ length: totalStars }, (_, index) => (
                        <FontAwesomeIcon
                          key={index}
                          className="text-yellow-500 text-base"
                          icon={faStar}
                        />
                      ))}
                    </div>
                    <h2 className="text-base mt-1 text-gray-300 font-semibold">
                      {item.price}
                    </h2>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div
          className="relative w-full h-[800px] sm:h-[1000px] bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url(${px20})`, // Static background image
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-center items-end text-center p-4 space-y-6">
            {/* Image */}
            <div className="w-[250px] h-[300px] sm:w-[350px] sm:h-[400px] md:w-[450px] md:h-[550px]">
              <img
                src={px18} // Display an image above the text
                alt="Collection"
                className="w-full h-full object-cover  shadow-2xl"
              />
            </div>

            {/* Text */}
            <div className="text-white max-w-[600px]">
              <h1 className="text-2xl sm:text-4xl md:text-5xl font-semibold mb-6">
                Explore Our Exquisite <br />
                <span className="text-[#16bb7c]">Jacket Collection</span>
              </h1>
              <button className="px-6 py-3  border border-gray-300 text-white font-bold text-sm uppercase tracking-wide hover:bg-[#128a6098] hover:scale-105 transition-all duration-300 shadow-lg">
                <a href="#" className="no-underline">
                  VIEW COLLECTION
                </a>
              </button>
            </div>
          </div>
        </div>
        {/* Blazer Section */}
        <div className="flex flex-col lg:flex-row items-center justify-center ">
          {/* Text Content */}
          <div className="text-center lg:text-left lg:max-w-[600px] lg:mr-[50px] ml-10">
            <h1 className="text-sm font-semibold text-[#292828] mb-2 uppercase tracking-widest">
              Work & Office Attire
            </h1>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.7rem] text-black mb-4 font-bold leading-tight">
              Professional Pinstripe Blazers Collection
            </h2>
            <p className="text- sm:text-xl font-semibold  text-gray-700 mb-6">
              Elevate your workwear with our Professional Pinstripe Blazers
              Collection, where tailored sophistication meets modern confidence
              for a powerfully polished office look.
            </p>
            <button className="w-[150px] py-3 rounded-sm bg-transparent border-[1.9px] border-gray-900 hover:bg-gray-100 transition-colors">
              <a
                href="#"
                className="no-underline text-gray-900 font-semibold text-sm uppercase"
              >
                Shop Now
              </a>
            </button>
          </div>

          {/* Image */}
          <div className="mt-8 lg:mt-0">
            <img
              src={px19}
              alt="Professional Pinstripe Blazers"
              className="w-full max-w-[700px] h-auto lg:h-[635px] object-cover shadow-lg"
            />
          </div>
        </div>
        <div
          className="relative w-full h-[800px] sm:h-[1000px] bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url(${px21})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          {/* Content Container - positioned top-left */}
          <div className="absolute -top-36 left-0 p-4 sm:p-10 flex flex-col items-start">
            {/* Image Container */}
            <div className="w-[250px] h-[300px] sm:w-[350px] sm:h-[400px] md:w-[450px] md:h-[500px] mb-4 sm:mb-6">
              <img
                src={fx3}
                alt="Collection"
                className="w-full h-full object-cover shadow-2xl"
              />
            </div>

            {/* Text Content - same width as image */}
            <div className="w-[250px] sm:w-[350px] md:w-[450px] text-white text-left">
              <h1 className="text-xl sm:text-3xl md:text-4xl font-semibold mb-2 sm:mb-4">
                Discover the allure of fashion reinvented!
              </h1>
              <p className="text-xs sm:text-sm md:text-base text-[#16bb7c] mb-4 sm:mb-6">
                Dive into a world of style with our latest collection! Shop now
                and redefine your wardrobe narrative!
              </p>
              <button className="px-4 py-2 sm:px-6 sm:py-3 border border-gray-300 text-white font-bold text-xs sm:text-sm uppercase tracking-wide hover:bg-[#128a5f] hover:scale-105 transition-all duration-300 shadow-lg">
                <a href="#" className="no-underline">
                  VIEW COLLECTION
                </a>
              </button>
            </div>
          </div>
        </div>
        <h1 className="m-10 text-center text-5xl font-semibold bg-gradient-to-r from-teal-900 via-purple-500 to-gray-900 text-transparent bg-clip-text animate-gradient bg-300% hover:animate-pulse">
          Newest Products
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
          {images.map((image, index) => (
            <div key={index} className="text-center">
              {/* Image */}
              <img
                src={image.src}
                alt={`Image ${index + 1}`}
                className="w-full h-auto shadow-md object-cover"
              />
              {/* Text Below Image */}
              <h2 className="mt-1 text-sm font-semibold text-gray-500">
                {image.cate}
              </h2>
              <p className="text-md font-semibold text-gray-900">
                {image.text}
              </p>
              <h6 className="text-md font-semibold text-gray-600">
                {image.price}
              </h6>
            </div>
          ))}
        </div>
        <div>
          {/* Brand Testimonial Section */}
          <div
            className="mt-24 w-full min-h-screen bg-cover bg-center bg-fixed flex flex-col justify-center items-center"
            style={{ backgroundImage: `url(${jk9})` }}
          >
            {/* Star Rating */}
            <div className="flex gap-2 mb-6">
              {[...Array(5)].map((_, index) => (
                <FontAwesomeIcon
                  key={index}
                  icon={faStar}
                  className="text-yellow-500 text-lg"
                />
              ))}
            </div>

            {/* Testimonial Text */}
            <h1 className="text-white text-lg md:text-xl lg:text-2xl text-center px-6 md:px-12 lg:px-48 leading-relaxed">
              ”FemmeWardrobe is my fashion sanctuary! The curated collection
              effortlessly blends chic trends with timeless elegance, making
              every purchase a delightful discovery. The quality of their pieces
              is unmatched, and I appreciate the brand's commitment to
              sustainable fashion. What truly sets FemmeWardrobe apart is their
              customer-centric approach.”
            </h1>

            {/* Testimonial Author */}
            <h1 className="mt-8 text-white text-sm md:text-base font-light">
              Sarah M., Devoted FemmeWardrobe Fan
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-6  my-20">
            {images2.map((image, index) => (
              <div key={index} className="text-center">
                {/* Image */}
                <img
                  src={image.src}
                  alt={`Image ${index + 1}`}
                  className="w-full h-auto rounded-lg  object-cover"
                />
                {/* Text Below Image */}
                <p className="mt-5 text-lg font-medium text-gray-800">
                  {image.text}
                </p>
              </div>
            ))}
          </div>
          <div>
            {/* Heading */}
            <h1 className="m-10 text-center text-3xl font-semibold bg-gradient-to-r from-teal-900 via-purple-500 to-gray-900 text-transparent bg-clip-text animate-gradient bg-300% hover:animate-pulse">
              Join The Crew
            </h1>

            {/* Image Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 p-6">
              {images3.map((image, index) => (
                <div
                  key={index}
                  className="text-center group relative overflow-hidden"
                >
                  {/* Image Container */}
                  <div className="w-full h-64 rounded-lg shadow-md overflow-hidden relative">
                    <img
                      src={image.src}
                      alt={`Image ${index + 1}`}
                      className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                    />
                    {/* Instagram Icon (Visible on Hover) */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black bg-opacity-50 transition-opacity duration-300">
                      <FontAwesomeIcon
                        icon={faInstagram}
                        className="text-white text-4xl cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Secure Features Section */}
          <div className="mt-24 px-6 text-slate-950 font-bold md:px-12 lg:px-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {/* Secure Payments */}
            <div className="p-6 bg-white hover:shadow-lg transition-shadow duration-300 relative group">
              <div className="icon-container relative inline-block">
                <div className="absolute inset-0  rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <FontAwesomeIcon
                  icon={faLock}
                  className="text-slate-950 h-6 text-3xl mb-4 relative z-10 group-hover:scale-110  transition-all duration-300"
                />
              </div>
              <h1 className="text-xl mb-2">Secure Payments</h1>
              <p className="text-gray-600 font-semibold">
                Shop with confidence knowing that your transactions are
                safeguarded.
              </p>
            </div>

            {/* Free Shipping */}
            <div className="p-6 bg-white hover:shadow-lg transition-shadow duration-300 relative group">
              <div className="icon-container relative inline-block">
                <div className="absolute inset-0  rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <FontAwesomeIcon
                  icon={faTruck}
                  className="text-slate-950 h-6  text-3xl mb-4 relative z-10 group-hover:scale-110  transition-all duration-300"
                />
              </div>
              <h1 className="text-xl mb-2">Free Shipping</h1>
              <p className="text-gray-600 font-semibold">
                Shopping with no extra charges – savor the liberty of
                complimentary shipping on every order.
              </p>
            </div>

            {/* Easy Returns */}
            <div className="p-6 bg-white  hover:shadow-lg transition-shadow duration-300 relative group">
              <div className="icon-container relative inline-block">
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <FontAwesomeIcon
                  icon={faArrowRotateBack}
                  className="text-slate-950 h-6  text-3xl mb-4 relative z-10 group-hover:scale-110  transition-all duration-300"
                />
              </div>
              <h1 className="text-xl mb-2">Easy Returns</h1>
              <p className="text-gray-600 font-semibold">
                With our hassle-free Easy Returns, changing your mind has never
                been more convenient.
              </p>
            </div>

            {/* Order Tracking */}
            <div className="p-6 bg-white hover:shadow-lg transition-shadow duration-300 relative group">
              <div className="icon-container relative inline-block">
                <div className="absolute inset-0  rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="text-slate-950 h-6 text-3xl mb-4 relative z-10 group-hover:scale-110  transition-all duration-300"
                />
              </div>
              <h1 className="text-xl mb-2">Order Tracking</h1>
              <p className="text-gray-600 font-semibold">
                Stay in the loop with our Order Tracking feature – from checkout
                to your doorstep.
              </p>
            </div>
          </div>
        </div>
        <div
          className="check mt-24 w-full h-[500px] bg-cover bg-center bg-fixed flex flex-col items-end justify-center"
          style={{ backgroundImage: `url(${jk6})` }}
        >
          <div className="checktext text-white p-6 lg:p-12">
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light mb-4">
              Explore
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Elevate your wardrobe, <br className="hidden sm:block" /> embrace
              timeless style!
            </h2>
            <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-light mb-8">
              Explore our collections today and experience the joy of fashion.{" "}
              <br className="hidden sm:block" />
              Shop now for the epitome of chic sophistication!
            </h3>
            <button className="px-8 py-3 border border-gray-400 rounded-sm hover:bg-white hover:border-white transition-all duration-300">
              <a
                href="#"
                className="text-white font-semibold text-sm sm:text-base hover:text-gray-800"
              >
                Shop Now
              </a>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeHeroSection;
