"use client";

import Link from "next/link";
import Image from "next/image";

export default function Packages() {
  const packages = [
    {  name: "evergreen kerala", img: "/images/evergreen 1.jpg", duration: "3 Days | 2 Nights" },
    { name: "Captivating Kerala", img: "/images/Captivating Kerala .jpg", duration: "5 Days | 4 Nights" },
    { name: "Explore Kerala", img: "/images/explore kerala.jpg", duration: "2 Days | 1 Night" },
    {  name: "Golden Kerala", img: "/images/Golden Kerala.jpg", duration: "4 Days | 3 Nights" },
    {  name: "Classic Kerala", img: "/images/classic kerala.jpg", duration: "6 Days | 5 Nights" }
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center text-blue-600">Best Packages</h1>

      {/* Package List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {packages.map((pkg) => (
          <Link key={pkg.name} href={`/packages/${pkg.name}`} className="block bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition">
            <Image src={pkg.img} alt={pkg.name} width={400} height={250} className="rounded-lg" />
            <h2 className="text-xl font-bold text-blue-600 mt-2">{pkg.name}</h2>
            <p className="text-gray-700">{pkg.duration}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
