import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
  faChevronUp,
  faPlus,
  faLocationDot,
  faArrowRotateBack,
  faTruck,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import jk7 from "../pictures/wall/jk7.jpg";
import jk10 from "../pictures/wall/jk10.jpg";

export default function ContactPage() {
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add your submission logic here
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60 z-[-1]" />
        <img
          src={jk7}
          alt="Restaurant ambiance"
          className="absolute inset-0 w-full h-full object-cover z-[-2]"
        />
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="z-10 text-white px-4"
        >
          <h1 className="font-bold text-5xl md:text-6xl mb-4">Contact Us</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            We'd love to hear from you. Reach out for reservations, questions,
            or feedback.
          </p>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">
            Get in Touch
          </h1>
          <div className="w-24 h-1 bg-teal-600 mx-auto mb-6" />
          <p className="text-3xl text-gray-600 max-w-3xl mx-auto">
            We value the connection with our community and are here to assist in
            any way we can.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mx-6 md:mx-20">
          {/* Contact Form */}
          <div className="bg-white p-8 md:p-10 rounded-xl shadow-xl border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="sr-only">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-teal-600 text-white font-semibold py-4 px-6 rounded-lg hover:bg-teal-700 transition duration-300 text-lg"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white p-8 md:p-10 rounded-xl shadow-xl border border-gray-100">
              <h2 className="text-3xl font-bold mb-8 text-gray-800">
                Contact Information
              </h2>

              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-teal-600 mt-1"
                  />
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500 mb-1">
                      EMAIL
                    </h3>
                    <p className="text-lg text-gray-800">contact@example.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="text-teal-600 mt-1"
                  />
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500 mb-1">
                      PHONE
                    </h3>
                    <p className="text-lg text-gray-800">(303) 555-0105</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    className="text-teal-600 mt-1"
                  />
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500 mb-1">
                      ADDRESS
                    </h3>
                    <p className="text-lg text-gray-800">
                      2972 Westheimer Rd.
                      <br />
                      Santa Ana, Illinois 85486
                    </p>
                  </div>
                </div>

                {/* Socials */}
                <div className="flex items-start space-x-6">
                  <FontAwesomeIcon
                    icon={faPlus}
                    className="text-teal-600 mt-1"
                  />
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500 mb-3">
                      FOLLOW US
                    </h3>
                    <div className="flex space-x-4">
                      {[faFacebookF, faInstagram, faTwitter, faLinkedinIn].map(
                        (icon, i) => (
                          <a
                            key={i}
                            href="#"
                            className="text-gray-600 hover:text-teal-600 transition duration-300"
                          >
                            <FontAwesomeIcon icon={icon} className="h-4 w-4" />
                          </a>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Our Location
          </h2>
          <div className="relative h-96 w-full rounded-xl overflow-hidden shadow-2xl border-2 border-white">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215573291234!2d-73.987844924537!3d40.74844097138983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1623251234567!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Google Maps Location"
              className="filter grayscale-0 hover:grayscale-0 transition duration-500"
            ></iframe>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-24 px-6 md:px-12 lg:px-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center text-slate-950 font-bold">
          {[
            {
              icon: faLock,
              title: "Secure Payments",
              desc: "Shop with confidence knowing that your transactions are safeguarded.",
            },
            {
              icon: faTruck,
              title: "Free Shipping",
              desc: "Complimentary shipping on every order.",
            },
            {
              icon: faArrowRotateBack,
              title: "Easy Returns",
              desc: "Hassle-free returns for your convenience.",
            },
            {
              icon: faLocationDot,
              title: "Order Tracking",
              desc: "Track your orders anytime, anywhere.",
            },
          ].map(({ icon, title, desc }, i) => (
            <div
              key={i}
              className="p-6 bg-white hover:shadow-lg transition duration-300 group relative"
            >
              <div className="icon-container mb-4">
                <FontAwesomeIcon
                  icon={icon}
                  className="text-slate-950 text-3xl group-hover:scale-110 transition"
                />
              </div>
              <h1 className="text-xl mb-2">{title}</h1>
              <p className="text-gray-600 font-semibold">{desc}</p>
            </div>
          ))}
        </div>
         {/* CTA Section */}
                <div
                  className="check mt-24 w-full h-[500px] bg-cover bg-center bg-scroll lg:bg-fixed flex flex-col items-end justify-center"
                  style={{ backgroundImage: `url(${jk10})` }}
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

      {/* Scroll to top */}
      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-teal-600 text-white p-3 rounded-full shadow-md hover:bg-teal-700 transition"
          aria-label="Scroll to top"
        >
          <FontAwesomeIcon icon={faChevronUp} />
        </button>
      )}
    </>
  );
}
