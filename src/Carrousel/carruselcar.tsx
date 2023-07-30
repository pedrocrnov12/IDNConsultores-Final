import { useState, useRef } from 'react';

interface Card {
  title: string;
  image: string;
  description: string;
}

interface CarouselProps {
  cards: Card[];
}

const Carousel: React.FC<CarouselProps> = ({ cards }) => {
  const [currentCard, setCurrentCard] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const nextCard = () => {
    setCurrentCard((prevCard) => (prevCard === cards.length - 1 ? 0 : prevCard + 1));
  };

  const previousCard = () => {
    setCurrentCard((prevCard) => (prevCard === 0 ? cards.length - 1 : prevCard - 1));
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen">
      <div className="relative mt-10 overflow-hidden w-10/12 max-w-screen-lg">
        <div
          ref={carouselRef}
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentCard * 100}%)` }}
        >
          {cards.map((card, index) => (
            <div key={index} className="carousel-card flex-shrink-0 w-full p-4">
              <div className="flex bg-white shadow-lg rounded-lg h-96">
                <div className="flex flex-col justify-between w-3/4 p-4">
                  <div className="flex flex-col">
                    <h2 className="text-2xl font-bold text-center">{card.title}</h2>
                    <p className="text-bg-white mt-2 font-normal text-lg">{card.description}</p>
                  </div>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
                    Cotizar
                  </button>
                </div>
                <img src={card.image} alt={card.title} className="w-2/4 h-4/4" />
              </div>
            </div>
          ))}
        </div>
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 flex items-center cursor-pointer" onClick={previousCard}>
          <svg className="w-8 h-8 text-gray-700 hover:text-gray-900" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M6.707 4.293a1 1 0 010 1.414L3.414 9H16a1 1 0 010 2H3.414l3.293 3.293a1 1 0 01-1.414 1.414l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 flex items-center cursor-pointer" onClick={nextCard}>
          <svg className="w-8 h-8 text-gray-700 hover:text-gray-900" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M13.293 15.707a1 1 0 010-1.414L16.586 11H4a1 1 0 010-2h12.586l-3.293-3.293a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
