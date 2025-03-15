"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";


export default function Packages() {
  const router = useRouter();

  const packages = [
    { name: "Evergreen Kerala", path: "Evergreenkerala", img: "/images/Evergreen 1.jpg", duration: "3 Days | 2 Nights" },
    { name: "Captivating Kerala", path: "Captivatingkerala", img: "/images/Captivating kerala .jpg", duration: "5 Days | 4 Nights" },
    { name: "Explore Kerala", path: "Explorekerala", img: "/images/explore kerala.jpg", duration: "2 Days | 1 Night" },
    { name: "Golden Kerala", path: "Goldenkerala", img: "/images/Golden kerala.jpg", duration: "4 Days | 3 Nights" },
    { name: "Classic Kerala", path: "Classickerala", img: "/images/Classic kerala.jpg", duration: "6 Days | 5 Nights" }
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition"
      >
        ← Back
      </button>

      <h1 className="text-3xl font-bold text-center text-blue-600 mt-4">Best Packages</h1>

      {/* Package List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {packages.map((pkg) => (
          <Link key={pkg.name} href={`/packages/${pkg.path}`} className="block bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition">
            <Image src={pkg.img} alt={pkg.name} width={400} height={250} className="rounded-lg" />
            <h2 className="text-xl font-bold text-blue-600 mt-2">{pkg.name}</h2>
            <p className="text-gray-700">{pkg.duration}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
