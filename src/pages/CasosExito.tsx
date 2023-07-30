import SuccessCases from "../CasosExito/exito";
import { Hero2 } from "../Barra/Barra";
import React from 'react';
import { Footer } from "../templates/Footer";

const Home: React.FC = () => {
  return (
    <div>
      <Hero2></Hero2>
    <div className="bg-gray-100 min-h-screen">
      <main className="container mx-auto py-8">
        <h1 className="text-5xl font-bold mb-4 text-center" style={{ fontFamily: 'Bahnschrift SemiBold SemiCondensed' }}>Casos De Exito</h1>
        <SuccessCases></SuccessCases>

    
      </main>
    </div>
    <Footer></Footer>
    </div>
  );
};

export default Home;
