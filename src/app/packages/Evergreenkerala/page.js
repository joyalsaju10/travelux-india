"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function EvergreenKerala() {
  const router = useRouter();

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Back Button */}
      <button 
        onClick={() => router.back()} 
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition"
      >
        ← Back to Packages
      </button>
      {/* Package Title and Main Image */}
      
      <div className="flex flex-col items-center mt-4">
        <Image src="/images/E1.jpg" alt="Evergreen Kerala" width={800} height={450} className="rounded-lg shadow-lg" />
        <h1 className="text-3xl font-bold text-center text-blue-600">Evergreen Kerala</h1>
        <p className="text-lg mt-2 text-gray-700">3 Days | 2 Nights</p>
        <p className="text-center text-gray-600 mt-2">
          Get the best-selling 2-night Munnar package for your mini vacation. Explore maximum places and enjoy a plethora of activities in a short span of time.
        </p>
      </div>

      {/* Tour Details */}
<section className="mt-6 bg-blue-100 p-6 rounded-lg shadow-md">
  <h2 className="text-2xl font-bold text-blue-600 text-center">Tour Details</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
    <div className="flex items-center bg-white p-3 rounded-lg shadow">
      <span className="bg-yellow-500 text-white px-3 py-1 rounded mr-3 font-bold">D-1</span>
      <p className="text-black">Cochin - Munnar</p>
    </div>
    <div className="flex items-center bg-white p-3 rounded-lg shadow">
      <span className="bg-yellow-500 text-white px-3 py-1 rounded mr-3 font-bold">D-2</span>
      <p className="text-black">Munnar - Sightseeing</p>
    </div>
    <div className="flex items-center bg-white p-3 rounded-lg shadow">
      <span className="bg-yellow-500 text-white px-3 py-1 rounded mr-3 font-bold">D-3</span>
      <p className="text-black">Munnar - Cochin</p>
    </div>
  </div>
</section>

{/* Package Inclusions */}
<section className="mt-6 p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-blue-600 text-center">Package Includes</h2>
        <ul className="list-disc list-inside mt-4 text-gray-700">
          <li>Pickup & Drop Cochin</li>
          <li>3 Night Hotel Stay (3, 4 & 5 Star Hotel Depending on your package)</li>
          <li>A/C Private Cab with Sightseeing (Sedan, Ertiga, Innova & Tempo Traveller)</li>
          <li>1 Night Houseboat Stay with Full Meal (Premium, Deluxe & Sharing Boat Options)</li>
        </ul>
      </section>

      
      {/* Additional Images */}
      <section className="mt-6">
        <h2 className="text-2xl font-bold text-blue-600 text-center">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mt-4">
          <Image src="/images/E3.jpg" alt="" width={400} height={250} className="rounded-lg shadow-md" />
          <Image src="/images/E4.jpg" alt="" width={400} height={250} className="rounded-lg shadow-md" />
          <Image src="/images/E2.jpg" alt="" width={400} height={250} className="rounded-lg shadow-md" />
          <Image src="/images/E5.jpg" alt="" width={400} height={250} className="rounded-lg shadow-md" />
        </div>
      </section>

{/* Customizable Services */}
<section className="mt-6 p-6 bg-blue-100 rounded-lg shadow-md">
  <h2 className="text-2xl font-bold text-blue-600 text-center">Customizable Services Available</h2>
  <div className="grid grid-cols-4 sm:grid-cols-8 gap-4 mt-4 text-center">
    {[
      { icon: "bed decoration", text: "Flower Bed Decoration" },
      { icon: "candlelight-dinner", text: "Candlelight Dinner" },
      { icon: "cake cutting", text: "Cake Cutting" },
      { icon: "jacuzzi", text: "Jacuzzi" },
      { icon: "photoshoot", text: "Photoshoot" },
      { icon: "ayurveda-spa", text: "Wellness Ayurveda Spa" },
      { icon: "village activities", text: "Cultural Village Activities" },
      { icon: "jeep-safari", text: "Adventure Jeep Safari" },
    ].map((service, index) => (
      <div key={index} className="flex flex-col items-center">
        <Image src={`/icons/${service.icon}.svg`} alt={service.text} width={50} height={50} className="w-12 h-12" />
        <p className="text-sm mt-2 text-black">{service.text}</p>
      </div>
    ))}
  </div>
</section>

    </div>
  );
}


      