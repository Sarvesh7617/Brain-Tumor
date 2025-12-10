import React from "react";
import Host1 from "../assets/hospital1.webp";
import Host2 from "../assets/hospital2.webp";
import Host3 from "../assets/hospital3.webp";
import Host4 from "../assets/hospital4.webp";
import Host5 from "../assets/hospital5.webp";

// Dummy hospital data
const hospitals = [
  {
    id: 1,
    name: "City Medical Hospital",
    image: Host1,
    address: "123 Medical Street, Cityville",
    price: "$150 per consultation",
    checkDetails: "Brain MRI, CT Scan, Consultation, etc.",
  },
  {
    id: 2,
    name: "Global Health Clinic",
    image: Host2,
    address: "456 Health Rd, Metropolis",
    price: "$180 per consultation",
    checkDetails: "MRI, Blood Tests, Consultation, etc.",
  },
  {
    id: 3,
    name: "CarePlus Diagnostics",
    image: Host3,
    address: "789 Wellness Ave, Uptown",
    price: "$120 per consultation",
    checkDetails: "Brain MRI, X-ray, Consultation, etc.",
  },
  {
    id: 4,
    name: "BrainHealth Center",
    image: Host4,
    address: "101 Neuro Street, Downtown",
    price: "$200 per consultation",
    checkDetails: "Brain MRI, Tumor Detection, etc.",
  },
  {
    id: 5,
    name: "NeuroScan Institute",
    image: Host5,
    address: "202 Neurology Lane, Suburbia",
    price: "$160 per consultation",
    checkDetails: "MRI, CT Scan, Blood Tests, etc.",
  },
];

const HospitalCard = ({ hospital }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
      <img
        className="w-full h-48 object-cover border-b-2"
        src={hospital.image}
        alt={hospital.name}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{hospital.name}</div>
        <p className="text-gray-700 text-base">
          <strong>Address:</strong> {hospital.address}
        </p>
        <p className="text-gray-700 text-base">
          <strong>Price (Approx.):</strong> {hospital.price}
        </p>
        <p className="text-gray-700 text-base">
          <strong>Check Details:</strong> {hospital.checkDetails}
        </p>
      </div>
    </div>
  );
};

const DoctorList = () => {
  return (
    <div className="relative">
      {/* Overlay with blur and "Under Construction" message */}
      <div className="absolute inset-0 bg-gray-300/70 flex justify-center items-center z-20">
        <h1 className="text-4xl font-bold text-red-500 bg-slate-700 p-4 rounded">Page Under Construction</h1>
      </div>

      {/* Actual content of the page */}
      <div className="flex flex-wrap justify-center sm:pt-28 pt-32 z-10">
        {hospitals.map((hospital) => (
          <HospitalCard key={hospital.id} hospital={hospital} />
        ))}
      </div>
    </div>
  );
};

export default DoctorList;