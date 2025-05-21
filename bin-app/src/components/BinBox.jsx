
import React from 'react';

const BinBox = ({ title, children, color = "#8fd5f0" }) => {
  return (
    <div className="mb-6">

      <div
        className="flex items-center px-4 py-2 rounded-t-lg text-white"
        style={{ backgroundColor: color }}
      >
        <h2 className="font-medium">{title}</h2>
      </div>


      <div className="border border-gray-300 rounded-b-lg p-4 bg-white">
        {children}
      </div>
    </div>
  );

};

export default BinBox;
