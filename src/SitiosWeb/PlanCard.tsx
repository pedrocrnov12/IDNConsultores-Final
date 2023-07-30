import React from 'react';
import { useRouter } from 'next/router';

export interface Plan {
  name: string;
  price: number;
  features: string[];
}

const PlanCard: React.FC<{ plan: Plan }> = ({ plan }) => {
  const router = useRouter();

  const handleChoosePlan = () => {
    // Aquí puedes definir la ruta a la que deseas redirigir
    const route = '/ContacWebSites';

    // Redirigir a la página
    router.push(route);
  };

  return (
    <div className="bg-gray-200 rounded-lg shadow-lg p-2 text-center flex flex-col items-center justify-center h-full">
      <h2 className="text-4xl font-semibold mb-4">{plan.name}</h2>
      <p className="text-gray-700 text-2xl mb-6">${plan.price} por mes</p>
      <ul className="text-xl mb-8">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-center gap-4">
            <svg
              className="w-6 h-6 text-green-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {feature.includes('-') ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <polyline points="22 4 12 14.01 9 11.01" />
              )}
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button
        className="bg-blue-500 text-white rounded-md px-8 py-4 mt-8 hover:bg-blue-600"
        onClick={handleChoosePlan}
      >
        Elegir plan
      </button>
    </div>
  );
};

export default PlanCard;
