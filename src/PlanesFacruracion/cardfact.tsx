import React from 'react';
import Link from 'next/link';
const ComparisonTable4: React.FC<{ planName: string; prices: string[]; features: string[] }> = ({
  planName,
  prices,
  features,
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg mb-8 md:w-96 lg:w-120">
      <div className="bg-black text-white py-8 text-4xl text-center font-bold">
        {planName}
      </div>
      <div className="py-12 text-2xl text-center font-bold">
        {prices.map((price, index) => (
          <div key={index}>{price}</div>
        ))}
      </div>
      <div className="px-12 max-h-60 overflow-y-auto">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center py-4 text-xl leading-tight">
            <span className="flex-grow">{feature}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
      <Link href={'/ContactFacturacion'}>
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-4 px-8 rounded">
          Cotizar
        </button>
        </Link>
      </div>
    </div>
  );
};

export default ComparisonTable4;
