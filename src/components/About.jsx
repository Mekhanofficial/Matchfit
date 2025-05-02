import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faLeaf,
  faUsers,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import jk15 from "../pictures/wall/jk15.jpg";
import jk17 from "../pictures/wall/jk17.jpg";
import jk10 from "../pictures/wall/jk10.jpg";

export default function AboutPage() {
  return (
    <section className="overflow-x-hidden font-sans text-gray-800">
      {/* Hero Section */}
      <div className="relative flex items-center justify-center text-center h-screen">
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
          <h1 className="font-extrabold text-white text-6xl tracking-tight uppercase">
            About Us
          </h1>
        </motion.div>
      </div>

      {/* Our Story Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-12 p-16 max-w-7xl mx-auto">
        <div className="md:w-1/2 space-y-6 p-6">
          <h2 className="text-4xl md:text-5xl font-black leading-tight text-zinc-900">
            From Vision to Vogue: The Birth of FemmeWardrobe
          </h2>
        </div>

        <div className="md:w-1/2 space-y-6 p-6">
          <h5 className="text-sm uppercase tracking-widest text-teal-600 font-semibold flex items-center">
            <FontAwesomeIcon icon={faHeart} className="mr-2" />
            Our Story
          </h5>
          <h3 className="text-lg font-medium text-zinc-800">
            Our journey began with a simple yet powerful vision — to redefine
            the way women experience fashion.
          </h3>
          <p className="text-base leading-relaxed text-gray-600 font-medium">
            Fueled by a passion for style and a commitment to individuality, we
            embarked on a mission to curate a collection that speaks to the
            diverse tastes and personalities of our cherished customers. From
            our humble beginnings to the vibrant online space we inhabit today,
            each milestone represents a chapter in our story. Join us on this
            fashion-forward adventure, where every piece tells a tale of
            inspiration, dedication, and sartorial elegance.
          </p>
        </div>
      </div>

      <hr className="border-gray-300 max-w-7xl mx-auto" />

      {/* Quality Assurance Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-20 space-y-8">
        <h5 className="text-sm uppercase tracking-widest text-teal-800 font-semibold flex items-center">
          <FontAwesomeIcon icon={faCheckCircle} className="mr-2" />
          Quality Assurance
        </h5>
        <h3 className="text-4xl md:text-5xl font-bold text-zinc-900">
          We understand that fashion is an expression of identity, and we take
          pride in delivering products that embody the highest standards of
          quality.
        </h3>
        <p className="text-base leading-relaxed font-medium text-gray-600">
          Our journey to excellence begins with meticulous sourcing, where we
          carefully select materials that meet our stringent criteria for
          durability, comfort, and style. Every garment is crafted with
          precision in our state-of-the-art manufacturing facilities, ensuring
          attention to detail at every stitch. Our commitment to quality doesn't
          end there – rigorous quality control processes guarantee that each
          piece meets our exacting standards before it finds its way to your
          wardrobe. Trust in FemmeWardrobe for fashion that not only captures
          attention but withstands the test of time.
        </p>
      </div>

      {/* Customer-Centric Section */}
      <div
        className="mt-24 w-full h-screen bg-cover bg-center flex items-center bg-fixed"
        style={{ backgroundImage: `url(${jk17})` }}
      >
        <div className="bg-black/60 w-full h-full flex items-center">
          <div className="text-white p-6 lg:p-12 max-w-3xl space-y-6">
            <h5 className="text-xs font-semibold uppercase tracking-widest text-teal-400 flex items-center">
              <FontAwesomeIcon icon={faUsers} className="mr-2" />
              Customer-Centric Approach
            </h5>
            <h3 className="text-4xl md:text-5xl font-bold leading-snug">
              Beyond Fashion: Nurturing a Customer-Centric Experience
            </h3>
            <p className="text-base leading-relaxed font-medium text-gray-200">
              We believe that the essence of our success lies in the
              satisfaction of our customers. Our commitment to providing an
              exceptional shopping experience goes beyond trends and styles –
              it's about understanding and meeting the unique needs of every
              individual who chooses FemmeWardrobe. From personalized
              recommendations to hassle-free returns, we've crafted every aspect
              of our service with you in mind. Our dedicated customer support
              team is here to ensure your journey with us is seamless,
              enjoyable, and exceeds your expectations. Join our community of
              empowered fashion enthusiasts, where your satisfaction is not just
              a priority; it's our passion.
            </p>
          </div>
        </div>
      </div>

      {/* Sustainability Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-20 space-y-12">
        <div>
          <h5 className="text-xs font-semibold uppercase tracking-widest text-teal-600 flex items-center">
            <FontAwesomeIcon icon={faLeaf} className="mr-2" />
            Sustainability Initiatives
          </h5>
          <h3 className="text-4xl md:text-5xl font-bold text-zinc-900 mt-2">
            Conscious Fashion for a Better Tomorrow
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <p className="text-base font-medium leading-relaxed text-zinc-800">
            We recognize the responsibility we hold in shaping a more
            sustainable future for fashion. Our commitment to eco-friendly
            practices and sustainable fashion choices is at the core of what we
            do.
          </p>
          <div className="space-y-6 text-gray-600 font-medium">
            <p className="text-base leading-relaxed">
              From the careful selection of ethically sourced materials to the
              implementation of environmentally conscious manufacturing
              processes, every step we take is a stride toward a greener and
              more sustainable industry.
            </p>
            <p className="text-base leading-relaxed">
              We prioritize transparency in our supply chain, partnering with
              suppliers who share our values of fair labor practices and
              environmental stewardship. Our sustainable fashion choices extend
              to packaging as well – we use recyclable materials to minimize our
              environmental footprint. Join us on this journey towards conscious
              fashion, where style meets responsibility, and every purchase
              contributes to a brighter, eco-friendly tomorrow.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div
        className="mt-24 w-full h-[500px] bg-cover bg-center bg-fixed flex items-center justify-end"
        style={{ backgroundImage: `url(${jk10})` }}
      >
        <div className=" p-6 lg:p-12 text-white text-right max-w-2xl mr-10">
          <h1 className="text-lg sm:text-xl md:text-2xl font-light mb-2">
            Explore
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
            Elevate your wardrobe, <br className="hidden sm:block" />
            embrace timeless style!
          </h2>
          <h3 className="text-base sm:text-lg font-light mb-8">
            Explore our collections today and experience the joy of fashion.{" "}
            <br className="hidden sm:block" />
            Shop now for the epitome of chic sophistication!
          </h3>
          <a
            href="#"
            className="inline-block px-8 py-3 border border-white rounded-md font-semibold text-sm sm:text-base hover:bg-white hover:text-zinc-900 transition-all duration-300"
          >
            Shop Now
          </a>
        </div>
      </div>
    </section>
  );
}
