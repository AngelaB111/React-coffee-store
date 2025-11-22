import React from "react";

function InfoBox() {
  return (
    <div className="bg-white p-8 shadow-lg rounded-xl">
      <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

      <div className="mb-6">
        <h4 className="text-lg font-semibold">Phone</h4>
        <p className="text-gray-700">+1 (555) 123-4567</p>
      </div>

      <div className="mb-6">
        <h4 className="text-lg font-semibold">Address</h4>
        <p className="text-gray-700">123 Coffee Street, Aroma City, CA</p>
      </div>

      <div className="mb-6">
        <h4 className="text-lg font-semibold">Working Hours</h4>
        <p className="text-gray-700">
          Mon–Fri: 8:00 AM – 8:00 PM <br />
          Sat–Sun: 9:00 AM – 6:00 PM
        </p>
      </div>
    </div>
  );
}

export default InfoBox;
