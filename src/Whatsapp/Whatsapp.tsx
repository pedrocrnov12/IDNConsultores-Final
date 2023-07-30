import React from 'react';
import { Button } from '../button/Button';
import { AiOutlineWhatsApp } from 'react-icons/ai';

const WhatsAppChat: React.FC = () => {
  const handleButtonClick = () => {
    const phone = '529993707028'; // Número de teléfono de WhatsApp
    const message = encodeURIComponent('Hola, quiero contactar contigo'); // Mensaje predefinido

    const url = `https://api.whatsapp.com/send?phone=${phone}&text=${message}`;
    window.open(url, '_blank');
  };

  return (
    <div className="">
      <Button xl onClick={handleButtonClick}>
        <div className="flex items-center">
          <AiOutlineWhatsApp className="text-green-500 text-2xl mr-2" />
          <span>Chatea con nosotros</span>
        </div>
      </Button>
    </div>
  );
};

export default WhatsAppChat;
