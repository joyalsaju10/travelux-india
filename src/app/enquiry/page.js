"use client";

import { useState } from "react";
import Head from "next/head";
import Layout from "../components/layout";

export default function EnquiryPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "", // Step 1: Add address to state
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Encode message for WhatsApp
    const message = `Hello, my name is ${formData.name}. I would like to inquire about your travel services. Here are my details:
    
    📧 Email: ${formData.email}
    📞 Phone: ${formData.phone}
    🏠 Address: ${formData.address} // Step 4: Include address in message
    📝 Message: ${formData.message}`;

    const whatsappURL = `https://wa.me/919633111010?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank"); // Open WhatsApp chat

    console.log("Form Submitted:", formData);
  };

  return (
    <Layout>
      <Head>
        <title>Enquiry - Travelux India</title>
      </Head>

      {/* Page Header with Background Image */}
      <div
        className="relative w-full min-h-[200px] sm:min-h-[300px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/enquiry-bg.jpeg')" }}
      >
        <div className="absolute inset-0 bg-transparent bg-opacity-50"></div>
        <h1 className="relative text-white font-extrabold text-2xl sm:text-4xl text-center">
          Enquiry Form
        </h1>
      </div>

      {/* Enquiry Form */}
      <div className="w-full sm:max-w-2xl mx-auto p-4 sm:p-6 bg-white shadow-lg rounded-lg mt-6 sm:mt-10">
        <h2 className="text-xl sm:text-2xl font-bold text-center text-blue-600">
          We’d Love to Hear From You!
        </h2>
        <p className="text-center text-gray-600 mt-2">
          Fill in the details below and we’ll get back to you soon.
        </p>

        <form className="mt-4 sm:mt-6 space-y-3 sm:space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-3 border rounded-lg"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded-lg"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone"
            className="w-full p-3 border rounded-lg"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Your Address" // Step 2: Add address input field
            className="w-full p-3 border rounded-lg"
            value={formData.address}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Travel Plans"
            className="w-full p-3 border rounded-lg h-24 sm:h-32"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition"
          >
            Submit via WhatsApp
          </button>
        </form>
      </div>

      {/* Contact Information */}
      <div className="text-center mt-6 sm:mt-10 text-gray-600">
        <p>
          📞 Call us: <span className="font-semibold">+91 9633111010</span> <br />
          <span className="font-semibold">+91 96330 59668</span>
        </p>
        <p>📧 Email: info.traveluxindia@gmail.com</p>
      </div>
    </Layout>
  );
}
