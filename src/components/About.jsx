import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faLeaf,
  faUsers,
  faHeart,
  faShieldAlt,
  faRecycle,
} from "@fortawesome/free-solid-svg-icons";
import jk15 from "../pictures/wall/jk15.jpg";
import jk17 from "../pictures/wall/jk17.jpg";
import jk2 from "../pictures/wall/jk2.jpg";

export default function AboutPage() {
  return (
    <>
      <section style={{ overflowX: "hidden" }}>
        {/* Hero Section */}
        <div className="relative flex -mt-24 top-1 items-center justify-center text-center h-screen">
          <div className="absolute top-0 left-0 w-full h-full bg-zinc-950 opacity-80 z-[-1]"></div>
          <img
            src={jk15}
            alt="Fashion background"
            className="absolute inset-0 w-full h-full object-cover z-[-2]"
          />
          <motion.div
            className="z-10"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="font-bold text-white text-5xl">About Us</h1>
          </motion.div>
        </div>

        {/* Our Story Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-zinc-950 p-16 max-w-7xl mx-auto">
          <div className="md:w-1/2 p-10">
            <h2 className="text-5xl font-bold">
              From Vision to Vogue: The Birth of FemmeWardrobe
            </h2>
          </div>

          <div className="md:w-1/2 space-y-4">
            <h5 className="text-sm uppercase tracking-widest text-teal-600">
              <FontAwesomeIcon icon={faHeart} className="mr-2" />
              Our Story
            </h5>
            <h3 className="text-lg font-semibold">
              Our journey began with a simple yet powerful vision — to redefine
              the way women experience fashion.
            </h3>
            <p className="text-base leading-relaxed">
              Fueled by a passion for style and a commitment to individuality,
              we embarked on a mission to curate a collection that speaks to the
              diverse tastes and personalities of our cherished customers.
            </p>
            <p className="text-base leading-relaxed">
              Join us on this fashion-forward adventure, where every piece tells
              a tale of inspiration, dedication, and sartorial elegance.
            </p>
          </div>
        </div>

        <hr className="max-w-7xl mx-auto" />

        {/* Quality Assurance Section */}
        <div className="max-w-7xl mx-auto p-16">
          <h5 className="text-sm uppercase tracking-widest text-teal-600">
            <FontAwesomeIcon icon={faCheckCircle} className="mr-2" />
            Quality Assurance
          </h5>
          <h3 className="text-2xl font-semibold mt-2 mb-6">
            We understand that fashion is an expression of identity, and we take
            pride in delivering products that embody the highest standards of
            quality.
          </h3>
          <p className="text-base leading-relaxed">
            Our journey to excellence begins with meticulous sourcing, where we
            carefully select materials that meet our stringent criteria for
            durability, comfort, and style. Every garment is crafted with
            precision in our state-of-the-art manufacturing facilities.
          </p>
        </div>

        {/* Customer-Centric Section */}
       

        <div
          className="check mt-24 w-full h-[500px] bg-cover bg-center bg-scroll lg:bg-fixed flex flex-col items-start justify-center"
          style={{ backgroundImage: `url(${jk17})` }}
        >
          <div className="text-white p-6 lg:p-12 max-w-2xl">
            <h5 className="text-sm uppercase tracking-widest text-teal-300">
              <FontAwesomeIcon icon={faUsers} className="mr-2" />
              Customer-Centric Approach
            </h5>
            <h3 className="text-2xl font-semibold mt-2 mb-4">
              Beyond Fashion: Nurturing a Customer-Centric Experience
            </h3>
            <p className="text-base leading-relaxed">
              We believe that the essence of our success lies in the
              satisfaction of our customers. Our commitment to providing an
              exceptional shopping experience goes beyond trends and styles.
            </p>
          </div>
        </div>

        {/* Sustainability Section */}
        <div className="max-w-7xl mx-auto p-16">
          <h5 className="text-sm uppercase tracking-widest text-teal-600">
            <FontAwesomeIcon icon={faLeaf} className="mr-2" />
            Sustainability Initiatives
          </h5>
          <h3 className="text-2xl font-semibold mt-2 mb-6">
            Conscious Fashion for a Better Tomorrow
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <p className="text-base leading-relaxed">
              We recognize the responsibility we hold in shaping a more
              sustainable future for fashion. Our commitment to eco-friendly
              practices and sustainable fashion choices is at the core of what
              we do.
            </p>
            <p className="text-base leading-relaxed">
              From the careful selection of ethically sourced materials to the
              implementation of environmentally conscious manufacturing
              processes, every step we take is a stride toward a greener and
              more sustainable industry.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div
          className="check mt-24 w-full h-[500px] bg-cover bg-center bg-scroll lg:bg-fixed flex flex-col items-end justify-center"
          style={{ backgroundImage: `url(${jk2})` }}
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
}
