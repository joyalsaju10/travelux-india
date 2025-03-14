"use client";

import Head from "next/head";
import Image from "next/image";
import Layout from "./components/layout";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function TravelPage() {
  const bestPackages = [
    { name: "Evergreen Kerala", duration: "3 Days | 2 Nights", img: "/images/evergreen 1.jpg" },
    { name: "Captivating Kerala", duration: "5 Days | 4 Nights", img: "/images/Captivating kerala .jpg" },
    { name: "Explore Kerala", duration: "4 Days | 3 Nights", img: "/images/explore kerala.jpg" },
    { name: "Golden Kerala", duration: "7 Days | 6 Nights", img: "/images/Golden kerala.jpg" },
    { name: "Classic Kerala", duration: "6 Days | 5 Nights", img: "/images/Classic kerala.jpg" },
  ];

  const topPackages = [
    { name: "Honeymoon Package", duration: "4 Days | 3 Nights", img: "/images/honeymoon.jpg" },
    { name: "Family Tour", duration: "5 Days | 4 Nights", img: "/images/family tour.jpg" },
    { name: "Group Tour", duration: "6 Days | 5 Nights", img: "/images/group tour.jpg" },
  ];

  return (
    <Layout>
      <Head>
        <title>Travelux India - Kerala Tours</title>
        <meta name="description" content="Explore the best Kerala tour packages, including Honeymoon, Family, and Group Tours with Travelux India." />
      </Head>

      {/* Hero Section */}
      <div
        className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center"
        style={{
          backgroundImage: "url('/images/bg-main.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-transparent bg-opacity-40"></div>
        <h1 className="relative text-white font-extrabold text-4xl sm:text-5xl md:text-7xl text-center leading-tight font-[stella] z-10">
          MAKE YOUR HOLIDAYS <br />
          <span className="text-5xl sm:text-6xl md:text-8xl block mt-2">MEMORABLE</span>
        </h1>
      </div>

      {/* Main Content */}
      <main className="p-4 sm:p-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-600">Welcome to Travelux India</h2>
        <p className="text-base md:text-lg mt-2 text-center">
          We offer the best tour packages to explore Kerala’s stunning landscapes, peaceful backwaters, and rich culture.
        </p>

        {/* Best Packages Section */}
        <section className="mt-6">
          <h2 className="text-xl md:text-2xl font-semibold text-center text-blue-600">Best Packages</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
            {bestPackages.map((pkg) => (
              <a
                key={pkg.name}
                href={`/packages/${pkg.name.toLowerCase().replace(/\s+/g, "-")}`}
                className="bg-white shadow-md rounded-lg overflow-hidden block"
              >
                <Image src={pkg.img} alt={pkg.name} width={400} height={250} className="w-full h-40 md:h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg md:text-xl font-semibold text-blue-500">{pkg.name}</h3>
                  <p className="text-gray-600">{pkg.duration}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Customizable Services Section */}
        <section className="relative mt-10 flex justify-center px-4">
          <div className="relative bg-white text-black p-6 w-full max-w-2xl shadow-xl rounded-xl border border-gray-200 text-center">
            {/* Pin Effect */}
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-red-500 rounded-full shadow-md border-2 border-white"></div>

            {/* Trusted Badge */}
            <div className="flex justify-between items-center mb-4">
              <span className="bg-green-600 text-white px-2 py-1 text-xs font-bold rounded">⭐ TRUSTED</span>
              <span className="text-xs font-bold border px-2 py-1 rounded">100%</span>
            </div>

            <h2 className="text-xl sm:text-2xl font-semibold text-blue-600">CUSTOMIZABLE SERVICES</h2>

            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 mt-4">
              {[
                { icon: "bed decoration", text: "Flower Bed decoration" },
                { icon: "jeep-safari", text: "Adventure Jeep Safari" },
                { icon: "ayurveda-spa", text: "Wellness Ayurveda Spa" },
                { icon: "candlelight-dinner", text: "Candlelight Dinner" },
                { icon: "jacuzzi", text: "Jacuzzi" },
                { icon: "photoshoot", text: "Photoshoot" },
                { icon: "cake cutting", text: "Cake Cutting" },
                { icon: "village activities", text: "Cultural Village Activities" },
              ].map((service, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <Image src={`/icons/${service.icon}.svg`} alt={service.text} width={50} height={50} />
                  <p className="text-sm mt-2">{service.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Top Packages Section (Auto-Sliding) */}
        <section className="max-w-4xl mx-auto mt-12">
          <h2 className="text-xl md:text-2xl font-semibold text-center text-blue-600">Top Packages</h2>
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop
            pagination={{ clickable: true }}
            lazyPreloadPrevNext={1}
            className="mt-6"
          >
            {topPackages.map((pkg) => (
              <SwiperSlide key={pkg.name}>
                <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-4">
                  <Image src={pkg.img} alt={pkg.name} width={400} height={250} className="rounded-lg" />
                  <h3 className="text-xl font-bold mt-3">{pkg.name}</h3>
                  <p className="text-gray-600">{pkg.duration}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

         {/* Google Location Map */}
      <section className="mt-12">
        <h2 className="text-xl md:text-2xl font-semibold text-center text-blue-600">Find Us on Google Maps</h2>
        <div className="mt-4 flex justify-center">
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31448.92252449008!2d76.267304!3d10.850516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7c1b93333c7b9%3A0xf4a6e9a0b445d3b9!2sKerala!5e0!3m2!1sen!2sin!4v1709812345678"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg shadow-lg   w-full"
          ></iframe>
        </div>
      </section>
      </main>

      {/* Floating Call Button */}
<a
  href="tel:+919633111010"
  className="fixed bottom-6 left-6 md:bottom-10 md:left-10 bg-blue-500 hover:bg-blue-600 text-white p-5 md:p-6 rounded-full shadow-lg flex items-center justify-center transition-all duration-300"
  aria-label="Call Now"
>
<Image src="/icons/telephone.svg" alt="WhatsApp" width={35} height={35} className="md:w-[40px] md:h-[40px]" />
</a>

{/* WhatsApp Floating Button */}
<a
  href="https://wa.me/919633111010"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 md:bottom-10 md:right-10 bg-green-500 p-4 md:p-5 rounded-full shadow-lg hover:bg-green-600 transition"
>
  <Image src="/icons/whatsapp.svg" alt="WhatsApp" width={35} height={35} className="md:w-[40px] md:h-[40px]" />
</a>

    </Layout>
  );
}
