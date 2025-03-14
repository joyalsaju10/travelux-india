import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

// Sample package data
const packageData = {
  "evergreen-kerala": {
    name: "evergreen kerala",
    img: "/images/evergreen-1.jpg", // Ensure file exists
    duration: "3 Days | 2 Nights",
    description: "Get the best-selling 2-night Munnar package for your mini vacation...",
    itinerary: [
      "Cochin - Munnar",
      "Munnar - Sightseeing",
      "Munnar - Thekkady",
      "Thekkady - Alleppey",
      "Alleppey - Cochin",
    ],
  },
  "captivating-kerala": {
    name: "Captivating Kerala",
    img: "/images/captivating.jpg",
    duration: "5 Days | 4 Nights",
    description: "Explore the beauty of Kerala with this amazing 5-day package...",
    itinerary: [
      "Cochin - Athirappilly",
      "Athirappilly - Munnar",
      "Munnar - Thekkady",
      "Thekkady - Alleppey",
      "Alleppey - Kovalam",
    ],
  },
};

export default function PackageDetails({ params }) {
  const packageName = params.package?.toLowerCase(); // Ensure lowercase for URL consistency
  const data = packageData[packageName];

  if (!data) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center">
        <h1 className="text-3xl font-bold text-red-600">404 - Package Not Found</h1>
        <p className="text-gray-500 mt-2">The package you are looking for does not exist.</p>
        <Link href="/packages" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition">
  ← Back to Packages
</Link>

      </div>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <Head>
        <title>{data.name} | Travelux India</title>
        <meta name="description" content={data.description} />
      </Head>

      {/* Back Button */}
      <Link href="/packages" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition">
  ← Back to Packages
</Link>


      {/* Package Details */}
      <div className="flex flex-col items-center mt-4">
        <Image src={data.img} alt={data.name} width={800} height={450} className="rounded-lg shadow-lg" />
        <h1 className="text-3xl font-bold text-center text-blue-600">{data.name}</h1>
        <p className="text-lg mt-2 text-gray-700">{data.duration}</p>
        <p className="text-center text-gray-600 mt-2">{data.description}</p>
      </div>

      {/* Itinerary Section */}
      <section className="mt-6 bg-blue-100 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-blue-600 text-center">Tour Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {data.itinerary.map((day, index) => (
            <div key={index} className="flex items-center bg-white p-3 rounded-lg shadow">
              <span className="bg-yellow-500 text-white px-3 py-1 rounded mr-3 font-bold">D-{index + 1}</span>
              <p>{day}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
