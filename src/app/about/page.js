import Layout from "../components/layout";
import Image from "next/image";

export default function About() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto p-6 text-center">
        <h1 className="text-4xl font-bold text-blue-600">About Us</h1>
        <p className="mt-4 text-gray-700 text-lg">
          Welcome to <strong>Travelux India</strong>  <br /> we offer the best tour packges to explore the beautiful state of kerala. Our goal is to help you experience Kerala’s stunning landscapes, peaceful backwaters, and rich culture. We focus on making your trip easy and memmorable with our carefully planned travek packages.
          <br /> We are here to help you find the perfect tours, whether you are looking for a relaxing houseboat reide, a thriling adventure, or a deep dive into local traditions. At Kerala Trips Planner, we are dedicated to providing you with a great travel experience that you will remember for lifetime. 
        </p>

        {/* Image Section */}
        <div className="mt-6 flex justify-center">
          <Image 
            src="/images/about us.jpg" 
            alt="About Us" 
            width={600} 
            height={400} 
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Mission Section */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-blue-400">Our Mission</h2>
          <p className="mt-2 text-gray-600">
            Our goal is to provide hassle-free and enriching travel experiences, ensuring every trip is a journey of discovery and joy.
          </p>
        </div>

        {/* Contact Section */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-blue-400">Get in Touch</h2>
          <p className="mt-2 text-gray-600">
            Have any questions? Reach out to us at <strong>contact@traveluxindia.com</strong>.
          </p>
        </div>
      </div>
    </Layout>
  );
}
